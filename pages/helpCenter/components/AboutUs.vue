<template>
  <div class="about-us">
    <header class="about-us-header">
      <h2>关于我们</h2>
    </header>
    <section class="about-us-content">
      <p>
        安培学堂(http://www.beiqujy.com/)，2019年成立于广州，是广东北区教育科技有限公司旗下的职业技能培训学习平台，涉及计算机技术、信息化应用技能、电子商务、生活服务、餐饮服务、特种作业等多个领域。平台汇聚教育领域的名师精英，以录播课、直播课、线下课等教学方式，提供系统集成项目管理、信息系统项目管理、系统规划与管理、计算机信息处理、经济学、金融学、会计学、食品安全管理、电工、焊工、健康管理师、平面设计、UI设计等岗位的专业课程及教务服务。
      </p>
      <p>
        目前，安培学堂拥有数十位授课老师、数十门在线课程、数万名注册学员，课程总时长超过500小时。安培学堂作为北区教育生态体系中的重要一环，致力于为相关行业的广大师生打造一所可以随时开课、自我深造的线上大学，帮助从业者随时随地实现与行业高手的链接，高效快速提升职业竞争力。
      </p>
      <div class="imgs">
        <div class="imgs-item">
          <img
            src="http://192.168.0.220:808/%E5%AE%89%E7%9B%91PC%E7%AB%AF/images/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83/u5609.png"
            alt=""
          />
          <p class="imgs-title">安培学堂软件著作证书</p>
        </div>
        <div class="imgs-item">
          <img
            src="http://192.168.0.220:808/%E5%AE%89%E7%9B%91PC%E7%AB%AF/images/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83/u5608.jpg"
            alt=""
          />
          <p class="imgs-title">系统集成项目管理师线下面授课</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  padding-bottom: 60px;
  &-header {
    padding: 0 12px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid var(--color-border-2);
  }
  &-content {
    padding: 20px;
    p {
      text-indent: 2em;
      color: var(--color-font-3);
      font-size: $font-size-sm;
      line-height: 1.8;
    }
    .imgs {
      display: flex;
      justify-content: space-around;
      &-item {
        img {
          width: 400px;
        }
      }
      &-title {
        text-align: center;
      }
    }
  }
}
</style>