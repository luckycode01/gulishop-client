<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="$emit('currentChange',currentPage -1)">上一页</button>
    <button v-if="startEnd.start > 1" @click="$emit('currentChange',1)">1</button>
    <button v-if="startEnd.start > 2">···</button>

    <button :class="{ active: currentPage === page }" v-for="page in startEnd.end" v-if="page >= startEnd.start" @click="$emit('currentChange',page)">{{page}}</button>

    <button v-if="startEnd.end < totalPage -1">···</button>
    <button v-if="startEnd.end < totalPage" @click="$emit('currentChange',totalPage)">{{totalPage}}</button>
    <button :disabled="currentPage === totalPage" @click="$emit('currentChange',currentPage +1)">下一页</button>

    <button style="margin-left: 30px">{{total}}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: { type: Number, default: 1 }, //当前页
    total: { type: Number, default: 0 },    //总条数
    pageSize: Number,   //每页显示得条数
    continuePage: Number, //连续数量
  },
  computed: {
    // 总页码计算
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 连续页计算
    startEnd() {
      let { continuePage, totalPage, currentPage } = this;
      let start, end;
      if (continuePage >= totalPage) {
        // 总页码小于连续页数
        start = 1;
        end = totalPage;
      } else {
        // 总页数大于连续页数
        start = currentPage - Math.floor(continuePage / 2);
        end = currentPage + Math.floor(continuePage / 2);
        // 当连续页起点小于1时
        if (start < 1) {
          start = 1;
          end = continuePage;
        }
        // 当结束位置大于最大页数时
        if (end > totalPage) {
          start = totalPage - continuePage + 1;
          end = totalPage;
        }

      }
      return { start, end };
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
