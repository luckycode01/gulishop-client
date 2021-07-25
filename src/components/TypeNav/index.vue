<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseMoveLeave" @mouseenter="isShowSort = true">
        <h2 class="all">全部商品分类</h2>
        <transition name="sortshow">
          <div class="sort" v-show="isShowSort">
            <div class="all-sort-list2" @click='toSearch'>
              <div class="item" :class="{item_on:currentIndex === index}" @mouseenter="mouseMoveEnter(index)" v-for="(item1,index) in categoryList" :key="item1.categoryId">
                <h3>
                  <a href="javascript:;" :data-categoryId1='item1.categoryId' :data-categoryName='item1.categoryName'>{{item1.categoryName}}</a>
                  <!-- 声明式导航相当在内存中创建组件对象，影响性能造成卡顿 -->
                  <!-- <router-link :to="{name:'search',query:{categoryId1:item1.categoryId,categoryName:item1.categoryName}}">{{item1.categoryName}}</router-link> -->
                  <!-- 编程式导航可以解决 -->
                  <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryId1:item1.categoryId,categoryName:item1.categoryName}})">{{item1.categoryName}}</a> -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="item2 in item1.categoryChild" :key="item2.categoryId">
                      <dt>
                        <a href="javascript:;" :data-categoryId2='item2.categoryId' :data-categoryName='item2.categoryName'>{{item2.categoryName}}</a>
                        <!-- <router-link :to="{name:'search',query:{categoryId2:item2.categoryId,categoryName:item2.categoryName}}">{{item2.categoryName}}</router-link> -->
                        <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryId2:item2.categoryId,categoryName:item2.categoryName}})">{{item2.categoryName}}</a> -->
                      </dt>
                      <dd>
                        <em v-for="item3 in item2.categoryChild" :key="item3.categoryId">
                          <a href="javascript:;" :data-categoryId3='item3.categoryId' :data-categoryName='item3.categoryName'>{{item3.categoryName}}</a>
                          <!-- <router-link :to="{name:'search',query:{categoryId3:item3.categoryId,categoryName:item3.categoryName}}">{{item3.categoryName}}</router-link> -->
                          <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryId2:item2.categoryId,categoryName:item2.categoryName}})">{{item2.categoryName}}</a> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import throttle from 'lodash/throttle';
export default {
  name: 'TypeNav',
  data() {
    return {
      currentIndex: -1,
      isShowSort: true,
    }
  },
  mounted() {
    // this.getCategoryList();
    if (this.$route.path !== '/home') {
      this.isShowSort = false;
    }
  },
  methods: {
    // getCategoryList() {
    //   this.$store.dispatch('getCategoryList');
    // },
    // mouseMoveEnter(index) {
    //   this.currentIndex = index;
    //   console.log(index);
    // }
    // mouseMoveEnter: function (index) {
    //   this.currentIndex = index;
    //   console.log(index);
    // }
    // mouseMoveEnter: _.throttle(function (index) {
    //   this.currentIndex = index;
    //   console.log(index);
    // }, 500, { trailing: false }),
    // 鼠标移入事件，（防抖节流）
    mouseMoveEnter: throttle(function (index) {
      this.currentIndex = index;
    }, 20, { trailing: false }),
    // 鼠标移出
    mouseMoveLeave() {
      this.currentIndex = -1;
      if (this.$route.path !== '/home') {
        this.isShowSort = false;
      }
    },
    toSearch(event) {
      const dataset = event.target.dataset;
      // 解构自定义的属性值
      const { categoryid1, categoryid2, categoryid3, categoryname } = dataset;
      const location = { name: 'search', }
      // 判断id的值，确定传入的参数
      if (categoryid1)
        location.query = { category1Id: categoryid1, categoryName: categoryname }
      else if (categoryid2)
        location.query = { category2Id: categoryid2, categoryName: categoryname }
      else
        location.query = { category3Id: categoryid3, categoryName: categoryname }

      if (this.$route.params) location.params = this.$route.params
      if (categoryname) {
        if (this.$route.path === '/home') {
          this.$router.push(location);
        }
        else {
          this.$router.replace(location);
        }
      }
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList
    })
    // categoryList() { 
    //   return this.$store.state.home.categoryList;
    // }
  }

}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #9f9d9f;
      z-index: 999;

      &.sortshow-enter {
        height: 0;
        opacity: 0;
      }
      &.sortshow-enter-to {
        height: 461px;
        opacity: 1;
      }
      &.sortshow-enter-active {
        transition: all 0.3s;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #ffffff;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 555px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: #ff6a00;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
