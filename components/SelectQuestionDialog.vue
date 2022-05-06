<template>
  <!-- :show-close="false" -->

  <el-dialog
    title="请选择你的考试题库"
    :visible="value"
    width="1000px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @open="handleOpen"
    @close="handleClose"
    class="question-dialog"
  >
    <div class="question-dialog-container">
      <div class="row">
        <div class="row-title">行业名称</div>
        <ul class="row-list">
          <li
            :class="[
              'row-list-item',
              { 'row-list-item--active': industryActiveId == item.id },
            ]"
            v-for="(item, index) in industryList"
            :key="index"
            @click="handleIndustryChange(item.id)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="row-title">工种名称</div>
        <ul class="row-list">
          <li
            :class="[
              'row-list-item',
              { 'row-list-item--active': workTypeActiveId == item.id },
            ]"
            v-for="(item, index) in workTypeList"
            :key="index"
            @click="handleWorkTypeChange(item.id)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="row-title">二级工种</div>
        <ul class="row-list">
          <li
            :class="[
              'row-list-item',
              { 'row-list-item--active': secondWorkTypeActiveId == item.id },
            ]"
            v-for="(item, index) in secondWorkTypeList"
            :key="index"
            @click="handleSecondWorkTypeChange(item.id)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="row-title">题库名称</div>
        <ul class="row-list">
          <li
            :class="[
              'row-list-item',
              { 'row-list-item--active': activeQId == item.id },
            ]"
            v-for="(item, index) in questionList"
            :key="index"
            @click="handleQuestionChange(item.id)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="question-dialog-footer" slot="footer">
      <el-button type="info" round disabled>取消</el-button>
      <el-button type="primary" round @>保存</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
export default {
  name: "SelectQuestionDialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      industryActiveId: "",
      industryList: [
        {
          name: "特种作业",
          id: 1,
        },
        {
          name: "高位行业",
          id: 2,
        },
        {
          name: "非高位行业",
          id: 3,
        },
      ],
      workTypeActiveId: "",
      workTypeList: [
        {
          name: "电工作业",
          id: 1,
        },
        {
          name: "高处作业",
          id: 2,
        },
        {
          name: "焊接与热切割",
          id: 3,
        },
        {
          name: "制冷空调作业",
          id: 4,
        },
        {
          name: "危险化学品",
          id: 5,
        },
      ],
      secondWorkTypeActiveId: "",
      secondWorkTypeList: [
        {
          name: "低压电工作业",
          id: 1,
        },
        {
          name: "高压电工作业",
          id: 2,
        },
        {
          name: "防爆电气作业",
          id: 3,
        },
        {
          name: "电力电缆作业",
          id: 4,
        },
        {
          name: "电气试验作业",
          id: 5,
        },
        {
          name: "继电保护作业",
          id: 6,
        },
        {
          name: "低压电工作业1",
          id: 7,
        },
      ],
      questionList: [
        {
          name: "低压电工作业(初训)",
          id: 96,
        },
        {
          name: "低压电工作业(复训)",
          id: 95,
        },
      ],
    };
  },
  computed: {
    activeQId() {
      return this.$store.state.question.qid;
    },
  },
  methods: {
    handleOpen() {},
    handleIndustryChange(id) {
      this.industryActiveId = id;
    },
    handleWorkTypeChange(id) {
      this.workTypeActiveId = id;
    },
    handleSecondWorkTypeChange(id) {
      this.secondWorkTypeActiveId = id;
    },
    handleQuestionChange(id) {
      this.$store.commit("question/SET_QID", id);
      this.$cookies.set("WF_qid", id);
      this.handleClose();
    },
    handleClose() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.question-dialog {
  &-container {
    min-height: 400px;
    .row {
      display: flex;
      margin-bottom: 16px;
      &-title {
        width: 100px;
        margin-right: 10px;
        align-self: flex-start;
        display: flex;
        align-items: center;
        font-size: $font-size-lg;
        color: var(--color-font-2);
        flex-shrink: 0;
        &::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-primary);
          margin-right: 5px;
        }
      }
      &-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        &-item {
          padding: 4px 14px;
          color: var(--color-font-3);
          border: 1px solid var(--color-border-1);
          border-radius: 20px;
          margin: 0 10px 20px 0;
          cursor: pointer;
          &--active {
            color: var(--color-primary);
            border-color: #fff;
            background-color: var(--color-primary-plain);
          }
        }
      }
    }
  }
  &-footer {
    text-align: center;
    .el-button {
      padding: 12px 44px;
    }
  }
}
</style>