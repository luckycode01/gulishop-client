<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="$emit('changePage',currentPage-1)">上一页</button>
    <button v-if="startEnd.start > 1" @click="$emit('changePage',1)">1</button>
    <button v-if="startEnd.start > 2">···</button>

    <button @click="$emit('changePage',page)" :class="{active:currentPage === page}" v-for="(page,index) in startEnd.end" :key="index" v-if="page>=startEnd.start">{{page}}</button>

    <button v-if="startEnd.end<totalPage-1">···</button>
    <button v-if="startEnd.end<totalPage" @click="$emit('changePage',totalPage)">{{totalPage}}</button>
    <button :disabled="currentPage === totalPage" @click="$emit('changePage',currentPage+1)">下一页</button>

    <button style=" margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    continuePage: Number,
  },
  data() {
    return {

    }
  },
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 连续页数，起始页和结束页
    startEnd() {
      let { continuePage, currentPage, totalPage } = this
      let start = currentPage - Math.floor(continuePage / 2);
      let end = currentPage + Math.floor(continuePage / 2);
      if (start < 1) {
        start = 1;
        end = continuePage;
      }
      if (end > totalPage) {
        end = totalPage;
        start = currentPage - continuePage + 1;
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
