<template>
  <main class="page-container">
    <Header>我是公共头部</Header>
    <Nuxt class="page-nuxt-view" />
    <Footer>我是公共尾部</Footer>
    <el-backtop></el-backtop>
  </main>
</template>
<style lang="scss">
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .page-nuxt-view {
    flex: 1;
    margin-top: 110px;
  }
}
</style>