<template>
  <div class="spec-preview">
    <img :src="imageList.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="imageList.imgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ['skuImageList'],
  data() {
    return {
      defaultIndex: 0,
    }
  },
  mounted() {
    this.$bus.$on('changeDefaultIndex', index => this.defaultIndex = index)
  },
  methods: {
    move($event) {
      const bigImg = this.$refs.bigImg;
      const mask = this.$refs.mask;

      // 鼠标位置
      let mouseX = $event.offsetX;
      let mouseY = $event.offsetY;
      // 蒙版的位置
      let maskX = mouseX - mask.offsetWidth / 2;
      let maskY = mouseY - mask.offsetHeight / 2;
      // 判断边界
      maskX < 0 ? maskX = 0 : maskX = maskX;
      maskX > mask.offsetWidth ? maskX = mask.offsetWidth : maskX = maskX
      maskY < 0 ? maskY = 0 : maskY = maskY;
      maskY > mask.offsetWidth ? maskY = mask.offsetWidth : maskY = maskY
      // 移动蒙版
      mask.style.left = maskX + "px";
      mask.style.top = maskY + "px";
      // 移动放大的图片
      bigImg.style.left = -2 * maskX + "px";
      bigImg.style.top = - 2 * maskY + "px";
    }
  },
  computed: {
    imageList() {
      return this.skuImageList[this.defaultIndex] || [];
    }
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>