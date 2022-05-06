<template>
  <!-- 模拟考试 -->
  <div class="examination">
    <el-skeleton :rows="6" animated :loading="listLoading">
      <el-table
        :data="chapterList"
        style="width: 100%"
        :header-cell-style="{ background: '#FAFAFA', 'font-size': '16px' }"
        :cell-style="{ color: '#303133', 'font-size': '16px' }"
      >
        <el-table-column prop="chapter_name" label="试卷名称" min-width="220">
        </el-table-column>
        <el-table-column prop="create_time" label="考试时间" min-width="160">
        </el-table-column>
        <el-table-column prop="question_bank_id" label="题数" min-width="120">
        </el-table-column>
        <el-table-column prop="question_bank_id" label="得分" min-width="120">
        </el-table-column>
        <el-table-column label="操作" min-width="140">
          <template slot-scope="{ row }">
            <el-button type="primary" plain size="small">查看解析</el-button>
            <el-button type="success" plain size="small">重新考试</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-empty
        description="暂无考试记录"
        image="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/67d4b35a23d9fb8a5ae0a35112818397"
      ></el-empty>
    </el-skeleton>
    <div class="examination-user">
      <p class="user-title">我的成绩</p>
      <img
        class="user-avatar"
        src="https://img2.baidu.com/it/u=1742064249,2154824212&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt=""
      />
      <div class="user-info">
        <p class="user-name">张小北</p>
        <p class="user-score">您上一次考试成绩：<span>30分</span></p>
      </div>
      <nuxt-link to="/testPaperProfiles" class="user-btn">
        <el-button type="primary" round size="small">开始考试</el-button>
      </nuxt-link>
    </div>
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
.examination {
  position: relative;
  &-user {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    padding: 15px 30px;
    background-color: #fff;
    border-radius: 100px 100px 100px 100px;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    .user-title {
      width: 50px;
      margin: 0 20px 0 10px;
      text-align: center;
      color: var(--color-primary);
      font-size: 24px;
    }
    .user-avatar {
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 24px;
    }
    .user-score {
      color: var(--color-font-3);
      span {
        color: var(--color-primary);
      }
    }
    .user-btn {
      margin-left: auto;
    }
  }
}
</style>
