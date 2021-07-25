<template>
  <div class="pagination">
    <button :disabled="currentPage<=1" @click="$emit('changePage',currentPage-1)">上一页</button>
    <button v-if="startEnd.start>1" @click="$emit('changePage',1)">1</button>
    <button v-if="startEnd.start>2">···</button>

    <button v-for="page in startEnd.end" :key="page" v-if="page>=startEnd.start" :class="{active:currentPage === page}" @click="$emit('changePage',page)">{{page}}</button>

    <button v-if="startEnd.end<totalPage-1">···</button>
    <button v-if="startEnd.end<totalPage" @click="$emit('changePage',totalPage)">{{totalPage}}</button>
    <button :disabled="currentPage >=totalPage" @click="$emit('changePage',currentPage+1)">下一页</button>

    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: { type: Number, default: 1 },
    continutePage: { type: Number, default: 5 },
    total: { type: Number, default: 0 },
    pageSize: Number,
  },
  computed: {
    // 计算总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算连续页数的起始点
    startEnd() {
      const { totalPage, continutePage, currentPage } = this;
      let start, end;
      // 如果总页数小于连续页
      if (totalPage <= continutePage) {
        start = 1;
        end = totalPage;
      } else {
        start = currentPage - Math.floor(continutePage / 2);
        end = currentPage + Math.floor(continutePage / 2);
      }
      if (start < 1) {
        start = 1;
        end = continutePage;
      }
      if (end > totalPage) {
        start = totalPage - continutePage + 1;
        end = totalPage;
      }
      return { start, end };
    },
    // 计算连续的页数

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
