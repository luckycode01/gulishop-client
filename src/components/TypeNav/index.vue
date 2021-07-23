<template>

  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseLeaveEvent" @mouseenter='isShowSort = true'>
        <h2 class="all">全部商品分类</h2>
        <transition name='sort'>
          <div class="sort" v-show="isShowSort">
            <div class="all-sort-list2" @click='toSearch'>
              <div class="item " :class="{'active': currentIndex===index }" @mouseenter="mouseEnterEvent(index)" v-for="(c1,index) in categoryList" :key="c1.categoryId">
                <h3>
                  <a href="javascript:;" :data-category1Id='c1.categoryId' :data-categoryName='c1.categoryName'>{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <a href="javascript:;" :data-category2Id='c2.categoryId' :data-categoryName='c2.categoryName'>{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href="javascript:;" :data-category3Id='c3.categoryId' :data-categoryName='c3.categoryName'>{{c3.categoryName}}</a>
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
// 按需引入节流
import throttle from 'lodash/throttle'
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
    if (this.$route.path !== '/home') this.isShowSort = false;
  },
  methods: {
    // getCategoryList() {
    //   this.$store.dispatch('getCategoryList');
    // },
    // 鼠标移入事件
    mouseEnterEvent: throttle(function (index) {
      this.currentIndex = index;
    }, 50, { 'trailing': false }),
    mouseLeaveEvent() {
      this.currentIndex = -1;
      if (this.$route.path !== '/home') {
        this.isShowSort = false;
      }
    },
    toSearch(event) {
      const dataset = event.target.dataset;
      // 解构自定义属性的值
      const { categoryname, category1id, category2id, category3id } = dataset;
      // 路由配置
      const location = {
        name: 'search',
      }
      //判断id的值是否存在，确定传入的参数
      if (category1id) location.query = { category1Id: category1id };
      else if (category2id) location.query = { category2Id: category2id };
      else location.query = { category3Id: category3id };

      if (this.$route.params) location.params = this.$route.params;

      // 根据categoryname是否有值判断点击的是否为a标签，因为只有A标签设置此属性
      if (categoryname) {
        location.query.categoryName = categoryname;
        this.$router.push(location);
      }
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList
    })
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
      background: #a7a7a7;
      z-index: 999;

      &.sort-enter {
        height: 0;
      }
      &.sort-enter-to {
        height: 461px;
      }
      &.sort-enter-active {
        transition: all 0.5s;
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
                  width: 415px;
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

          &.active {
            background-color: #ffbf60;
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
