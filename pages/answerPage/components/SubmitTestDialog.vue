<template>
  <!-- :show-close="false" -->
  <el-dialog
    title="交卷提示"
    :visible="value"
    width="500px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @open="handleOpen"
    @close="handleClose"
    class="submit-test-dialog custome-dialog"
  >
    <p class="dialog-msg">
      您还有<span>53</span>道题未作答，是否确定提交试卷？
    </p>
    <div class="dialog-footer" slot="footer">
      <el-button type="primary" plain size="small">继续作答</el-button>
      <el-button type="primary" size="small" @click="handleSubmit"
        >马上交卷</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "SubmitTestDialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  methods: {
    handleOpen() {},
    handleSubmit() {
      this.handleClose();
      this.$emit("submit");
    },
    handleClose() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.submit-test-dialog {
  .dialog-msg {
    margin-top: 22px;
    font-size: 20px;
    color: var(--color-font-2);
    text-align: center;
    span {
      color: var(--color-primary);
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