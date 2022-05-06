<template>
  <div class="contact-us">
    <header class="contact-us-header">
      <h2>联系我们</h2>
    </header>
    <section class="contact-us-content">
      <ul>
        <li class="contact-us-item">
          <p class="item-title">客服QQ：</p>
          <p>2577675742</p>
        </li>
        <li class="contact-us-item">
          <p class="item-title">客服电话：</p>
          <p>020 - 61179508（9:00 - 21:00）</p>
        </li>
        <li class="contact-us-item">
          <p class="item-title">企业名称：</p>
          <p>广东北区教育科技有限公司</p>
        </li>
        <li class="contact-us-item">
          <p class="item-title">企业地址：</p>
          <p>广州市天河区龙口东路5号龙晖大厦16楼1603室</p>
        </li>
        <li class="contact-us-item">
          <p class="item-title">邮政编码：</p>
          <p>510635</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  padding-bottom: 60px;
  &-header {
    padding: 0 12px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid var(--color-border-2);
  }
  &-item {
    padding: 20px;
    color: var(--color-font-3);
    font-size: $font-size-sm;
    .item-title {
      margin-bottom: 6px;
    }
  }
}
</style>