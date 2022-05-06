<template>
  <!-- 学生评价列表 -->
  <div class="evaluation">
    <div class="evaluation-header">
      <div class="evaluation-header-rate">
        <span>课程评分</span>
        <el-rate
          v-model="courseRate"
          show-text
          text-color="#909399"
          :texts="courseRateTexts"
          @change="handleRateChange"
        >
        </el-rate>
      </div>
      <div>
        <el-input
          type="textarea"
          :rows="6"
          placeholder="请尽可能详尽描述您的学习经历，例如学习成果、老师讲课风格、课程内容等 请尽可能详尽描述您的学习经历，例如学习成果、老师讲课风格、课程内容等 请尽可能详尽描述您的学习经历，例如学习成果、老师讲课风格、课程内容等 请尽可能详尽描述您的学习经历，例如学习成果、老师讲课风格、课程内容等"
          v-model="value"
        >
        </el-input>
      </div>
      <div class="evaluation-header-submit">
        <el-button type="warning" class="submit-btn" size="small"
          >评价</el-button
        >
      </div>
    </div>
    <div class="evaluation-content">
      <ul class="evaluation-list">
        <li
          class="evaluation-list-item"
          v-for="(item, index) in 10"
          :key="index"
        >
          <div class="user-info">
            <img
              class="user-avatar"
              src="https://img1.baidu.com/it/u=4245241897,3920774166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
            <span class="user-name">张娟娟</span>
          </div>
          <div class="user-rate">
            <el-rate :value="4" disabled> </el-rate>
          </div>
          <div class="user-evaluation">
            <p>
              东培学堂每个老师讲课内容都非常细，知识讲解的也非常透彻，重点夸下强哥，那内容讲解的棒的很，懂得人都懂,
              王子，大饼，吴老师，偶子哥都好，哈哈哈懂得人都懂,
              王子，大饼，吴老师，偶子哥都好，哈哈哈
            </p>
          </div>
          <div class="user-actions">
            <span>2020-07-30 15:09:28</span>
            <span class="icon-zan-none"
              ><i class="iconfont icon-dianzan"></i
            ></span>
            <span class="icon-zan-active"
              ><i class="iconfont icon-dianzan1"></i>122</span
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="evaluation-pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseRate: 0,
      courseRateTexts: [
        "点击相应的星星为课程评分",
        "非常差！课程太差了，我要吐槽",
        "差！课程不满意，讲的没有干货",
        "中评！课程一般",
        "好评！课程挺不错，继续保持",
        "五星好评！课程非常棒，点赞",
      ],
      value: "",
    };
  },
  methods: {
    handleRateChange(e) {
      this.value = this.courseRateTexts[e];
    },
  },
};
</script>

<style lang="scss" scoped>
.evaluation {
  padding: 10px;
  &-header {
    &-rate {
      display: flex;
      align-items: center;
      margin-bottom: 22px;
      color: var(--color-font-3);
      font-size: $font-size-sm;
    }
    &-submit {
      text-align: right;
      padding: 20px 0;
      .submit-btn {
        margin-left: auto;
        line-height: 1;
        padding: 6px 20px;
        background-color: #faad14;
        border-color: #faad14;
        &:not([disabled]):active {
          opacity: 0.8;
        }
        &[disabled] {
          background-color: #cccccc;
          border-color: #cccccc;
        }
      }
    }
  }
  &-content {
    .evaluation-list {
      &-item {
        border-bottom: 1px dashed var(--color-border-2);
        padding-bottom: 16px;
        margin-bottom: 20px;
        cursor: context-menu;
        .user-info {
          display: flex;
          align-items: center;
          .user-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .user-name {
            margin-left: 10px;
          }
        }
        .user-rate {
          padding-left: 40px;
        }
        .user-evaluation {
          padding-left: 40px;
          line-height: 1.8;
          color: var(--color-font-2);
          font-size: $font-size-sm;
          margin-bottom: 10px;
        }
        .user-actions {
          display: flex;
          justify-content: space-between;
          padding-left: 40px;
          color: var(--color-font-3);
          font-size: $font-size-sm;
          .iconfont {
            cursor: pointer;
          }
          .icon-zan-none:hover {
            color: var(--color-primary);
          }
          .icon-zan-active {
            color: var(--color-primary);
          }
        }
      }
    }
  }
  &-pagination {
    padding-top: 10px;
    text-align: center;
  }
}
</style>
<style lang="scss">
.evaluation {
  &-header {
    .el-rate {
      margin-left: 10px;
      &__text {
        font-size: $font-size-sm;
      }
    }
    .el-textarea textarea {
      background-color: #fafafa;
    }
  }
}
</style>