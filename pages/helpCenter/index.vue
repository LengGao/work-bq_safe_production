<template>
  <div class="help-center">
    <section class="help-center-banner">
      <img
        src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/eb0202fea18f358399772d22b260e13b"
        alt="信息系统项目管理师"
      />
    </section>
    <div class="help-center-container">
      <el-tabs tab-position="left">
        <el-tab-pane label="常见问题">
          <CommonProblem />
        </el-tab-pane>
        <el-tab-pane label="意见反馈">
          <Feedback />
        </el-tab-pane>
        <el-tab-pane label="关于我们">
          <AboutUs />
        </el-tab-pane>
        <el-tab-pane label="联系我们">
          <ContactUs />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import CommonProblem from "./components/CommonProblem.vue";
import Feedback from "./components/Feedback.vue";
import AboutUs from "./components/AboutUs.vue";
import ContactUs from "./components/ContactUs.vue";
export default {
  components: {
    CommonProblem,
    Feedback,
    AboutUs,
    ContactUs,
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.help-center {
  &-banner {
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    margin-bottom: 20px;
    img {
      width: 1200px;
      height: 150px;
    }
  }
  &-container {
    width: 1200px;
    margin: 0 auto 20px;
  }
}
</style>
<style lang="scss" >
.help-center-container {
  .el-tabs {
    &__header.is-left {
      background-color: #fff;
      margin-right: 20px;
      min-height: 75.5vh;
    }
    &__nav-wrap.is-left {
      &::after {
        background-color: #fff;
      }
      .el-tabs__active-bar {
        right: auto;
        width: 4px;
        z-index: 2;
        border-radius: 4px;
      }
    }
    &__item {
      height: 56px;
      line-height: 56px;
      padding: 0 60px;
      font-size: $font-size-md;
      color: var(--color-font-2);
      &:hover {
        background-color: var(--color-primary-plain);
      }
      &.is-active {
        color: var(--color-primary);
      }
    }
    &__content {
      min-height: 75.5vh;
      padding: 0 20px;
      background-color: #fff;
    }
  }
}
</style>