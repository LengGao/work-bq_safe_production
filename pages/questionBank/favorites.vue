<template>
  <!-- 收藏夹 -->
  <div class="favorites">
    <el-skeleton :rows="6" animated :loading="listLoading">
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <i class="iconfont icon-folder-open"></i>
            <h4 class="chapter-title">第1章 信息化知识</h4>
          </template>
          <ul class="question-list">
            <li class="question-list-item">
              <nuxt-link to="">
                <p>1、信息是按特定方式组织在一起的（ ）的集合。</p></nuxt-link
              >
            </li>
            <li class="question-list-item">
              2、信息是按特定方式组织在一起的（ ）的集合。
            </li>
            <li class="question-list-item">
              3、信息是按特定方式组织在一起的（ ）的集合。
            </li>
            <li class="question-list-item">
              4、信息是按特定方式组织在一起的（ ）的集合。
            </li>
          </ul>
          <div class="load-more">
            <el-button type="text">查看更多</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <i class="iconfont icon-folder-open"></i>
            <h4 class="chapter-title">第2章低压电工作业(初训)模拟考试（8）</h4>
          </template>
          <ul class="question-list">
            <li class="question-list-item">
              <nuxt-link to="">
                <p>
                  1、信息是按特定方式组织在一起的（ ）的特定方式组织在一起的（
                  ）的特定方式组织在一起的（ ）的特定方式组织在一起的（
                  ）的特定方式组织在一起的（ ）的特定方式组织在一起的（
                  ）的特定方式组织在一起的（ ）的特定方式组织在一起的（
                  ）的特定方式组织在一起的（ ）的特定方式组织在一起的（
                  ）的特定方式组织在一起的（ ）的特定方式组织在一起的（
                  ）的集合。
                </p></nuxt-link
              >
            </li>
            <li class="question-list-item">
              2、信息是按特定方式组织在一起的（ ）的集合。
            </li>
            <li class="question-list-item">
              3、信息是按特定方式组织在一起的（ ）的集合。
            </li>
            <li class="question-list-item">
              4、信息是按特定方式组织在一起的（ ）的集合。
            </li>
          </ul>
          <div class="load-more">
            <el-button type="text">查看更多</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-empty
        description="暂无收藏题目"
        image="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/67d4b35a23d9fb8a5ae0a35112818397"
      ></el-empty>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  props: {
    qid: {
      type: [Number, String],
      default: "",
    },
  },
  data() {
    return {
      listLoading: false,
      chapterList: [],
    };
  },
  created() {
    this.getChapterList();
  },
  methods: {
    async getChapterList() {
      const data = {
        question_bank_id: this.qid,
        chapter_type: 1,
      };
      this.listLoading = true;
      const res = await this.$api.getChapterList(data);
      this.listLoading = false;
      this.chapterList = res?.data?.list || [];
    },
  },
};
</script>
<style lang="scss" scoped>
.favorites {
  .chapter-title {
    margin-left: 6px;
  }
  .question-list {
    &-item {
      padding: 20px 20px 20px 54px;
      font-size: $font-size-md;
      color: var(--color-font-3);
      &:hover {
        background-color: var(--color-primary-plain);
      }
    }
  }
  .load-more {
    text-align: center;
  }
}
</style>
<style lang="scss" >
.favorites {
  .el-collapse-item__header {
    padding: 20px 30px;
    height: auto;
    line-height: 1;
    font-size: $font-size-md;
    &.is-active {
      border-bottom-color: #ebeef5;
    }
  }
}
</style>
