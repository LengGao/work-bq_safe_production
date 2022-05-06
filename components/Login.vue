<template>
  <el-dialog
    :visible="loginDialogShow"
    width="400px"
    :close-on-click-modal="false"
    @open="handleOpen"
    @close="handleClose"
    class="login-dialog"
    append-to-body
  >
    <div class="login-dialog-container">
      <wxlogin
        appid="wx3736b8b7540b2341"
        scope="snsapi_login"
        theme="black"
        :redirect_uri="encodeURIComponent(`http://www.beiqujy.com/`)"
      >
      </wxlogin>
    </div>
  </el-dialog>
</template>

<script>
import wxlogin from "vue-wxlogin/src/components/vue-wxlogin.vue";
import { mapState } from "vuex";
export default {
  name: "LoginDialog",
  components: {
    wxlogin,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["loginDialogShow"]),
  },
  methods: {
    handleOpen() {},

    handleClose() {
      this.$store.commit("user/SET_LOGIN_SHOW", false);
    },
  },
};
</script>
<style lang="scss">
.login-dialog {
  &-container {
    text-align: center;
  }
  .el-dialog {
    border-radius: 12px;
  }
}
</style>