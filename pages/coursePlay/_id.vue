<template>
  <div class="course-play">
    <header class="course-play-header">
      <el-button @click="goBack" type="text"
        ><i class="iconfont icon-left" style="vertical-align: text-bottom"></i>
        返回</el-button
      >
      <h1 class="play-title">2020-09-08系统集成项目管理师直播公开课视频回顾</h1>
      <el-avatar :size="36" src="https://empty">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </header>
    <div class="course-play-container">
      <div class="course-play-video" id="video"></div>
      <div class="course-play-catalogue">
        <div
          class="catalogue-switch"
          @click="show = !show"
          :class="{ 'catalogue-switch--open': show }"
        >
          <div class="catalogue-switch-top"></div>
          <div class="catalogue-switch-bottom"></div>
        </div>
        <div
          class="catalogue-list chapter"
          :class="{ 'catalogue-list--open': show }"
        >
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
                  <li>
                    <nuxt-link to="" class="chapter-list-item">
                      <div>
                        <i class="iconfont icon-ai-video"></i>
                        <span>1.1章节考点分析</span>
                        <span class="price-tag">免费</span>
                      </div>
                      <div>
                        <span>19:54</span>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="" class="chapter-list-item">
                      <div>
                        <i class="iconfont icon-ai-video"></i>
                        <span>1.1章节考点分析</span>
                        <span class="price-tag">免费</span>
                      </div>
                      <div>
                        <span>19:54</span>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="" class="chapter-list-item">
                      <div>
                        <i class="iconfont icon-ai-video"></i>
                        <span>1.1章节考点分析</span>
                        <span class="price-tag">免费</span>
                      </div>
                      <div>
                        <span>19:54</span>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="" class="chapter-list-item">
                      <div>
                        <i class="iconfont icon-ai-video"></i>
                        <span>1.1章节考点分析</span>
                        <span class="price-tag">免费</span>
                      </div>
                      <div>
                        <span>19:54</span>
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui"; //引用饿了么UI消息组件
export default {
  layout: "coursePlay",
  head() {
    return {
      title: "6666",
      bodyAttrs: {
        class: ["viedeo-play"],
      },
    };
  },
  data() {
    return {
      show: true,
      activeNames: [],
      player: null,
      time: 1000 * 10,
      timer: null,
      startPlayTime: 0,
      currentPlayTime: 0,
      currentPlayId: "",
    };
  },
  mounted() {
    this.createPlayer();
  },
  beforeDestroy() {
    this.stopSend();
  },
  methods: {
    createPlayer(row) {
      row = {
        id: 1575,
        chapter_id: 1326,
        video_repository_id: 4132,
        sort: 1,
        title: "第三十三章33.1-33.2所有权",
        duration: "02:30:13",
        cover_url:
          "https://v.beiqujy.com/39924137299e471caf154437915031ec/snapshots/9e22b01de3aa4c849f613a7ac77ccb4a-00005.jpg",
        ld_play_url:
          "https://v.beiqujy.com/39924137299e471caf154437915031ec/21fa78507e16a41c3150cfa28b2680f4-ld.m3u8",
        sd_play_url:
          "https://v.beiqujy.com/39924137299e471caf154437915031ec/b0ad90efe8fb491d9e401d941308f025-sd.m3u8",
        hd_play_url: "",
        od_play_url:
          "https://v.beiqujy.com/sv/211ab1e9-17b86f6305f/211ab1e9-17b86f6305f.mp4",
        origin_duration: "9013.235000",
        last_second: "6864.377202",
      };
      this.currentPlayId = row.id;
      this.startPlayTime = +row.last_second;
      this.player && this.player.dispose();
      this.player = null;
      let prevTime = +row.last_second;
      const source = {};
      if (row.sd_play_url) {
        source.SD = row.sd_play_url;
      }
      if (row.ld_play_url) {
        source.LD = row.ld_play_url;
      }
      if (row.od_play_url) {
        source.OD = row.od_play_url;
      }
      if (row.hd_play_url) {
        source.HD = row.hd_play_url;
      }
      this.player = new Aliplayer(
        {
          id: "video",
          width: "100%",
          height: "99.91%",
          autoplay: true,
          format: "m3u8",
          source: JSON.stringify(source),
          x5_type: "h5",
          useH5Prism: true,
          useFlashPrism: false,
          loadDataTimeout: 10,
        },
        (player) => {
          !row.is_fast &&
            document.querySelector(".prism-setting-speed").remove();
          // 设置播放开始时间
          player.seek(this.startPlayTime);
          // 暂停
          player.on("pause", (e) => {
            this.stopSend();
          });
          // 播放结束
          player.on("ended", (e) => {
            this.stopSend();
            this.startPlayTime = 0;
          });
          // 播放
          player.on("play", (e) => {
            this.intervalSend();
          });
          player.on("timeupdate", (e) => {
            // 控制拖拽快进
            if (
              !row.is_fast &&
              Math.abs(player.getCurrentTime() - prevTime) > 0.4
            ) {
              player.seek(prevTime);
              Message.warning("当前视频不允许拖拽或快进");
            } else {
              prevTime = player.getCurrentTime();
            }
          });
        }
      );
    },
    stopSend() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.sendData();
        // 停止的时候修改当前播放的这条的last_second
        // this.videoDirectory[this.chapterIndex].lesson_list[
        //   this.playIndex
        // ].last_second = this.player.getCurrentTime();
      }
    },
    intervalSend() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        this.sendData();
      }, this.time);
    },
    sendData() {
      this.currentPlayTime = this.player.getCurrentTime();
      const data = {
        start: this.startPlayTime,
        end: this.currentPlayTime,
        course_video_lesson_id: this.currentPlayId,
      };

      const timeDifference = this.currentPlayTime - this.startPlayTime;
      // 时间差必须小于当前发送间隔时间的2.2倍且大于0，才视为有效数据
      if (timeDifference <= (this.time / 1000) * 2.2 && timeDifference > 0) {
        console.log(data);
      }
      this.startPlayTime = this.currentPlayTime;
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.course-play {
  height: 100vh;
  overflow: hidden;
  &-header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #292929;
    color: #fff;
    .play-title {
      transform: translateX(-50%);
    }
  }
  &-container {
    display: flex;
    height: calc(100% - 60px);
    .course-play-video {
      flex: 1;
    }
    .course-play-catalogue {
      background-color: #333;
      display: flex;
      .catalogue-switch {
        align-self: center;
        padding: 0 10px;
        cursor: pointer;
        div {
          width: 6px;
          height: 30px;
          background-color: #ddd;
        }
        &-top {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          transition: transform 0.3s;
        }
        &-bottom {
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          transition: transform 0.3s;
        }
        &--open {
          .catalogue-switch-top {
            transform: rotate(-20deg) translateY(2px);
          }
          .catalogue-switch-bottom {
            transform: rotate(20deg) translateY(-2px);
          }
        }
      }
      .catalogue-list {
        width: 0;
        transition: width 0.3s;
        overflow-y: auto;
        &--open {
          width: 300px;
        }
        .chapter {
          &-header {
            padding: 10px;
            line-height: 1;
            &-title {
              font-size: $font-size-md;
              margin-bottom: 10px;
            }
            &-describe {
              text-indent: 2em;
              font-size: $font-size-sm;
              color: var(--color-font-3);
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
                color: #fff;
                &:hover {
                  color: var(--color-primary);
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
    }
  }
}
</style>
<style lang="scss">
.course-play {
  .el-collapse {
    border: none;
  }
  .el-collapse-item__header {
    height: auto;
    background-color: #444444;
    color: #fff;
    border: none;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
    font-size: $font-size-sm;
  }
  .el-collapse-item__wrap {
    border: none;
    background-color: #333;
  }
}
</style>