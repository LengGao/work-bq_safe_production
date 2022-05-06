<template>
  <main class="question-page-container">
    <Header :fixed="false">我是公共头部</Header>
    <Nuxt class="page-nuxt-view" />
    <el-backtop></el-backtop>
  </main>
</template>
<style lang="scss">
.question-page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .page-nuxt-view {
    flex: 1;
    margin-top: 110px;
  }
}
</style>