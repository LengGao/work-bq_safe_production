<template>
  <!-- 案例题 -->
  <div class="case-question">
    <HtmlParse class="case-question-describe">
      <p>
        项目管理知识体系包括了管理项目所需的管理知识。以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，（
        ）是不正确的。
      </p>
      <img
        src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        alt=""
      />
    </HtmlParse>
    <div
      class="case-question-child"
      :class="{ 'case-question-child--down': show }"
    >
      <div class="child-header">
        <div class="child-header-toggle" @click="show = !show">
          <span>{{ show ? "收起" : "展开" }}材料</span>
          <i class="iconfont" :class="show ? 'icon-up' : 'icon-down'"></i>
        </div>
        <div class="child-header-actions">
          <div>
            <span>单选题</span>
            <span>（1/5）</span>
          </div>
          <div>
            <el-button type="primary" plain size="mini">上一小题</el-button>
            <el-button type="primary" plain size="mini">下一小题</el-button>
          </div>
        </div>
      </div>
      <el-skeleton
        class="child-content"
        animated
        :loading="false"
        :throttle="400"
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
        <component :is="questionComponent"></component>
      </el-skeleton>
    </div>
  </div>
</template>

<script>
import HtmlParse from "./HtmlParse.vue";
export default {
  name: "CaseQuestion",
  components: {
    HtmlParse,
  },
  data() {
    return {
      show: false,
      questionType: 1,
      questionComponentMap: {
        1: "SingleChoiceQuestion", // 单选题
        2: "MultipleChoiceQuestion", // 多选题
        3: "JudgmentQuestion", // 判断题
        4: "UncertainQuestion", // 不定项题
        5: "FillInQuestion", // 填空题
        6: "ShortAnswerQuestion", // 简答题
      },
      questionTypeMap: {
        1: "单选题",
        2: "多选题",
        3: "判断题",
        4: "不定项题",
        5: "填空题",
        6: "简答题",
      },
    };
  },
  computed: {
    questionComponent() {
      if (this.questionType) {
        return () =>
          import(`./${this.questionComponentMap[this.questionType]}.vue`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.case-question {
  position: relative;
  &-describe {
    margin-bottom: 16px;
  }
  &-child {
    min-height: 500px;
    position: absolute;
    top: 30%;
    left: -30px;
    width: calc(100% + 60px);
    transition: top 0.3s;
    &--down {
      top: 100%;
    }
    .child-header {
      &-toggle {
        line-height: 120px;
        height: 100px;
        cursor: pointer;
        text-align: center;
        color: var(--color-primary);
        font-size: $font-size-sm;
        background: linear-gradient(rgba(255, 255, 255, 0) 0%, #ffffff 53%);
      }
      &-actions {
        height: 40px;
        background-color: #fff;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-primary);
        font-size: $font-size-sm;
      }
    }
    .child-content {
      padding: 15px 30px 55px;
      background-color: #fff;
    }
  }
}
</style>