<!--
 * @Author: abc
 * @Date: 2021-08-19 12:32:02
 * @LastEditors: abc
 * @LastEditTime: 2021-09-15 18:22:47
 * @Description: 
-->
<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6">{{ $t('develope.tool') }}</h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="10">
              <h2 class="bass-h2">{{ $t('develope.functions') }}</h2>
              <p>
                {{ $t('develope.ecoLib') }}
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
              {{ $t('develope.operation') }}
            </button>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="other other-center" style="padding-bottom: 100px">
      <h2 class="bass-h2">{{ $t('develope.weaver') }}</h2>
      <div class="global-h6">
        {{ $t('develope.bass') }}
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
            <h2 class="bass-h2">{{ $t('develope.encounter') }}</h2>
            <p>
              {{ $t('develope.technology') }}
            </p>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i class="bass-white-icon iconfont el-developer"></i>
                      {{ $t('develope.document') }}
                    </h4>
                    <p>{{ $t('develope.use') }}</p>
                    <p>{{ $t('develope.doc') }}</p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/documentation"
                    target="_blank"
                    class="bass-white-bottom"
                  >
                    <span>{{ $t('home.go') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i class="bass-white-icon iconfont el-forum"></i
                      >{{ $t('develope.engineer') }}
                    </h4>
                    <p>
                      {{ $t('develope.can') }}
                    </p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/go-ibax/issues"
                    target="_blank"
                    class="bass-white-bottom"
                  >
                    <span>{{ $t('develope.enter') }}</span>
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
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="16">
          <h2 class="bass-h2">{{ $t('develope.open') }}</h2>
          <p>{{ $t('develope.has') }}</p>
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
                  <span>{{ $t('develope.paid') }}</span>
                </h4>
                <p>
                  {{ $t('develope.there') }}
                </p>
                <p>
                  {{ $t('develope.fees') }}
                </p>
                <p>
                  {{ $t('develope.deducted') }}
                </p>
                <p>
                  {{ $t('develope.deduction') }}
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
                  <span>{{ $t('develope.audit') }}</span>
                </h4>
                <p>
                  {{ $t('develope.review') }}
                </p>
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
    <div class="develop-center" style="padding-top: 50px">
      <h2 class="bass-h2">Low Code</h2>
      <p>
        {{ $t('develope.code') }}
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
                  <span>{{ $t('develope.ecological') }}</span>
                </h4>
                <p>
                  {{ $t('develope.quickly') }}
                </p>
                <p>
                  {{ $t('develope.also') }}
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
                  <span>{{ $t('develope.online') }}</span>
                </h4>
                <p>
                  {{ $t('develope.frameworks') }}
                </p>
                <p>
                  {{ $t('develope.means') }}
                </p>
                <p>{{ $t('develope.drag') }}</p>
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
                  <span>{{ $t('develope.template') }}</span>
                </h4>
                <p>
                  {{ $t('develope.number') }}
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
          <h2 class="about-five-title">{{ $t('develope.roadmap') }}</h2>
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
    <page-bottom class="gray" :obj="obj"></page-bottom>
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
