<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body" v-for="(cart,index) in shopCartList" :key="index">
        <ul class="cart-list" v-for="cartInfo in cart.cartInfoList" :key="cartInfo.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked='cartInfo.isChecked' @click="oneIsChecked(cartInfo)">
          </li>
          <li class="cart-list-con2">
            <img :src="cartInfo.imgUrl">
            <div class="item-msg">{{cartInfo.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{cartInfo.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="changeSkuNum(-1,cartInfo)">-</a>
            <input autocomplete="off" type="text" :value="cartInfo.skuNum" minnum="1" class="itxt" @change="changeSkuNum($event.target.value-cartInfo.skuNum,cartInfo)">
            <a href="javascript:void(0)" class="plus" @click="changeSkuNum(1,cartInfo)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cartInfo.skuNum*cartInfo.cartPrice}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="deleteOneCart(cartInfo)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isAllCheck">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deleteAllCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{totalCart}}</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalMoney}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ShopCart',
  data() {
    return {

    }
  },
  mounted() {
    this.getShopCartList();
  },
  methods: {
    getShopCartList() {
      this.$store.dispatch('getShopCartList');
    },
    async changeSkuNum(disNum, cartInfo) {
      if (disNum + cartInfo.skuNum < 1) {
        disNum = 1 - cartInfo.skuNum;
      }
      try {
        await this.$store.dispatch('addOrUpdateShopCart', { skuId: cartInfo.skuId, skuNum: disNum });
        alert('修改数量成功');
        this.getShopCartList();
      } catch (err) {
        alert('修改数量失败，' + err.message);
      }
    },
    // 单个改变购物车的状态
    async oneIsChecked(cartInfo) {
      try {
        await this.$store.dispatch('oneIsChecked', { skuId: cartInfo.skuId, isChecked: cartInfo.isChecked ? 0 : 1 });
        alert('修改状态成功');
        // 重新获取购物车数据
        this.getShopCartList();
      } catch (error) {
        alert('修改状态失败' + error);
      }
    },
    // 单个删除
    async deleteOneCart(cartInfo) {
      try {
        await this.$store.dispatch('deleteOneCart', cartInfo.skuId);
        alert('删除成功');
        this.getShopCartList();
      } catch (error) {
        alert('删除失败，' + error);
      }
    },
    // 批量删除
    async deleteAllCart() {
      let skuIdList = [];
      this.shopCartList.forEach(item => {
        item.cartInfoList.forEach(item1 => {
          if (item1.isChecked) skuIdList.push(item1.skuId);
        })
      })
      try {
        await this.$store.dispatch('deleteAllCart', skuIdList);
        alert("删除成功");
        this.getShopCartList();
      } catch (error) {
        alert("删除失败")
      }


    }

  },
  computed: {
    ...mapState({
      shopCartList: state => state.shopcart.shopCartList,
    }),
    // 总共选中的商品数量
    totalCart() {
      return this.shopCartList.reduce((prev, item) => {
        prev += item.cartInfoList.reduce((prev1, item1) => {
          if (item1.isChecked === 1) {
            prev1 += item1.skuNum;
          }
          return prev1;
        }, 0)
        return prev;
      }, 0)
    },
    // 计算总价
    totalMoney() {
      return this.shopCartList.reduce((prev, item) => {
        prev += item.cartInfoList.reduce((prev1, item1) => {
          if (item1.isChecked === 1) {
            prev1 += item1.skuNum * item1.cartPrice;
          }
          return prev1
        }, 0)
        return prev
      }, 0)
    },
    // 是否全选
    isAllCheck: {
      get() {
        return this.shopCartList.every(item => item.cartInfoList.every(item1 => item1.isChecked === 1)) && this.shopCartList.length > 0
      },

      async set(value) {
        const isChecked = value ? 1 : 0;
        let skuIdList = [];
        // 遍历，将和当前全选不一致的cart的id收集起来
        this.shopCartList.forEach(item => {
          item.cartInfoList.forEach(item1 => {
            if (item1.isChecked !== isChecked) {
              skuIdList.push(item1.skuId);
            }
          })
        })
        try {
          await this.$store.dispatch('allIsChecked', { isChecked, skuIdList })
          alert("修改状态成功")
          this.getShopCartList();
        } catch (error) {
          alert('修改状态失败，' + error)
        }
      },
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 16%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 11%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>