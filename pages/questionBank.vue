<template>
  <div class="question-bank">
    <section class="question-bank-banner">
      <img
        src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/eb0202fea18f358399772d22b260e13b"
        alt="信息系统项目管理师"
      />
    </section>
    <section class="question-bank-nav">
      <header class="question-bank-nav-header">
        <h1 class="question-name">系统集成项目管理工程师（中级）</h1>
        <el-button type="info" plain size="small" @click="openQuestionDialog">
          <i class="iconfont icon-swap"></i> 切换考试</el-button
        >
      </header>
      <nav class="question-bank-nav-list">
        <ul>
          <li
            @click="handleNavClick(index)"
            :class="[
              'nav-item',
              {
                'nav-item--active': isActive(index),
              },
            ]"
            v-for="(nav, index) in navs"
            :key="index"
          >
            <nuxt-link class="nav-item-box" :to="`/questionBank${nav.path}`">
              <i
                :class="[
                  'iconfont',
                  isActive(index) ? nav.activeIcon : nav.icon,
                ]"
              ></i>
              <span>{{ nav.name }}</span>
            </nuxt-link>
          </li>
        </ul>
        <div
          class="list-border"
          :style="`transform: translateX(${navActiveIndex * 130}px)`"
        ></div>
      </nav>
    </section>
    <section class="question-bank-child">
      <nuxt-child :key="qid" :qid="qid" />
    </section>
    <select-question-dialog v-model="questionDialogVisible" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "考试题库",
    };
  },
  data() {
    return {
      navActiveIndex: 0,
      navs: [
        {
          name: "章节练习",
          path: "",
          icon: "icon-penRuler",
          activeIcon: "icon-penRuler-fill",
        },
        {
          name: "模拟考试",
          path: "/examination",
          icon: "icon-trophy",
          activeIcon: "icon-trophy-fill",
        },
        {
          name: "人工组卷",
          path: "/independent",
          icon: "icon-report",
          activeIcon: "icon-report-fill",
        },
        {
          name: "收藏夹",
          path: "/favorites",
          icon: "icon-like",
          activeIcon: "icon-like-fill",
        },
        {
          name: "错题集",
          path: "/wrongQuestion",
          icon: "icon-ordercancle",
          activeIcon: "icon-ordercancle-fill",
        },
      ],
      questionDialogVisible: false,
    };
  },
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const qid = store.state.question.qid || "";
    let questionDialogVisible = false;
    if (!qid) {
      questionDialogVisible = true;
    }
    return {
      questionDialogVisible,
    };
  },
  computed: {
    ...mapState("question", ["qid"]),
  },
  created() {
    this.initNavIndex();
  },
  methods: {
    initNavIndex() {
      this.navs.forEach((item, index) => {
        if (`/questionBank${item.path}` === this.$route.path) {
          this.navActiveIndex = index;
        }
      });
    },
    handleNavClick(index) {
      this.navActiveIndex = index;
    },
    isActive(index) {
      return index === this.navActiveIndex;
    },
    openQuestionDialog() {
      this.questionDialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.question-bank {
  &-banner {
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    img {
      width: 1200px;
      height: 150px;
    }
  }
  &-nav {
    width: 1200px;
    margin: 20px auto;
    background-color: #fff;
    padding: 0 20px;
    &-header {
      padding: 20px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--color-border-1);
      .question-name {
        margin-right: 10px;
      }
      .iconfont {
        vertical-align: text-bottom;
      }
    }
    &-list {
      ul {
        display: flex;
        align-items: center;
        .nav-item {
          width: 130px;
          text-align: center;
          color: var(--color-font-3);
          &-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            .iconfont {
              font-size: 36px;
            }
          }
          &--active {
            color: var(--color-primary);
          }
        }
      }
      .list-border {
        height: 4px;
        width: 130px;
        background-color: var(--color-primary);
        transition: transform 0.3s ease;
        border-radius: 10px;
      }
    }
  }
  &-child {
    width: 1200px;
    margin: 0 auto 20px auto;
    background-color: #fff;
    padding: 20px;
    min-height: 500px;
  }
}
</style>