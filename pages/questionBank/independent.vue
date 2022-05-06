<template>
  <!-- 自主出题 -->
  <div class="independent">
    <el-skeleton :rows="6" animated :loading="listLoading">
      <el-table
        :data="chapterList"
        style="width: 100%"
        :header-cell-style="{ background: '#FAFAFA', 'font-size': '16px' }"
        :cell-style="{ color: '#303133', 'font-size': '16px' }"
      >
        <el-table-column prop="chapter_name" label="试卷名称" min-width="220">
        </el-table-column>
        <el-table-column prop="question_bank_id" label="题数" min-width="120">
        </el-table-column>
        <el-table-column
          prop="question_bank_id"
          label="考试次数"
          min-width="140"
        >
        </el-table-column>
        <el-table-column
          prop="question_bank_id"
          label="最高得分"
          min-width="140"
        >
        </el-table-column>
        <el-table-column label="操作" min-width="140">
          <template slot-scope="{ row }">
            <el-button type="primary" v-if="row.sort === 1" size="small"
              >开始考试</el-button
            >
            <el-button type="primary" v-if="row.sort === 2" plain size="small"
              >查看解析</el-button
            >
            <el-button type="success" v-if="row.sort === 2" plain size="small"
              >再次考试</el-button
            >
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
  },
};
</script>
<style lang="scss">
</style>
