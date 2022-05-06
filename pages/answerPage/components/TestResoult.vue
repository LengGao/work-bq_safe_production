<template>
  <div class="test-resoult">
    <div class="test-resoult-header">
      <i class="iconfont icon-alert"></i>
      <span>考试情况</span>
    </div>
    <div class="test-resoult-content">
      <div class="item">
        <span class="item-title"
          ><i class="iconfont icon-trophy"></i>考试得分：</span
        >
        <span class="item-value">70分</span>
      </div>
      <div class="item">
        <span class="item-title"
          ><i class="iconfont icon-edit-square"></i>做题数量：</span
        >
        <span class="item-value">70题</span>
      </div>
      <div class="item">
        <span class="item-title"
          ><i class="iconfont icon-dashboard"></i>考试用时：</span
        >
        <span class="item-value">70分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestResoult",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.test-resoult {
  padding: 16px;
  margin-bottom: 20px;
  background-color: #fff;
  &-header {
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border-1);
    color: var(--color-primary);
    .icon-calculator {
      font-size: $font-size-lg;
      vertical-align: text-bottom;
    }
    span {
      font-weight: bold;
    }
  }
  &-content {
    padding-top: 10px;
    .item {
      color: var(--color-font-2);
      padding: 10px 0;
      &-title {
        .iconfont {
          margin-right: 2px;
        }
      }
      &-value {
        color: var(--color-primary);
      }
    }
  }
}
</style>