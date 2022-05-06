<template>
  <div class="answer-page">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/questionBank' }"
        >低压电工作业(初训)</el-breadcrumb-item
      >
      <el-breadcrumb-item>章节练习</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="answer-page-container">
      <div class="container-question">
        <QuestionHeader :type="questionType" />
        <el-skeleton
          class="question-content"
          animated
          :loading="skeletonLoading"
        >
          <template slot="template">
            <el-skeleton-item variant="p" style="padding: 4px; margin: 4px 0" />
            <el-skeleton-item variant="p" style="padding: 4px; margin: 4px 0" />
            <el-skeleton-item
              variant="p"
              style="padding: 4px; width: 50%; margin: 4px 0 20px"
            />
            <div style="display: flex; align-items: center; flex-wrap: wrap">
              <el-skeleton-item
                v-for="(item, index) in 4"
                :key="index"
                variant="p"
                style="padding: 20px; margin: 10px 0"
              />
            </div>
          </template>
          <component :is="questionComponents"></component>
        </el-skeleton>
        <QuestionFooter />
      </div>
      <div class="container-card">
        <component :is="cardComponents" @time-end="handleTimeEnd"></component>
        <TestResoult />
        <QuestionCard @submit-test="openSubmitDialog" />
      </div>
    </div>
    <SubmitTestDialog
      v-model="submitDialogVisible"
      @submit="openResultDialog"
    />
    <ExaminationResultsDialog v-model="resultsDialogVisible" />
  </div>
</template>

<script>
import QuestionHeader from "./components/QuestionHeader.vue";
import QuestionFooter from "./components/QuestionFooter.vue";
import QuestionCard from "./components/QuestionCard.vue";
import SubmitTestDialog from "./components/SubmitTestDialog.vue";
import ExaminationResultsDialog from "./components/ExaminationResultsDialog.vue";
import TestResoult from "./components/TestResoult.vue";

export default {
  layout: "question",
  components: {
    QuestionHeader,
    QuestionFooter,
    QuestionCard,
    SubmitTestDialog,
    ExaminationResultsDialog,
    TestResoult,
  },
  data() {
    return {
      answerMode: 0,
      skeletonLoading: true,
      questionType: 1,
      questionComponentMap: {
        1: "SingleChoiceQuestion", // 单选题
        2: "MultipleChoiceQuestion", // 多选题
        3: "JudgmentQuestion", // 判断题
        4: "UncertainQuestion", // 不定项题
        5: "FillInQuestion", // 填空题
        6: "ShortAnswerQuestion", // 简答题
        7: "CaseQuestion", // 案例题
      },
      // 模拟考试
      submitDialogVisible: false,
      resultsDialogVisible: false,
    };
  },
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    console.log("答题类型", route.params.type);
    return {
      skeletonLoading: true,
    };
  },
  computed: {
    cardComponents() {
      const components = {
        1: "TestCountDown",
      };
      const cmpNmae = components[this.answerMode];
      if (cmpNmae) {
        return () => import(`./components/${cmpNmae}.vue`);
      }
    },
    questionComponents() {
      if (this.questionType) {
        return () =>
          import(
            `./components/${this.questionComponentMap[this.questionType]}.vue`
          );
      }
    },
  },
  created() {
    setTimeout(() => {
      this.skeletonLoading = false;
    }, 2000);
  },
  methods: {
    handleTimeEnd() {
      console.log("%c考试结束", "color:#FF4D4F;font-weight:bold");
    },
    openResultDialog() {
      this.resultsDialogVisible = true;
    },
    openSubmitDialog() {
      this.answerMode = 1;
      this.submitDialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.answer-page {
  width: 1200px;
  margin: 20px auto 0;
  &-container {
    display: flex;
    .container-question {
      flex: 1;
      min-height: 70vh;
      margin-right: 20px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      .question-content {
        padding: 10px 30px;
      }
    }
    .container-card {
      width: 280px;
      flex-shrink: 0;
      align-self: flex-start;
    }
  }
}
</style>
<style lang="scss" >
.answer-page {
  .el-breadcrumb {
    margin-bottom: 20px;
  }
}
</style>