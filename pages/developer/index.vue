<!--
 * @Author: abc
 * @Date: 2021-08-19 12:32:02
 * @LastEditors: abc
 * @LastEditTime: 2021-09-08 12:02:25
 * @Description: 
-->
<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6">可视化工具</h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="10">
              <h2 class="bass-h2">Functions of Weaver</h2>
              <p>
                How to Create a New ecoLib ? EcoLib creation is fast with LESS.
                The creator has all the management permissions.
              </p>
            </el-col>
            <el-col :xs="23" :lg="12">
              <el-tabs v-model="activeName" :tab-position="tabPosition">
                <el-tab-pane
                  v-for="item in arrTags"
                  :key="item.name"
                  :label="$t(item.label)"
                  :name="item.name"
                >
                  <div class="home-tag-img">
                    <img :src="item.img" :alt="item.label" />
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
          <div class="bass-top-box-content-btn">
            <button class="btn btn-primary" @click="handleVideo">
              观看操作视频
            </button>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="other other-center" style="padding-bottom: 100px">
      <h2 class="bass-h2">Weaver是为IBAX开发者提供的</h2>
      <div class="global-h6">
        在Weaver中已经添加了BaaS功能，你可以使用他创建和管理你的生态。
      </div>
      <div class="home-top-btn">
        <a
          href="https://weaver.ibax.io/"
          target="_blank"
          class="btn btn-primary"
          >{{ $t('home.using') }}</a
        >
      </div>
    </div>
    <div class="bass-white" style="padding-top: 100px; padding-bottom: 0">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="bass-white-content">
            <h2 class="bass-h2">如果遇到开发困难</h2>
            <p>
              IBAX团队以技术为主导，对所有的研发问题都很感兴趣，我们会及时回复社区内的问题。
            </p>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i
                        class="bass-white-icon iconfont el-a-customerservice"
                      ></i>
                      开发文档
                    </h4>
                    <p>1、关于IBAX链的使用文档</p>
                    <p>2、Weaver说明文档</p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/documentation"
                    target="_blank"
                    class="bass-white-bottom"
                  >
                    <span>前往查看</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i
                        class="bass-white-icon iconfont el-a-customerservice"
                      ></i
                      >工程师论坛
                    </h4>
                    <p>
                      你可以在这里查找相关的问题，如果没能得到解决，你一定要及时提问，社区的其他开发者会及时给你想要的答案
                    </p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/go-ibax/issues"
                    target="_blank"
                    class="bass-white-bottom"
                  >
                    <span>进入论坛</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="develop-center">
      <h2 class="bass-h2">Low Code</h2>
      <p>
        Low Code对于所有的开发者都是极为友好的，为此IBAX团队提供了一个Low
        Code开发平台，我们称她为“Weaver" .
      </p>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <h4 class="bass-h4 home-new-title">
                  <img
                    src="../../assets/image/ico-insights.svg"
                    alt="ico-insights"
                  />
                  <span>生态管理</span>
                </h4>
                <p>
                  在Weaver中你可以通过可视化页面快速创建一个生态，采用选择配置的方式初始化生态规则，加入生态的成员将必须遵守你的生态规则。
                </p>
                <p>
                  Weaver还支持可视化操作的一键导入其他链的合约，如果是一个成熟的生态开发者，你可以使用这个功能无缝引用你在其他链的生态。
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h4 class="bass-h4 home-new-title">
                  <img
                    src="../../assets/image/ico-insights.svg"
                    alt="ico-insights"
                  />
                  <span>在线智能合约编辑器</span>
                </h4>
                <p>
                  在线智能合约编辑器，提供合约框架和模板，帮助开发者快速开发生态合约。
                </p>
                <p>
                  保存即上链，编写完的合约保存成功后可选择发布上链，应用于生态。
                </p>
                <p>提供拖拽效果添加控件，降低重复开发工作，减少代码量。</p>
                <p></p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <h4 class="bass-h4 home-new-title">
                  <img
                    src="../../assets/image/ico-insights.svg"
                    alt="ico-insights"
                  />
                  <span>模板</span>
                </h4>
                <p>
                  Weaver中已经添加了大量的基础模板，比如：投票模板、消息模板、BaaS应用、成员管理等，这些模板可以通过可视化页面直接添加到你的生态内。
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <!--  <page-bottom class="lime" :obj="obj"></page-bottom> -->
    <!-- Story wall -->
    <div class="about-five">
      <el-row type="flex" justify="center">
        <el-col :md="16" :xs="23">
          <h2 class="about-five-title">技术路线图</h2>
          <div class="about-five-content">
            <div class="about-five-content-item">
              <div class="about-five-content-item-img">
                <img src="@/assets/image/five-1.png" alt="five-1" />
              </div>
              <h3 class="about-five-title-small">Empower</h3>
              <div class="about-five-content-text">
                <h4>Oct 2020</h4>
                <div>
                  IBAX Network WHITEPAPER Version 1.0 IBAX Network GLOABL
                  FOUNDATION SET UP
                </div>
              </div>
              <div class="about-five-content-text">
                <h4>Dec 2020WARM-UP PRESS CONFERENCE</h4>
                <div>
                  IBAX Network WEBSITE TESTING MAIN-NET Global ECO-SYSTEM NODE
                  SUMMON
                </div>
              </div>
              <div class="about-five-content-text">
                <h4>Aug 2021</h4>
                <div>
                  MAIN-NET ONLINE ANNOUNCEMENT DAPPS ECO-SYSTEM PUBLISH（SUCH
                  AS：ECO-SYSTEM BUILDING、ONE CLICK COIN、ECO-SYSTEM VOTING
                  RIGHT、DECENTRALIZED EXCHANGE ETC.
                </div>
              </div>
            </div>
            <div class="about-five-content-item">
              <div class="about-five-content-item-img">
                <img src="@/assets/image/five-2.png" alt="five-1" />
              </div>
              <h3 class="about-five-title-small">Forward</h3>
              <div class="about-five-content-text">
                <h4>2021 - 2022</h4>
                <div>
                  GLOBAL ECO-FOUNDATION GOVERNOR'S ELECTION CONFERENCE AND NODE
                  VOTING OPENING THE GLOBAL CONFERENCE OF DEVELOPERS RELEASING
                  V1.01 VERSION OF GFILES DISTRIBUTED STORAGE APPLICATION BASED
                  ON IBAX Network
                </div>
              </div>
              <div class="about-five-content-text">
                <h4>Jun 2022</h4>
                <div>
                  MAIN CHAIN TECHNOLOGY UPGRADE ITERATION IBAX Network
                  WHITEPAPER V2.0 REALIZE IPFS DISTRIBUTED NETWORK BASED ON IBAX
                  Network MAIN CHAIN, OPTIMIZE AND INCREASE THE RICHNESS OF
                  ECO-COMMERCE, AND INTRODUCE SOCIAL, GAME, INFORMATION, VIDEO
                  AND OTHER APPLICATIONS. INCORPORATING 1000+ ENTERPRISES,
                  INSTITUTIONS AND DEVELOPING ECOLOGICAL PARTNERS
                </div>
              </div>
            </div>
            <div class="about-five-content-item">
              <div class="about-five-content-item-img">
                <img src="@/assets/image/five-3.png" alt="five-1" />
              </div>
              <h3 class="about-five-title-small">Vsion</h3>
              <div class="about-five-content-text">
                <h4>2022 — 2025</h4>
                <div>
                  CONSTRUCTING AND PERFECTING BLOCK CHAIN INFRASTRUCTURE IN AN
                  ALL-ROUND WAY FOUNDATION INVESTMENT TO INTRODUCE BUSINESS
                  COOPERATION AND EXPAND IBAX Network ECOLOGY
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="gray"></page-bottom>
    <el-dialog
      :visible.sync="dialogVideo"
      :before-close="handleClose"
      custom-class="dialog"
    >
      <div class="modal-box info-modal-box">
        <a href="#" class="close icon-cross"></a>
        <div class="left-col">
          <div class="frame">
            <div class="avatar-wrap">
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/JPG01-2.jpg"
                class="attachment-full"
                alt="JPG01-2"
              />
            </div>
            <strong class="name">Vlado Hruda</strong>
            <span class="post">Sr. Product Manager @ Mixpanel</span>
            <div class="social-networks">
              <a
                href="https://www.linkedin.com/in/vlado-hruda-1939502/"
                class="iconfont el-linkedin"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
        <div class="right-col">
          <div class="frame">
            <div ref="videoBox" class="video">
              <video
                id="video"
                ref="video"
                src="/video/video.mp4"
                webkit-playsinline="true"
                x5-playsinline="true"
                controls
                playsinline="true"
                poster="/video/poster.jpg"
                class="video-content"
              >
                Your browser does not support video tags.
              </video>
              <div ref="play" class="video-poster" @click="handleOpenVideo">
                <img src="/video/612.png" alt="612" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
const img1 = require('@/assets/image/img-retention-report-2.png');
const img2 = require('@/assets/image/img-funnels-report-2.png');
const img3 = require('@/assets/image/img-insights-report2.png');
export default {
  props: {},
  data() {
    return {
      obj: {
        path: '/about',
        text: 'nav.about',
        label: 'footer.compete',
        title: 'footer.creative'
      },
      dialogVideo: false,
      activeName: 'first',
      tabPosition: 'bottom',
      arrTags: [
        {
          label: 'Create',
          name: 'first',
          img: img1
        },
        {
          label: 'EcoLib',
          name: 'second',
          img: img2
        },
        {
          label: 'Role',
          name: 'third',
          img: img3
        },
        {
          label: 'Contract',
          name: 'fonth',
          img: img1
        },
        {
          label: 'Voting',
          name: 'firth',
          img: img2
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleVideo() {
      this.dialogVideo = true;
      this.$nextTick(() => {
        if (this.$refs.videoBox && this.dialogVideo) {
          const videoBox = this.$refs.videoBox.clientWidth;
          console.log(this.$refs.videoBox);
          console.log(videoBox);
          this.$refs.videoBox.style.height = (videoBox * 9) / 16 + 'px';
        }
      });
    },
    handleOpenVideo() {
      this.$refs.play.style.display = 'none';
      this.$refs.video.play();
    },
    handleClose(done) {
      done();
      this.$refs.play.style.display = 'block';
      this.$refs.video.currentTime = 0;
      this.$refs.video.pause();
    }
  }
};
</script>
