<template>
  <div class="common-problem">
    <header class="common-problem-header">
      <h2>常见问题</h2>
    </header>
    <section class="common-problem-content">
      <ul class="common-problem-list">
        <li
          class="common-problem-item"
          v-for="(item, index) in problemList"
          :key="index"
        >
          <h3 class="item-title">
            <span class="q">Q：</span><span>{{ item.title }}</span>
          </h3>
          <p class="item-value">
            {{ item.value }}
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      problemList: [
        {
          title: "如何购买课程？",
          value:
            "平台当前功能主要针对机构学员，如您没有在线下缴费报名的话部分功能可能受限，对课程购买有疑问的，可以联系在线客服获取帮助指引。",
        },
        {
          title: "购买课程后如何开始学习？",
          value:
            "订单完成后，您可以登录网站在“个人中心”→“我的课程”页面，找到已经报名的课程，点击“开始学习”按钮即可；您也可以微信H5网校，在“我的课程”页面找到已经购买的课程开始学习。除了精讲录播视频课程，部分班级还会定期安排内容丰富的直播课，由资深讲师为大家直播授课、分享经验和答疑解惑。",
        },
        {
          title: "如何联系讲师、助教和班主任？",
          value:
            "订单完成后，课程顾问会联系指导您加入在线学习班群，班主任会为您介绍学习需要注意的事项，您也可以随时在班群内发起提问，讲师、助教、班主任都会为每一个学员在线答疑。",
        },
        {
          title: "观看视频卡顿怎么办？",
          value:
            "在观看课程视频时，可能因网络问题导致播放页面卡顿，可以适当调低播放清晰度，也可以点击暂停按钮，待视频播放有所缓存后再次播放。",
        },
        {
          title: "可以离线学习吗？",
          value:
            "网站目前暂不支持离线学习服务，需要在有网络的情况下，登录个人账号，打开教程学习界面进行在线学习。",
        },
        {
          title: "学习有效期是多久？",
          value:
            "课程学习有效期一般是1-2年，具体根据课程类型、班型有所区分，详情可联系客服咨询。学习有效期满后，学员也可联系班主任了解后续学习办法。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.common-problem {
  padding-bottom: 60px;
  &-header {
    padding: 0 12px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid var(--color-border-2);
  }
  &-item {
    padding: 20px;
    .item-title {
      margin-bottom: 12px;
      .q {
        color: var(--color-primary);
      }
    }
    .item-value {
      color: var(--color-font-3);
      font-size: $font-size-sm;
    }
  }
}
</style>