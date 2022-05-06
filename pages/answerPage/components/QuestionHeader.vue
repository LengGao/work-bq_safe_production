<template>
  <div class="question-header">
    <span class="question-type">{{ typeMap[type] }}</span>
    <span>{{ current }}/{{ total }}</span>
  </div>
</template>

<script>
export default {
  name: "QuestionHeader",
  props: {
    type: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 999,
    },
    current: {
      type: Number,
      default: 199,
    },
  },
  data() {
    return {
      typeMap: {
        1: "单选题",
        2: "多选题",
        3: "判断题",
        4: "不定项题",
        5: "填空题",
        6: "简答题",
        7: "案例题",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  margin: 0 30px;
  border-bottom: 1px solid var(--color-border-1);
  color: var(--color-primary);
  .question-type {
    font-weight: bold;
  }
}
</style>