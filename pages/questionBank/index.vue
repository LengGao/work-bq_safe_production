<template>
  <!-- 章节练习 -->
  <div class="chapter">
    <el-skeleton :rows="6" animated :loading="listLoading">
      <el-table
        :data="chapterList"
        style="width: 100%"
        :header-cell-style="{ background: '#FAFAFA', 'font-size': '16px' }"
        :cell-style="{ color: '#303133', 'font-size': '16px' }"
      >
        <el-table-column prop="chapter_name" label="章节名称" min-width="220">
        </el-table-column>
        <el-table-column label="已做 / 总数" min-width="160">
          <template slot-scope="{ row }">
            <el-progress
              class="progress"
              :percentage="100"
              :format="() => format(row)"
            ></el-progress>
          </template>
        </el-table-column>
        <el-table-column prop="question_bank_id" label="正确率" min-width="120">
        </el-table-column>
        <el-table-column label="操作" min-width="100">
          <template slot-scope="{ row }">
            <auth-link to="/answerPage/1">
              <el-button type="primary" v-if="row.sort === 1" size="small"
                >开始答题</el-button
              >
            </auth-link>
            <nuxt-link to="/answerPage/1">
              <el-button type="primary" v-if="row.sort === 2" plain size="small"
                >继续答题</el-button
              >
            </nuxt-link>
            <nuxt-link to="/answerPage/1">
              <el-button type="success" v-if="row.sort === 3" plain size="small"
                >重新做题</el-button
              >
            </nuxt-link>
          </template>
        </el-table-column>
      </el-table>
      <el-empty
        description="暂无数据"
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
    format(row) {
      return `${row.topic_total} / ${row.id}`;
    },
  },
};
</script>
<style lang="scss">
.progress .el-progress-bar {
  width: 80%;
  padding-right: 100px;
  margin-right: -100px;
}
</style>
