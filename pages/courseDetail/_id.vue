<template>
  <div class="course-detail">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="">
      <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
      <el-breadcrumb-item>低压电工作业(初训)</el-breadcrumb-item>
    </el-breadcrumb>
    <section class="course-detail-top">
      <div class="course-cover">
        <img
          src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/wangzhan1607926239/14f410e2693a702c7918a96180d2bef4"
          alt=""
        />
        <div class="course-rate">
          <el-rate
            :value="3.9"
            disabled
            show-score
            text-color="#fff"
            score-template="{value} （150人评价）"
          >
          </el-rate>
        </div>
      </div>
      <div class="course-info">
        <h1 class="course-info-name">低压电工实操作业（初训）</h1>
        <div class="course-info-describe">
          <p>
            安培名师根据考试大纲对知识点，高频考入讲解，掌握答题技巧及点进行深入讲解，掌握答题技巧及判断标准，深入研究考题趋势，配有考前预测，助力高效取证
          </p>
        </div>
        <div class="course-info-price">
          <span class="cur-price">价格：<span>￥19888</span></span>
          <span class="old-price">原价：￥29888</span>
        </div>
        <div class="course-info-actions">
          <div class="btn">
            <nuxt-link to="/coursePlay/1">
              <el-button type="primary" plain size="small">开始学习</el-button>
            </nuxt-link>
          </div>
          <div class="favorite">
            <el-popover
              popper-class="popover-img"
              placement="top"
              width="100"
              trigger="hover"
            >
              <img
                style="width: 100%"
                src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/3c86066eb93590996f7f4ae69c34f420"
                alt=""
              />
              <span slot="reference"
                ><i class="iconfont icon-shouji"></i> 手机观看</span
              >
            </el-popover>
            <span><i class="iconfont icon-heart"></i> 收藏</span>
            <span
              ><i class="iconfont icon-heart-fill icon-active"></i> 已收藏</span
            >
          </div>
        </div>
      </div>
    </section>
    <div class="fixed-tabs" :class="{ show: fixedTabsShow }">
      <div class="fixed-tabs-container">
        <ul class="tabs-list">
          <li
            class="tabs-list-item"
            :class="{
              'tabs-list-item--active': activeComponentName === item.name,
            }"
            v-for="(item, index) in tabs"
            :key="index"
            @click="activeComponentName = item.name"
          >
            <span>{{ item.label }}</span>
          </li>
        </ul>
        <div class="fixed-actions">
          <span class="course-price">￥19888</span>
          <nuxt-link to="/coursePlay/1">
            <el-button type="primary" size="small">开始学习</el-button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <section class="course-detail-tabs">
      <el-tabs v-model="activeComponentName" ref="tabs">
        <el-tab-pane
          :label="item.label"
          :name="item.name"
          v-for="(item, index) in tabs"
          :key="index"
        >
        </el-tab-pane>
      </el-tabs>
      <component :is="tabComponent"></component>
    </section>
  </div>
</template>

<script>
export default {
  layout: "courseDetail",
  data() {
    return {
      activeComponentName: "Introduction",
      fixedTabsShow: false,
      fixedIo: null,
      tabs: [
        {
          label: "课程介绍",
          name: "Introduction",
        },
        {
          label: "章节目录",
          name: "Catalogue",
        },
        {
          label: "学习资料",
          name: "Materials",
        },
        {
          label: "主讲老师",
          name: "Lecturer",
        },
        {
          label: "学生评价",
          name: "Evaluation",
        },
      ],
    };
  },
  computed: {
    tabComponent() {
      if (this.activeComponentName) {
        return () => import(`./components/${this.activeComponentName}.vue`);
      }
    },
  },
  created() {
    // console.log(this.$route);
  },
  mounted() {
    this.intersectionObserver();
  },
  beforeDestroy() {
    if (this.fixedIo) {
      this.fixedIo.disconnect();
      this.fixedIo = null;
    }
  },
  methods: {
    // 监听现有的tabs 当它离开视口时开启fixed 的 tabs
    intersectionObserver() {
      this.fixedIo = new IntersectionObserver((entrys) => {
        entrys.forEach((entry) => {
          this.fixedTabsShow = !entry.isIntersecting;
        });
      });
      this.fixedIo.observe(this.$refs.tabs.$el);
    },
  },
};
</script>

<style lang="scss" scoped>
.course-detail {
  position: relative;
  width: 1200px;
  margin: 20px auto;
  &-top {
    margin-top: 20px;
    display: flex;
    height: 337px;
    background-color: #fff;
    overflow: hidden;
    .course-cover {
      width: 50%;
      flex-shrink: 0;
      position: relative;
      img {
        width: 100%;
      }
      .course-rate {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 40px;
        padding: 10px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    .course-info {
      padding: 30px;
      display: flex;
      flex-direction: column;
      &-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: auto;
      }
      &-describe {
        padding: 10px 16px;
        color: var(--color-font-3);
        border: 1px solid var(--color-border-2);
        border-radius: 4px;
        p {
          @include ellipsis(5);
        }
      }
      &-price {
        font-size: $font-size-sm;
        color: var(--color-font-3);
        margin-top: auto;
        margin-bottom: 20px;
        .cur-price {
          span {
            font-size: 36px;
            color: var(--color-danger);
          }
        }
        .old-price {
          margin-left: 20px;
          text-decoration: line-through;
        }
      }
      &-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .favorite {
          font-size: $font-size-sm;
          color: var(--color-font-3);
          span {
            margin-left: 20px;
          }
          .iconfont {
            vertical-align: middle;
          }
          .icon-active {
            color: var(--color-error);
          }
        }
      }
    }
  }
  &-tabs {
    margin-top: 20px;
    padding: 0 20px 20px 20px;
    background-color: #fff;
    min-height: 380px;
  }
  .fixed-tabs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s;
    &.show {
      z-index: 100;
      opacity: 1;
      box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.05);
    }
    .fixed-tabs-container {
      width: 1200px;
      height: 50px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tabs-list {
        display: flex;
        align-items: center;
        &-item {
          padding: 14px 20px;
          border-bottom: 2px solid #fff;
          cursor: pointer;
          &--active {
            color: var(--color-primary);
            border-color: var(--color-primary);
          }
          &:hover {
            color: var(--color-primary);
          }
        }
      }
      .fixed-actions {
        display: flex;
        align-items: center;
        .course-price {
          font-size: 24px;
          color: var(--color-danger);
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.course-detail-tabs {
  .el-tabs__item {
    height: 56px;
    line-height: 56px;
    font-size: $font-size-md;
  }
}
</style>