<template>
  <!-- 试卷介绍 -->
  <div class="test-paper">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/questionBank' }"
        >低压电工作业(初训)</el-breadcrumb-item
      >
      <el-breadcrumb-item>试卷介绍</el-breadcrumb-item>
    </el-breadcrumb>
    <section class="test-paper-header">
      <h1 class="header-title">低压电工作业(初训)模拟考试</h1>
      <div class="header-container">
        <div class="scan-code">
          <img
            src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/3c86066eb93590996f7f4ae69c34f420"
            alt="扫码"
          />
          <p>扫码进入移动端做题</p>
        </div>
        <div class="test-paper-describe">
          <ul class="describe-ul">
            <li class="describe-item">
              <span class="describe-item-title"
                ><i class="iconfont icon-CodeSandbox"></i>考试总分：</span
              >
              <span class="describe-item-value">100分</span>
            </li>
            <li class="describe-item">
              <span class="describe-item-title"
                ><i class="iconfont icon-dashboard"></i>考试时长：</span
              >
              <span class="describe-item-value">90分钟</span>
            </li>
            <li class="describe-item">
              <span class="describe-item-title"
                ><i class="iconfont icon-radarchart"></i>试卷难度：</span
              >
              <span class="describe-item-value">简单 / 中等 / 困难</span>
            </li>
            <li class="describe-item">
              <span class="describe-item-title"
                ><i class="iconfont icon-carryout"></i>及格分数：</span
              >
              <span class="describe-item-value">70分</span>
            </li>
            <li class="describe-item describe-item--large">
              <span class="describe-item-title"
                ><i class="iconfont icon-sever"></i>题型分布：</span
              >
              <span class="describe-item-value"
                >单选题20题，多选题30题，不定项题30题，判断题40题，填空题10题，简答题10题，案例题20题</span
              >
            </li>
          </ul>
          <nuxt-link class="link" to="/answerPage/2">
            <el-button type="primary">开始考试</el-button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="test-paper-content">
      <h4 class="title">
        <i class="iconfont icon-appstoreadd"></i>
        <span>题型介绍</span>
      </h4>
      <ul class="question-type-list">
        <li class="list-item">
          <p class="list-item-name">01 单选题 （共20题，每题1分，共20分）</p>
          <p class="list-item-rule">
            每小题的四个选项中，只有一项是最符合题意的正确答案，错选或不选均不得分。
          </p>
        </li>
        <li class="list-item">
          <p class="list-item-name">02 多选题 （共30题，每题2分，共60分）</p>
          <p class="list-item-rule">
            每小题的备选答案中，有两个或两个以上符合题意的正确答案，少选、多选、错选均不得分。（根据后台配置）
          </p>
        </li>
        <li class="list-item">
          <p class="list-item-name">03 不定项题 （共30题，每题2分，共60分）</p>
          <p class="list-item-rule">
            每小题的备选答案中，有一个或一个以上符合题意的正确答案，多选、错选，本题不得分；少选，所选的每个选项得
            0.5分（根据后台配置）
          </p>
        </li>
        <li class="list-item">
          <p class="list-item-name">04 判断题 （共40题，每题1分，共40分）</p>
          <p class="list-item-rule">请根据题目的表述判断是否正确。</p>
        </li>
        <li class="list-item">
          <p class="list-item-name">05 填空题 （共10题，每题2分，共20分）</p>
          <p class="list-item-rule">阅读题目，按顺序填写答案。</p>
        </li>
        <li class="list-item">
          <p class="list-item-name">06 简答题 （共10题，每题5分，共50分）</p>
          <p class="list-item-rule">阅读题目，根据所给材料回答问题。</p>
        </li>
        <li class="list-item">
          <p class="list-item-name">07 案例题 （共20题，每题2分，共40分）</p>
          <p class="list-item-rule">
            阅读题目，根据所给材料回答问题，每个案例题由若干子题组成。
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.test-paper {
  width: 1200px;
  margin: 130px auto 20px;
  &-header {
    padding: 0 20px;
    background-color: #fff;
    margin: 20px 0;
    .header-title {
      padding: 34px 0;
      font-size: 24px;
      text-align: center;
      border-bottom: 1px dashed var(--color-border-1);
    }
    .header-container {
      padding: 20px 0;
      display: flex;
      .scan-code {
        width: 280px;
        height: 330px;
        margin-left: 100px;
        margin-right: 46px;
        flex-shrink: 0;
        background: url("~/assets/img/scan-code-bg.png");
        background-size: cover;
        text-align: center;
        img {
          width: 180px;
          height: 180px;
          margin-top: 80px;
          margin-bottom: 16px;
        }
        p {
          color: var(--color-font-2);
        }
      }
      .test-paper-describe {
        flex: 1;
        padding: 10px 0 16px 0;
        display: flex;
        flex-direction: column;
        .describe-ul {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          font-size: $font-size-lg;
          .describe-item {
            width: 50%;
            margin-bottom: 18px;
            display: flex;
            &--large {
              width: 100%;
            }
            &-title {
              color: var(--color-font-2);
              flex-shrink: 0;
              .iconfont {
                margin-right: 6px;
                font-size: $font-size-lg;
              }
            }
            &-value {
              color: var(--color-primary);
              line-height: 1.5;
            }
          }
        }
        .link {
          margin-top: auto;
          button {
            padding: 10px 40px;
          }
        }
      }
    }
  }
  &-content {
    padding: 36px 40px;
    background-color: #fff;
    .title {
      color: var(--color-primary);
      font-size: 20px;
      margin-bottom: 24px;
      .iconfont {
        font-size: 20px;
      }
    }
    .question-type-list {
      .list-item {
        margin-bottom: 30px;
        &-name {
          margin-bottom: 12px;
        }
        &-rule {
          line-height: 1;
          padding: 5px 10px;
          color: var(--color-font-3);
          border: 1px solid var(--color-border-1);
          background-color: #fcfcfc;
        }
      }
    }
  }
}
</style>