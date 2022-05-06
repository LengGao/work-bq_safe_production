<template>
  <!-- 填空题 -->
  <div class="fill-in-question">
    <HtmlParse class="fill-in-question-describe">
      <p>
        项目管理知识体系包括了管理项目所需的管理知识。以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，（
        ）是不正确的。
      </p>
      <img
        src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        alt=""
      />
    </HtmlParse>
    <div class="fill-in-question-options">
      <div class="option option--default">
        <div class="option-name">1</div>
        <div class="option-content">
          <el-input size="small" placeholder="请输入你的答案"></el-input>
        </div>
      </div>
      <div class="option option--success">
        <div class="option-name">
          <!-- <span>1</span> -->
          <i class="iconfont icon-check"></i>
        </div>
        <div class="option-content">
          <p>
            项目经理除了要掌握项目经理除系管理技能项目管理基本通用管理领域的技能以及人际关系管理技能
          </p>
        </div>
      </div>
      <div class="option option--error">
        <div class="option-name">
          <!-- <span>2</span> -->
          <i class="iconfont icon-close"></i>
        </div>
        <div class="option-content">
          <p>
            项目经理除了要掌握项目经理除系管理技能项目管理基本通用管理领域的技能以及人际关系管理技能
          </p>
        </div>
      </div>
    </div>
    <div class="fill-in-question-look">
      <el-button size="small" plain>
        <i class="iconfont icon-eye"></i> 查看答案</el-button
      >
      <el-button type="primary" size="small" plain>
        <i class="iconfont icon-eye-close"></i> 隐藏答案</el-button
      >
    </div>
    <div class="fill-in-question-answer">
      <div class="title">参考答案</div>
      <span class="correct-answer"
        >体系包括了管理项目所需的管理知识。以下关于项目管理知识体系的叙述中，以下关于项目</span
      >
    </div>
    <div class="fill-in-question-analysis">
      <div class="title">答案解析</div>
      <HtmlParse class="fill-in-question-describe">
        <p>
          项目管理知识体系包括了管理项目所需的管理知识。以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，以下关于项目管理知识体系的叙述中，（
          ）是不正确的。
        </p>
        <img
          src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
          alt=""
        />
      </HtmlParse>
    </div>
  </div>
</template>

<script>
import HtmlParse from "./HtmlParse.vue";
export default {
  name: "FillInQuestion",
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
.fill-in-question {
  .title {
    color: var(--color-primary);
    font-weight: bold;
    margin-bottom: 14px;
  }
  &-describe {
    margin-bottom: 16px;
  }
  &-options {
    .option {
      display: flex;
      padding: 10px;
      border: 1px solid var(--color-border-1);
      border-radius: 2px;
      cursor: pointer;
      align-items: center;
      margin-bottom: 20px;
      &-name {
        width: 20px;
        height: 20px;
        line-height: 18px;
        flex-shrink: 0;
        border-radius: 50%;
        text-align: center;
        border: 1px solid var(--color-border-1);
        margin-right: 8px;
        position: relative;
        &-tips {
          position: absolute;
          top: -23px;
          right: -30px;
          width: 40px;
          font-size: $font-size-xs;
          color: var(--color-success);
          border: 1px solid var(--color-success);
          border-radius: 10px;
          background-color: #fff;
        }
      }
      &-content {
        flex: 1;
        img {
          max-height: 100px;
        }
      }
      &--success {
        border-color: var(--color-success);
        .option-name {
          color: #fff;
          background-color: var(--color-success);
          border-color: var(--color-success);
        }
      }
      &--error {
        border-color: var(--color-danger);
        .option-name {
          color: #fff;
          background-color: var(--color-error);
          border-color: var(--color-error);
        }
      }
    }
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