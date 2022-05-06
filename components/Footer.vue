<template>
  <footer class="common-footer">
    <div class="common-footer-container">
      <div class="links">
        <span>友情链接：</span>
        <a href="/">广东省应急管理厅</a>
        <span>|</span>
        <a href="/">广州市应急管理局</a>
      </div>
      <div class="copyright">
        <span>©2022 广东北区教育科技有限公司 版权所有 粤ICP备12004721号-4</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.common-footer {
  background-color: #2e2e2e;
  &-container {
    width: 1200px;
    height: 45px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-font-3);
    font-size: $font-size-sm;
  }
}
</style>