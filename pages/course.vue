<template>
  <div class="course">
    <section class="course-banner">
      <img
        src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/eb0202fea18f358399772d22b260e13b"
        alt="信息系统项目管理师"
      />
    </section>
    <section class="course-filter">
      <div class="course-filter-container">
        <ul class="course-filter-list">
          <li class="list-name">行业名称</li>
          <li class="list-option list-option--active">全部</li>
          <li class="list-option">特种作业</li>
          <li class="list-option">高位行业</li>
          <li class="list-option">非高位行业</li>
        </ul>
        <ul class="course-filter-list">
          <li class="list-name">工种名称</li>
          <li class="list-option list-option--active">全部</li>
          <li class="list-option">电工作业</li>
          <li class="list-option">高处作业</li>
          <li class="list-option">焊接与热切割</li>
          <li class="list-option">制冷空调作业</li>
          <li class="list-option">危险化学品</li>
        </ul>
        <ul class="course-filter-list">
          <li class="list-name">二级工种</li>
          <li class="list-option list-option--active">全部</li>
          <li class="list-option">低压电工作业</li>
          <li class="list-option">高压电工作业</li>
          <li class="list-option">防爆电气作业</li>
          <li class="list-option">电力电缆作业</li>
          <li class="list-option">电气试验作业</li>
          <li class="list-option">继电保护作业</li>
        </ul>
      </div>
    </section>
    <section class="course-list">
      <ul class="course-list-container">
        <li class="course-item" v-for="item in 8" :key="item">
          <nuxt-link :to="`/courseDetail/${item}`">
            <el-image
              class="course-cover"
              src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/wangzhan1607926239/14f410e2693a702c7918a96180d2bef4"
              fit="cover"
              lazy
            >
              <div slot="placeholder" class="course-cover-slot">
                <i class="iconfont icon-tupianjiazaizhong"></i>
              </div>
            </el-image>
            <div class="course-info">
              <div class="course-title">
                <span>低压电工实操作业（初训）</span>
              </div>
              <div class="course-describe">
                <span>该课程是按照《特种作业程是按人员</span>
              </div>
              <div class="course-other">
                <span class="course-count"
                  ><i class="iconfont icon-edit-square"></i>3333人已学习</span
                >
                <span class="course-price">￥1999</span>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="course-pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </section>
  </div>
</template>

<script>
export default {
  name: "course",
  data() {
    return {
      list: [],
    };
  },
  async asyncData({ app: { $api } }) {
    return { project: "nuxt666" };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.course {
  &-banner {
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    img {
      width: 1200px;
      height: 150px;
    }
  }
  &-filter {
    background-color: #fff;
    &-container {
      width: 1200px;
      margin: 0 auto;
    }
    &-list {
      display: flex;
      align-items: center;
      color: var(--color-font-2);
      padding-bottom: 20px;
      .list-name {
        margin-right: 30px;
        cursor: context-menu;
      }
      .list-option {
        padding: 4px 12px;
        border-radius: 30px;
        margin-right: 4px;
        cursor: pointer;
        &:hover,
        &--active {
          color: #fff;
          background-color: var(--color-primary);
        }
      }
    }
  }
  &-list {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 4px;
    &-container {
      display: flex;
      flex-wrap: wrap;
      .course-item {
        width: 288px;
        margin-bottom: 16px;
        background-color: #fff;
        border-radius: 4px;
        cursor: pointer;
        &:not(:nth-child(4n)) {
          margin-right: 16px;
        }
        .course-cover {
          width: 100%;
          height: 162px;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          &-slot {
            text-align: center;
            line-height: 162px;
            .iconfont {
              font-size: 36px;
              color: var(--color-font-3);
            }
          }
        }
        .course-info {
          padding: 14px;
          color: var(--color-font-2);
          .course-title {
            margin-bottom: 10px;
          }
          .course-describe {
            margin-bottom: 10px;
            color: var(--color-font-3);
            font-size: $font-size-sm;
          }
          .course-other {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .course-count {
              font-size: $font-size-sm;
              color: var(--color-font-3);
              .iconfont {
                margin-right: 2px;
              }
            }
            .course-price {
              color: var(--color-error);
            }
          }
        }
      }
    }
  }
  &-pagination {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
<style lang="scss">
.course-list-container {
  .course-item {
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 15px 30px rgb(0 0 0 / 6%);
      transform: translate3d(0, -2px, 0);
      .course-cover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .course-cover {
      img {
        transition: all 0.3s;
      }
    }
  }
}
.course-pagination {
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background-color: #fff;
  }
}
</style>