<template>
  <div class="question-card">
    <div class="question-card-header">
      <i class="iconfont icon-calculator"></i>
      <span>答题卡</span>
    </div>
    <el-skeleton animated :loading="loading">
      <template slot="template">
        <el-skeleton-item
          variant="p"
          style="padding: 10px; width: 50%; margin: 10px 0"
        />
        <div style="display: flex; align-items: center; flex-wrap: wrap">
          <el-skeleton-item
            v-for="(item, index) in 18"
            :key="index"
            variant="text"
            style="width: 32px; height: 32px; margin: 0 8px 8px 0"
          />
        </div>
      </template>
      <dl class="question-card-list">
        <dt class="list-title">单选题</dt>
        <dd class="list-item list-item--success">
          <nuxt-link to=""> <p>1</p> </nuxt-link>
        </dd>
        <dd class="list-item list-item--error">
          <nuxt-link to=""> <p>2</p> </nuxt-link>
        </dd>
        <dd class="list-item list-item--done">
          <nuxt-link to=""> <p>3</p> </nuxt-link>
        </dd>
        <dd class="list-item list-item--active">
          <nuxt-link to=""> <p>4</p> </nuxt-link>
        </dd>
        <dd class="list-item list-item--none">
          <nuxt-link to=""> <p>5</p> </nuxt-link>
        </dd>
        <dd class="list-item list-item--none">
          <nuxt-link to=""> <p>6</p> </nuxt-link>
        </dd>
      </dl>
    </el-skeleton>
    <div class="question-card-footer">
      <div class="footer-block">
        <div class="block-item">
          <span class="block-item-square block-item-square--success"></span>
          <span class="block-item-title">正确</span>
        </div>
        <div class="block-item">
          <span class="block-item-square block-item-square--error"></span>
          <span class="block-item-title">错误</span>
        </div>
        <div class="block-item">
          <span class="block-item-square block-item-square--done"></span>
          <span class="block-item-title">已做</span>
        </div>
        <div class="block-item">
          <span class="block-item-square"></span>
          <span class="block-item-title">未做</span>
        </div>
      </div>
      <!-- <el-button class="footer-back" type="primary" size="small"
        >结束作答</el-button
      > -->
      <el-button
        class="footer-back"
        @click="onSubmitTest"
        type="primary"
        size="small"
        >马上交卷</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    onSubmitTest() {
      this.$emit("submit-test");
    },
  },
};
</script>

<style lang="scss" scoped>
.question-card {
  padding: 0 16px;
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
  &-list {
    .list-title {
      color: var(--color-font-3);
      line-height: 40px;
    }
    .list-item {
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      display: inline-block;
      border: 1px solid var(--color-border-2);
      color: var(--color-font-3);
      font-size: $font-size-sm;
      border-radius: 2px;
      margin-right: 4px;
      margin-bottom: 8px;
      &--none:hover {
        background-color: var(--color-primary-plain);
        border-color: var(--color-border-3);
        a {
          color: var(--color-primary);
        }
      }
      &--done {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
        a {
          color: #fff;
        }
      }
      &--active {
        background-color: var(--color-primary-plain);
        border-color: var(--color-border-3);
        a {
          color: var(--color-primary);
        }
      }
      &--success {
        background-color: var(--color-success);
        border-color: var(--color-success);
        a {
          color: #fff;
        }
      }
      &--error {
        background-color: var(--color-danger);
        border-color: var(--color-danger);
        a {
          color: #fff;
        }
      }
    }
  }
  &-footer {
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid var(--color-border-2);
    .footer-block {
      display: flex;
      margin-bottom: 20px;
      .block-item {
        flex: 1;
        display: flex;
        align-items: center;
        color: var(--color-font-3);
        &-square {
          width: 18px;
          height: 18px;
          background-color: #fff;
          border: 1px solid var(--color-border-2);
          border-radius: 2px;
          margin-right: 6px;
          &--success {
            background-color: var(--color-success);
            border-color: var(--color-success);
          }
          &--error {
            background-color: var(--color-danger);
            border-color: var(--color-danger);
          }
          &--done {
            background-color: var(--color-primary);
            border-color: var(--color-primary);
          }
        }
      }
    }
    .footer-back {
      width: 100%;
      font-size: $font-size-md;
    }
  }
}
</style>