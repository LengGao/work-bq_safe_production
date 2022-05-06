<template>
  <div class="feedback">
    <header class="feedback-header">
      <h2>意见反馈</h2>
    </header>
    <section class="feedback-content">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="问题类型">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="1">课程建议</el-radio>
            <el-radio label="2">功能建议</el-radio>
            <el-radio label="3">程序建议</el-radio>
            <el-radio label="4">其他问题</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="反馈内容">
          <el-input
            type="textarea"
            rows="8"
            placeholder="如果是浏览速度，系统BUG，视觉显示等问题，请注明您的操作系统，浏览器及版本号。"
            v-model="ruleForm.remark"
          ></el-input>
        </el-form-item>
        <el-form-item :label="`截图（${fileList.length}/3）`">
          <el-upload
            name="image"
            accept="image/*"
            list-type="picture-card"
            :action="uploadUrl"
            :fileList="fileList"
            :before-upload="beforeAvatarUpload"
            :disabled="fileList.length >= 3"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="sub-btn"
            size="small"
            @click="submitForm('ruleForm')"
            >提交反馈</el-button
          >
        </el-form-item>
      </el-form>
    </section>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui"; //引用饿了么UI消息组件
export default {
  data() {
    return {
      ruleForm: {
        type: "",
        remark: "",
      },
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      uploadUrl: `${process.env.baseUrl}/oss/uploadImage`,
      fileList: [],
    };
  },
  methods: {
    beforeAvatarUpload(file) {
      console.log(file.type);
      const isIMG = file.type.includes("image");
      if (!isIMG) {
        Message.error("请上传图片!");
        return false;
      }
    },
    handleRemove(file) {
      this.fileList = this.fileList.filter((item) => item.uid !== file.uid);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  padding-bottom: 60px;
  &-header {
    padding: 0 12px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid var(--color-border-2);
  }
  &-content {
    padding: 20px 0;
    .sub-btn {
      padding: 10px 60px;
      border-radius: 20px;
      font-size: $font-size-sm;
    }
  }
}
</style>