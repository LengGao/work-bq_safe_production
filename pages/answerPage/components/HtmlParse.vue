<template>
  <div class="html-parse" @click="handleClick">
    <slot></slot>
    <el-image
      src=""
      style="display: none"
      ref="previewBox"
      :preview-src-list="[previewImgSrc]"
    >
    </el-image>
  </div>
</template>

<script>
export default {
  name: "HtmlParse",
  data() {
    return {
      previewImgSrc: "",
    };
  },
  methods: {
    handleClick(e) {
      if (e.target.tagName === "IMG") {
        e.target.src && this.previewImg(e.target.src);
      }
    },
    previewImg(src) {
      this.previewImgSrc = src;
      this.$refs.previewBox.clickHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  line-height: 1.5;
}
img {
  max-height: 200px;
  cursor: zoom-in;
}
</style>