<template>
  <div class="count-down">
    <div class="count-down-header">
      <i class="iconfont icon-alert"></i>
      <span>考试倒计时</span>
    </div>
    <div class="count-down-content">
      <span class="hour">{{ timeFormat(hour) }}</span
      ><span class="separator">:</span
      ><span class="second">{{ timeFormat(minute) }}</span
      ><span class="separator">:</span
      ><span class="minute">{{ timeFormat(second) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestCountDown",
  props: {
    time: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: this.time,
      hour: 2,
      minute: 39,
      second: 59,
      timerId: 0,
    };
  },
  created() {
    this.transformTime();
  },
  mounted() {
    this.startCountDown();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    startCountDown() {
      if (this.currentTime === 0) {
        this.endCountDown();
        return;
      }
      this.clearTimer();
      this.timerId = setInterval(() => {
        this.currentTime--;
        this.transformTime();
        if (this.currentTime === 0) {
          this.endCountDown();
        }
      }, 1000);
    },
    endCountDown() {
      this.clearTimer();
      this.$emit("time-end");
    },
    clearTimer() {
      this.timerId && clearInterval(this.timerId);
      this.timerId = null;
    },
    transformTime() {
      const time = this.currentTime;
      const h = 60 * 60;
      this.hour = Math.floor(time / h);
      this.minute = Math.floor((time % h) / 60);
      this.second = Math.floor((time % h) % 60);
    },
    timeFormat(val) {
      return val < 10 ? "0" + val : val;
    },
  },
};
</script>

<style lang="scss" scoped>
.count-down {
  padding: 16px;
  margin-bottom: 20px;
  background-color: #fff;
  &-header {
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border-1);
    color: var(--color-primary);
    .icon-calculator {
      font-size: $font-size-lg;
      vertical-align: text-bottom;
    }
    span {
      font-weight: bold;
    }
  }
  &-content {
    padding: 30px 0 16px 0;
    font-size: 30px;
    color: var(--color-font-2);
    text-align: center;
    .separator {
      padding: 0 2px;
    }
  }
}
</style>