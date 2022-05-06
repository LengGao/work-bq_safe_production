<template>
  <div class="catalogue">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="chapter-header">
            <div class="chapter-header-title">
              <i class="iconfont icon-detail"></i>
              <span>第1章 信息化知识</span>
            </div>
            <div class="chapter-header-describe">
              <p>
                涉及信息与信息化、国家信息化战略、电子政务、商业智能、大数据、云计算、互联网+和智慧城市等内容。
              </p>
            </div>
          </div>
        </template>
        <div class="chapter-content">
          <ul class="chapter-list">
            <nuxt-link tag="li" to="" class="chapter-list-item">
              <div>
                <i class="iconfont icon-ai-video"></i>
                <span>1.1章节考点分析</span>
                <span class="price-tag">免费</span>
              </div>
              <div>
                <span>19:54</span>
              </div>
            </nuxt-link>
            <nuxt-link tag="li" to="" class="chapter-list-item">
              <div>
                <i class="iconfont icon-ai-video"></i>
                <span>1.1章节考点分析</span>
              </div>
              <div>
                <span>19:54</span>
              </div>
            </nuxt-link>
            <nuxt-link tag="li" to="" class="chapter-list-item">
              <div>
                <i class="iconfont icon-ai-video"></i>
                <span>1.1章节考点分析</span>
              </div>
              <div>
                <span>19:54</span>
              </div>
            </nuxt-link>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>

<style lang="scss" scoped>
.catalogue {
  border-left: 1px solid #ebeef5;
  border-right: 1px solid #ebeef5;
  .chapter {
    &-header {
      padding: 20px;
      line-height: 1;
      &-title {
        font-size: $font-size-lg;
        color: var(--color-font-1);
        margin-bottom: 10px;
      }
      &-describe {
        text-indent: 2em;
        color: var(--color-font-3);
        font-size: $font-size-sm;
        @include ellipsis(1);
      }
    }
    &-content {
      .chapter-list {
        &-item {
          line-height: 1;
          padding: 0 20px;
          height: 54px;
          line-height: 54px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          &:hover {
            background-color: var(--color-primary-plain);
          }
          .price-tag {
            font-size: $font-size-xs;
            display: inline-block;
            line-height: 1;
            padding: 0 6px 1px;
            border: 1px solid var(--color-primary);
            color: var(--color-primary);
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.catalogue {
  .el-collapse-item__header {
    height: auto;
    background-color: #fafafa;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
    font-size: $font-size-sm;
    color: var(--color-font-3);
  }
}
</style>