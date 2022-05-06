<template>
  <header class="common-header" :class="{ 'header-fixed': fixed }">
    <div class="common-header-top">
      <div class="top-content">
        <div class="top-content-left">
          <div class="location">
            <i class="iconfont icon-location"></i
            ><span>{{ citys[cityActiveIndex].name }}</span>
            <el-popover
              placement="bottom"
              popper-class="city-popover"
              width="236"
              trigger="hover"
            >
              <ul class="city-popover-content">
                <li
                  class="city-item"
                  :class="{ 'city-item--active': cityActiveIndex === index }"
                  v-for="(item, index) in citys"
                  :key="index"
                  @click="cityActiveIndex = index"
                >
                  {{ item.name }}
                </li>
              </ul>
              <span slot="reference" class="location-toggle">[切换]</span>
            </el-popover>
          </div>
          <div class="telphone">
            <i class="iconfont icon-phone"></i>
            <span>400-893-9890</span>
          </div>
        </div>
        <div class="top-content-right">
          <nuxt-link to="/helpCenter" class="help">帮助中心</nuxt-link>
          <template>
            <span class="login" @click="handleAuthClick">登录</span>
            <span>|</span>
            <span class="register">注册</span>
          </template>
          <template>
            <el-popover
              popper-class="popover-user"
              placement="bottom"
              width="100"
              trigger="hover"
            >
              <ul class="popover-user-content">
                <li class="link-item">
                  <nuxt-link to=""> 我的课程 </nuxt-link>
                </li>
                <li class="link-item">
                  <nuxt-link to=""> 我的题库 </nuxt-link>
                </li>
                <li class="link-item">
                  <nuxt-link to=""> 订单记录 </nuxt-link>
                </li>
                <li class="link-item">
                  <nuxt-link to=""> 个人资料 </nuxt-link>
                </li>
              </ul>
              <span class="user-info" slot="reference">
                <img
                  class="user-avatar"
                  src="https://img2.baidu.com/it/u=976187030,237040006&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span class="user-name">李菲菲</span>
                <i class="iconfont icon-caret-down"></i>
              </span>
            </el-popover>
          </template>
        </div>
      </div>
    </div>
    <div class="common-header-bottom">
      <div class="bottom-content">
        <nuxt-link to="/">
          <img
            class="logo"
            src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/bdf04e4356b476e7133619f9578b9523"
            alt="安监"
          />
        </nuxt-link>
        <nav class="nav-links" @click="courseQuery = ''">
          <nuxt-link
            v-for="(item, index) in navs"
            :key="index"
            :to="item.path"
            :class="{ active: currentRoutePath === item.path }"
            >{{ item.name }}</nuxt-link
          >
        </nav>
        <div class="search-input" :class="{ focus: isFocus }">
          <el-input
            size="small"
            placeholder="搜索您感兴趣的课程"
            v-model="courseQuery"
            @focus="isFocus = true"
            @blur="isFocus = false"
          >
            <el-button
              slot="append"
              @click="handleSearch"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <Login></Login>
  </header>
</template>

<script>
import auth from "@/mixins/auth";
export default {
  mixins: [auth],
  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isFocus: false,
      courseQuery: "",
      navs: [
        {
          name: "网站首页",
          path: "/",
        },
        {
          name: "课程资源",
          path: "/course",
        },
        {
          name: "考试题库",
          path: "/questionBank",
        },
        {
          name: "机构后台",
          path: "/fdasfds",
        },
      ],
      cityActiveIndex: 0,
      citys: [
        {
          name: "广州",
          id: 1,
        },
        {
          name: "深圳",
          id: 2,
        },
        {
          name: "佛山",
          id: 3,
        },
        {
          name: "清远",
          id: 4,
        },
        {
          name: "梅州",
          id: 5,
        },
        {
          name: "汕尾",
          id: 6,
        },
        {
          name: "普宁",
          id: 7,
        },
        {
          name: "全国",
          id: 8,
        },
      ],
    };
  },
  computed: {
    currentRoutePath() {
      return this.$route.matched[0]?.path || "/";
    },
  },
  created() {},
  methods: {
    isWxLogin() {
      const code = this.$route.query.code || "";
    },
    handleSearch() {
      if (this.courseQuery) {
        this.$router.push({
          path: "/course",
          query: {
            p: this.courseQuery,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.common-header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.05);
  &.header-fixed {
    position: fixed;
    top: 0;
    z-index: 100;
  }
  &-top {
    background-color: #f1f1f1;
    .top-content {
      width: 1200px;
      height: 30px;
      margin: 0 auto;
      font-size: $font-size-sm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--color-font-2);
      &-left {
        display: flex;
        align-items: center;
        .location {
          color: var(--color-primary);
          margin-right: 20px;
          &-toggle {
            cursor: pointer;
            color: var(--color-font-2);
            &:hover {
              color: var(--color-primary);
            }
          }
        }
      }
      &-right {
        .help {
          margin-right: 20px;
        }
        span {
          cursor: pointer;
        }
        span:hover,
        a:hover {
          color: var(--color-primary);
        }
        .user-info {
          .user-avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
      }
    }
  }
  &-bottom {
    .bottom-content {
      width: 1200px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .logo {
        width: 170px;
        margin-right: 80px;
      }
      .nav-links {
        a {
          padding: 8px 0;
          margin-right: 30px;
          position: relative;
          &::after {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: var(--color-primary);
            border-radius: 3px;
            transform: translateX(-50%);
            transition: width 0.2s ease-in-out 0s;
            content: "";
          }
          &:hover,
          &.active {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.city-popover {
  &-content {
    display: flex;
    flex-wrap: wrap;
    .city-item {
      padding: 5px 11px;
      margin: 0 2px 2px 0;
      cursor: pointer;
      border-radius: 4px;
      &:hover,
      &--active {
        color: var(--color-primary);
        background-color: var(--color-primary-plain);
      }
    }
  }
}
.el-popover.popover-user {
  padding: 0;
  min-width: 100px;
}
.popover-user {
  &-content {
    .link-item {
      a {
        display: inline-block;
        width: 100%;
        padding: 14px 0;
        text-align: center;
        color: var(--color-font-2);
        &:hover {
          background-color: #f2f6fc;
        }
      }
    }
  }
}
.common-header {
  .search-input {
    width: 260px;
    transition: all 0.3s;
    margin-left: auto;
    &.focus {
      width: 360px;
    }
    .el-input {
      &__inner {
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }
      &-group__append {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
    }
  }
}
</style>