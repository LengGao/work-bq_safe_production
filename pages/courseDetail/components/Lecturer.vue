<template>
  <div class="lecturer">
    <img
      class="lecturer-avatar"
      src="https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      alt=""
    />
    <div class="lecturer-info">
      <div class="lecturer-name">
        <span>懒得动</span>
      </div>
      <div class="lecturer-title">
        <span>副教授 华工硕士研究生</span>
      </div>
      <div class="lecturer-introduction">
        <p>
          担任多家企业咨询顾问，在项目管理领域有丰富的工作管理经验。担任多家企业咨询顾问，在项目管理领域有丰富的工作管理经验。担任多家企业咨询顾问，在项目管理领域有丰富的工作管理经验。担任多家企业咨询顾问，在项目管理领域有丰富的工作管理经验。授课默......
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lecturer {
  display: flex;
  cursor: context-menu;
  &-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 16px;
  }
  &-info {
    padding-top: 6px;
  }
  &-name {
    font-size: $font-size-lg;
    margin-bottom: 10px;
  }
  &-title {
    font-size: $font-size-sm;
    color: var(--color-font-3);
    margin-bottom: 10px;
  }
  &-introduction {
    line-height: 1.6;
    color: var(--color-font-2);
  }
}
</style>