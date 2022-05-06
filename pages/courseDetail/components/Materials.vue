<template>
  <div class="materials">
    <ul class="materials-list">
      <li class="materials-list-item">
        <img class="icon-zip" src="~assets/img/icon-zip.png" alt="" />
        <span>第一节课程资料.zip</span>
        <el-button class="download-btn" type="warning" size="small"
          >下载</el-button
        >
      </li>
      <li class="materials-list-item">
        <img class="icon-zip" src="~assets/img/icon-zip.png" alt="" />
        <span>第2节课程资料.zip</span>
        <el-button class="download-btn" type="warning" size="small"
          >下载</el-button
        >
      </li>
    </ul>
    <el-empty
      description="暂无资料"
      image="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/67d4b35a23d9fb8a5ae0a35112818397"
    ></el-empty>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.materials {
  &-list {
    &-item {
      height: 80px;
      line-height: 80px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      color: var(--color-font-3);
      border-bottom: 1px dashed var(--color-border-2);
      &:hover {
        background-color: var(--color-primary-plain);
      }
      .icon-zip {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      .download-btn {
        margin-left: auto;
        line-height: 1;
        padding: 6px 20px;
        background-color: var(--color-danger);
        border-color: var(--color-danger);
        &:active {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>