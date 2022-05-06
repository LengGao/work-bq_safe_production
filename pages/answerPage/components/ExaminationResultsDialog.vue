<template>
  <!-- :show-close="false" -->
  <el-dialog
    title="考试成绩"
    :visible="value"
    width="800px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @open="handleOpen"
    @close="handleClose"
    class="submit-test-dialog custome-dialog"
  >
    <el-skeleton animated :loading="skeletonLoading">
      <template slot="template">
        <div style="display: flex; margin-bottom: 12px">
          <el-skeleton-item
            variant="image"
            style="width: 150px; height: 130px"
          />
          <div style="flex: 1; padding: 12px 0 0 20px">
            <el-skeleton-item
              v-for="(item, index) in 3"
              :key="index"
              variant="p"
              style="height: 28px; margin: 0 8px 8px 0"
            />
          </div>
        </div>
        <el-skeleton-item
          v-for="(item, index) in 3"
          :key="index"
          variant="p"
          style="height: 32px; margin: 8px 8px 0 0"
        />
      </template>
      <div class="dialog-content" style="display: flex">
        <div class="test-score">
          <p class="test-score-title">最终得分</p>
          <p class="test-score-value">80<span>分</span></p>
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
            <li class="describe-item describe-item">
              <span class="describe-item-title"
                ><i class="iconfont icon-edit-square"></i>做题总数：</span
              >
              <span class="describe-item-value">50</span>
            </li>
            <li class="describe-item describe-item">
              <span class="describe-item-title"
                ><i class="iconfont icon-linechart"></i>考试用时：</span
              >
              <span class="describe-item-value">50分钟</span>
            </li>
          </ul>
        </div>
      </div>
      <el-table
        :data="resultList"
        style="width: 100%"
        :header-cell-style="{ background: '#FAFAFA', 'font-size': '16px' }"
        :cell-style="{ color: '#606266', 'font-size': '16px' }"
      >
        <el-table-column prop="chapter_name" label="题型" min-width="100">
          <template slot-scope="{ row }">
            <span>单选题</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="总题数" min-width="100">
          <template slot-scope="{ row }">
            <span>30</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="正确" min-width="100">
          <template slot-scope="{ row }">
            <span class="success">20</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="错误" min-width="100">
          <template slot-scope="{ row }">
            <span class="danger">8</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="未做" min-width="100">
          <template slot-scope="{ row }">
            <span>2</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="得分" min-width="100">
          <template slot-scope="{ row }">
            <span class="primary">80</span>
          </template>
        </el-table-column>
      </el-table>
    </el-skeleton>

    <div class="dialog-footer" slot="footer">
      <el-button type="primary" plain size="small">返回上一级</el-button>
      <el-button type="primary" size="small">查看答案解析</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "ExaminationResultsDialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      skeletonLoading: false,
      resultList: [1],
    };
  },
  created() {},
  methods: {
    handleOpen() {
      this.skeletonLoading = true;
      setTimeout(() => {
        this.skeletonLoading = false;
      }, 2000);
    },

    handleClose() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.submit-test-dialog {
  .primary {
    color: var(--color-primary);
  }
  .success {
    color: var(--color-success);
  }
  .danger {
    color: var(--color-danger);
  }
  .dialog-content {
    display: flex;
    .test-score {
      flex-shrink: 0;
      width: 150px;
      height: 130px;
      margin-left: 20px;
      margin-right: 40px;
      padding-top: 24px;
      background: url("~assets/img/score-bg.png");
      background-size: cover;
      text-align: center;
      &-title {
        font-size: $font-size-md;
        color: var(--color-primary);
        margin-bottom: 20px;
      }
      &-value {
        font-size: 36px;
        color: #fff;
        span {
          font-size: $font-size-sm;
        }
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
    }
  }
  .dialog-footer {
    text-align: center;
    padding-bottom: 20px;
    .el-button {
      padding: 7px 23px;
      font-size: $font-size-md;
    }
  }
}
</style>