<template>
  <div class="question-footer">
    <div class="fixed-container">
      <el-button class="btn">
        <i class="iconfont icon-left"></i>
        <span>上一题</span>
      </el-button>
      <el-button class="btn">
        <i class="iconfont icon-heart"></i>
        <i class="iconfont icon-heart-fill icon-active"></i>
        <span>收藏本题</span>
      </el-button>
      <el-button class="btn">
        <span>下一题</span>
        <i class="iconfont icon-right"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionFooter",
};
</script>

<style lang="scss" scoped>
.question-footer {
  height: 50px;
  .fixed-container {
    position: fixed;
    bottom: 0;
    width: 900px;
    display: flex;
    align-items: center;
    .btn {
      flex: 1;
      margin-left: 0;
      border-radius: 0;
      padding: 16px 0;
      color: var(--color-font-2);
      font-size: $font-size-md;
      &:not(:last-child) {
        border-right: none;
      }
      .iconfont {
        vertical-align: text-bottom;
      }
      .icon-active {
        color: var(--color-danger);
      }
    }
  }
}
</style>