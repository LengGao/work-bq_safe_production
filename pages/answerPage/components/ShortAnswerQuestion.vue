<template>
  <!-- 简答题 -->
  <div class="short-answer-question">
    <HtmlParse class="short-answer-question-describe">
      <p>
        项目管理知识体系包括了管理项目所需的管理知识。以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，（
        ）是不正确的。
      </p>
      <img
        src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        alt=""
      />
    </HtmlParse>
    <div class="short-answer-question-input">
      <el-input
        type="textarea"
        placeholder="请输入你的答案"
        maxlength="1000"
        :autosize="{ minRows: 8, maxRows: 12 }"
        show-word-limit
      >
      </el-input>
    </div>
    <div class="short-answer-question-look">
      <el-button size="small" plain>
        <i class="iconfont icon-eye"></i> 查看答案</el-button
      >
      <el-button type="primary" size="small" plain>
        <i class="iconfont icon-eye-close"></i> 隐藏答案</el-button
      >
    </div>
    <div class="short-answer-question-answer">
      <div class="title">参考答案</div>
      <span class="correct-answer"
        >体系包括了管理项目所需的管理知识。以下关于项目管理知识体系的叙述中，以下关于项目</span
      >
    </div>
  </div>
</template>

<script>
import HtmlParse from "./HtmlParse.vue";
export default {
  name: "ShortAnswerQuestion",
  components: {
    HtmlParse,
  },
  data() {
    return {
      previewImgSrc: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.short-answer-question {
  .title {
    color: var(--color-primary);
    font-weight: bold;
    margin-bottom: 14px;
  }
  &-describe {
    margin-bottom: 16px;
  }
  &-input {
    margin-bottom: 16px;
  }
  &-look {
    text-align: right;
    .iconfont {
      vertical-align: text-bottom;
    }
    button {
      padding: 7px 20px;
    }
  }
  &-answer {
    margin-bottom: 20px;
    .checked-answer {
      margin-right: 40px;
    }
  }
}
</style>