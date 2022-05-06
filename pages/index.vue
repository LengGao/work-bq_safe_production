<template>
  <div class="index">
    <section class="index-banners">
      <el-carousel height="417px">
        <el-carousel-item v-for="(url, index) in banners" :key="index">
          <img class="banner" :src="url" alt="安培学堂" />
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="index-nav">
      <ul class="index-nav-list">
        <li
          v-for="(item, index) in navs"
          :key="index"
          class="index-nav-item"
          :style="`background: url(${item.bg}) no-repeat;background-size: cover;`"
        >
          <nuxt-link class="item-link" to="/course">
            <h2 class="link-title">{{ item.title }}</h2>
            <p class="link-desc">{{ item.describe }}</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="index-guide">
      <img class="index-guide-img" src="~/assets/img/guide-title.png" alt="" />
      <div class="index-guide-container">
        <img class="index-guide-icon" src="~/assets/img/pre_icon.png" alt="" />
        <div class="index-guide-content">
          <h2 class="index-guide-title">操作指南</h2>
          <p class="index-guide-desc">
            针对“三项岗位"开发，符合国家大纲要求的视频课程和海量模考真题，助力轻松通过取证
          </p>
        </div>
        <nuxt-link to="">
          <el-button class="index-guide-btn" type="primary">
            了解详情
          </el-button>
        </nuxt-link>
      </div>
    </section>
    <section class="index-hot">
      <div class="index-hot-container">
        <div class="index-hot-header">
          <img
            class="index-hot-title"
            src="~/assets/img/hot-title.png"
            alt=""
          />
          <nuxt-link to="/course" class="index-hot-link">更多课程></nuxt-link>
        </div>
        <div class="course-container">
          <ul class="course-list">
            <li
              class="course-list-item"
              v-for="(item, index) in courseList"
              :key="index"
            >
              <nuxt-link to="/course">
                <div class="course-cover">
                  <img :src="item.cover" alt="" />
                </div>
                <div class="course-content">
                  <h2 class="course-name">{{ item.name }}</h2>
                  <p class="course-desc">{{ item.desc }}</p>
                  <div class="course-bottom">
                    <span><i class="iconfont"></i>{{ item.look }}人已学习</span>
                    <span class="course-price">￥{{ item.price }}</span>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="index-news">
      <div class="index-news-header">
        <img
          class="index-news-title"
          src="~/assets/img/news-title.png"
          alt=""
        />
        <nuxt-link to="/course" class="index-hot-link">更多资讯></nuxt-link>
      </div>
      <div class="index-news-container">
        <div class="news-left">
          <div class="news-left-cover">
            <img
              src="http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/9de33e33e739dedaa99dcc0fcc5a2dfd"
              alt=""
            />
          </div>
          <div class="news-left-container">
            <nuxt-link to="">
              <div class="news-left-title">
                <span
                  >省系统防范化解道路交通安全风险工作专班召开第七次主任会议</span
                >
              </div>
              <div class="news-warp">
                <div class="news-time">
                  <p>2022</p>
                  <span>04-19</span>
                </div>
                <div class="news-line"></div>
                <p class="news-content">
                  4月19日，省系统防范化解道路交通安全风险工作专班召开第七次主任会议，传达贯彻省委常委会会议精神，审议有关文件和经验汇编材料，
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <ul class="news-right">
          <li v-for="(item, index) in news" :key="index">
            <nuxt-link to="" class="news-warp">
              <div class="news-time">
                <p>{{ item.year }}</p>
                <span>{{ item.day }}</span>
              </div>
              <div class="news-line"></div>
              <div class="news-content">
                <h2 class="news-content-title">{{ item.name }}</h2>
                <p>
                  {{ item.content }}
                </p>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="index-us">
      <div class="index-us-header">
        <img class="index-us-title" src="~/assets/img/us-title.png" alt="" />
      </div>
      <ul class="us-list">
        <li class="us-list-item" v-for="(item, index) in usList" :key="index">
          <img class="us-list-item-icon" :src="item.iconImg" alt="" />
          <h3 class="us-list-item-title">{{ item.name }}</h3>
          <p class="us-list-item-desc">{{ item.desc }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import iconUs1 from "~/assets/img/icon-us-1.png";
import iconUs2 from "~/assets/img/icon-us-2.png";
import iconUs3 from "~/assets/img/icon-us-3.png";
import iconUs4 from "~/assets/img/icon-us-4.png";
import iconUs5 from "~/assets/img/icon-us-5.png";
export default {
  name: "IndexPage",
  data() {
    return {
      banners: [
        "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/49feda07c1ebf3ca4e002b2ccebc330f",
        "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/83f2467925a43b6a7b87dde50b9af98a",
      ],
      navs: [
        {
          bg: "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/4056fa70e6d356a00ff37ca52c8b2a48",
          title: "特种作业人员",
          describe: "针对国家特种作业人员考核精心研制",
        },
        {
          bg: "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/38b4a4266605a262f654d5d7f2e678a2",
          title: "主要负责人",
          describe: "主要负责人课程涵盖 十个大类60+工种",
        },
        {
          bg: "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/d226e8d10636f9becd75c17bca1b6027",
          title: "安全管理人员",
          describe: "安全管理人员课程涵盖八个大类50+工种",
        },
        {
          bg: "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/9168c3e10cd58ab5576c444c59c91aed",
          title: "一般从业人员",
          describe: "独有的实操考试训练 助您轻松通过",
        },
      ],
      courseList: [
        {
          name: "低压电工实操作业（初训）",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 1600,
          look: 999,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/dfba9e15a257d69a7c2b308cafc091bc",
        },
        {
          name: "制冷空调作业—设备操作运行",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 3200,
          look: 356,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/3de77c138789512ae8182e14cc1564f1",
        },
        {
          name: "危险化学品操作证",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 4500,
          look: 854,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/c9cd93433fded6d9c0ed0fe9cf466004",
        },
        {
          name: "金属非金属矿山作业",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 2999,
          look: 556,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/d980d502287a65b791488f55c88f6a54",
        },
        {
          name: "高压电工实操作业",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 2300,
          look: 352,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/c142d7fec30666848120c40082e2b7d2",
        },
        {
          name: "金属非金属矿山作业(初训)",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 1600,
          look: 1239,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/c9cd93433fded6d9c0ed0fe9cf466004",
        },
        {
          name: "制冷空调作业—设备操作运行(初训)",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 1800,
          look: 9998,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/c142d7fec30666848120c40082e2b7d2",
        },
        {
          name: "危险化学品操作证(初训)",
          desc: "包含低压电工作业课程总88学时的内容",
          price: 2500,
          look: 899,
          cover:
            "http://dpsystem.oss-cn-shenzhen.aliyuncs.com/moren1607659060/d980d502287a65b791488f55c88f6a54",
        },
      ],
      news: [
        {
          name: "省应急管理厅开展钢铁企业安全检查",
          content:
            "省系统防范化解道路交通安全风险工作传达贯彻省委常委会会议精神",
          year: 2022,
          day: "04-19",
        },
        {
          name: "广东部署开展全省安全生产大检查 突出九大重点内容",
          content:
            "目前，广东省安委会指定并引发《广东省安全生产大检查工作实施方案》",
          year: 2022,
          day: "04-19",
        },
        {
          name: "省应急管理厅开展钢铁企业安全检查",
          content:
            "省系统防范化解道路交通安全风险工作传达贯彻省委常委会会议精神省系统防范化解道路交通安全风险工作传达贯彻省委常委会会议精神",
          year: 2022,
          day: "04-19",
        },
      ],
      usList: [
        {
          name: "数十年教育品牌",
          desc: "每年10万+考生通过平台完成取证",
          iconImg: iconUs1,
        },
        {
          name: "专注安培领域",
          desc: "以特种作业教考科技化为己任",
          iconImg: iconUs2,
        },
        {
          name: "丰富课程内容",
          desc: "平台积累1000+学时教学资源",
          iconImg: iconUs3,
        },
        {
          name: "海量练习题库",
          desc: "已收录各行业超过15000道题目",
          iconImg: iconUs4,
        },
        {
          name: "符合政策要求",
          desc: "符合在线教育安全性的要求指标",
          iconImg: iconUs5,
        },
      ],
    };
  },
  created() {},
};
</script>
<style lang="scss">
.index {
  cursor: context-menu;
  margin-bottom: 20px;
  &-banners {
    .banner {
      height: 100%;
    }
  }
  &-nav {
    width: 1200px;
    margin: 20px auto;
    &-list {
      display: flex;
      align-items: center;
    }
    &-item {
      flex: 1;
      height: 158px;
      transition: all 0.3s;
      &:not(:last-child) {
        margin-right: 25px;
      }
      &:hover {
        transform: scale(1.3) translateY(10px);
        border-radius: 10px;
      }
      .item-link {
        display: block;
        height: 100%;
        padding: 33px 17px;
        color: #fff;
      }
      .link-title {
        font-size: 22px;
        text-shadow: 0px 3px 3px rgba(27, 144, 96, 0.36);
      }
      .link-desc {
        font-size: 15px;
        width: 152px;
      }
    }
  }
  &-guide {
    width: 1200px;
    margin: 20px auto;
    &-img {
      width: 223px;
      height: 28px;
      margin-bottom: 24px;
    }
    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      padding-left: 60px;
      box-shadow: 0px 2px 12px 0px rgba(231, 231, 231, 0.28);
    }
    &-icon {
      width: 66px;
      height: 66px;
      margin-right: 50px;
    }
    &-content {
    }
    &-title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 16px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: -33px;
        left: 0;
        width: 93px;
        height: 2px;
        background-color: var(--color-primary);
      }
    }
    &-desc {
      font-size: $font-size-lg;
      color: var(--color-font-2);
    }
    &-btn {
      margin-left: auto;
      padding: 55px 45px;
      border-radius: 0;
      font-size: 22px;
    }
  }
  &-hot {
    margin: 20px 0;
    background-color: #fff;
    &-container {
      width: 1200px;
      margin: 0 auto;
      padding-top: 47px;
      padding-bottom: 68px;
    }
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-link {
      color: var(--color-font-3);
      font-size: $font-size-sm;
    }
    &-title {
      width: 222px;
      height: 29px;
      margin-bottom: 32px;
    }
    .course-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &-item {
        width: calc(100% / 4 - 22px);
        border-radius: 6px;
        box-shadow: 0px 2px 12px rgba(231, 231, 231, 0.9);
        margin-bottom: 20px;
        transition: all 0.3s;
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgb(0 0 0 / 6%);
          .course-cover {
            img {
              transform: translateZ(0) scale3d(1.1, 1.1, 1.1);
            }
          }
        }
        .course-cover {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          height: 156px;
          overflow: hidden;
          img {
            transition: transform 0.3s;
            height: 100%;
          }
        }
        .course-content {
          padding: 4px 20px 20px 10px;
          .course-name {
            font-size: $font-size-lg;
            margin-bottom: 15px;
            @include ellipsis(1);
          }
          .course-desc {
            color: var(--color-font-3);
            font-size: $font-size-sm;
            margin-bottom: 14px;
          }
          .course-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: $font-size-sm;
            color: var(--color-font-3);
            .course-price {
              color: var(--color-danger);
              font-size: $font-size-lg;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  &-news {
    width: 1200px;
    margin: 40px auto;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-link {
      color: var(--color-font-3);
      font-size: $font-size-sm;
    }
    &-title {
      width: 168px;
      height: 29px;
      margin-bottom: 32px;
    }
    &-container {
      display: flex;
      justify-content: space-between;
      .news-left {
        width: 49%;
        flex-shrink: 0;
        &-cover {
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        &-container {
          padding: 25px 20px;
          background-color: #fff;
        }
        &-title {
          font-size: $font-size-lg;
          margin-bottom: 28px;
        }
      }
      .news-warp {
        display: flex;
        align-items: center;
        .news-time {
          flex-shrink: 0;
          span {
            font-size: $font-size-sm;
            color: var(--color-font-2);
          }
        }
        .news-line {
          width: 1px;
          height: 40px;
          background-color: var(--color-border-2);
          margin: 0 18px;
        }
        .news-content {
          @include ellipsis(2);
          font-size: $font-size-sm;
          color: var(--color-font-3);
          &-title {
            font-size: $font-size-lg;
            color: var(--color-font-1);
            margin-bottom: 12px;
          }
        }
      }
      .news-right {
        width: 49%;
        background-color: #fff;
        padding: 0 20px;
        li {
          padding: 40px 0;
          &:not(:last-child) {
            border-bottom: 1px solid var(--color-border-2);
          }
        }
      }
    }
  }
  &-us {
    width: 1200px;
    margin: 0 auto;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-link {
      color: var(--color-font-3);
      font-size: $font-size-sm;
    }
    &-title {
      width: 168px;
      height: 29px;
      margin-bottom: 32px;
    }
    .us-list {
      padding: 26px 0;
      display: flex;
      align-items: center;
      background-color: #fff;
      &-item {
        width: calc(100% / 5);
        text-align: center;
        &:not(:last-child) {
          border-right: 1px solid var(--color-border-2);
        }
        &-icon {
          width: 42px;
          height: 36px;
          margin-bottom: 16px;
        }
        &-title {
          font-size: 20px;
          margin-bottom: 10px;
        }
        &-desc {
          font-size: $font-size-sm;
          color: var(--color-font-3);
        }
      }
    }
  }
}
</style>
