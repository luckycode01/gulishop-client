<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseLeave" @mouseenter="isShowCate = true">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShowCate">
            <div class="all-sort-list2" @click="toSearch">
              <div class="item" :class="{'item_active': currentIndex === index}" @mouseenter="mouseEnter(index)" v-for="(item1,index) in cateList" :key="item1.categoryId">
                <h3>
                  <a href="javascript:;" :data-category1Id="item1.categoryId" :data-categoryName="item1.categoryName">{{item1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="item2 in item1.categoryChild" :key="item2.categoryId">
                      <dt>
                        <a href="javascript:;" :data-category2Id="item2.categoryId" :data-categoryName="item2.categoryName">{{item2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="item3 in item2.categoryChild" :key='item3.categoryId'>
                          <a href="javascript:;" :data-category3Id="item3.categoryId" :data-categoryName="item3.categoryName">{{item3.categoryName}}</a>
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
import { mapState } from 'vuex';
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  // 参考值，鼠标移入移出高亮
  data() {
    return {
      currentIndex: -1,
      isShowCate: true

    }
  },

  mounted() {

    if (this.$route.path !== '/home') this.isShowCate = false;
  },
  computed: {
    ...mapState({
      cateList: state => state.home.cateList,
    })
  },
  methods: {
    // mouseEnter: function (index) {
    //   this.currentIndex = index;
    // },
    mouseEnter: throttle(function (index) {
      this.currentIndex = index;
    }, 50, { trailing: false }),

    mouseLeave() {
      this.currentIndex = -1
      if (this.$route.path !== '/home') this.isShowCate = false;
    },
    // 点击A标签跳转，委派
    toSearch(event) {
      const dataset = event.target.dataset;
      const { categoryname, category1id, category2id, category3id } = dataset;
      // 如果Name存在就说明点击的a标签，因为只有a标签绑定了categoryName属性
      if (categoryname) {
        const location = {
          name: 'search',
        }
        if (category1id) {
          location.query = { category1Id: category1id, categoryName: categoryname };
        } else if (category2id) {
          location.query = { category2Id: category2id, categoryName: categoryname };
        } else {
          location.query = { category3Id: category3id, categoryName: categoryname };
        }

        if (this.$route.params) location.params = this.$route.params;
        this.$router.push(location)
      }
    }
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
      background: #9c9c9c;
      z-index: 999;

      &.sort-enter,
      &.sort-leave-to {
        height: 0px;
        opacity: 0;
      }
      &.sort-enter-to,
      &.sort-leave {
        height: 461px;
        opacity: 1;
      }
      &.sort-enter-active,
      &.sort-leave-active {
        transition: all 0.2s;
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
              color: #333;
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
                  width: 585px;
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

          &.item_active {
            background-color: #fdab5e;
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
