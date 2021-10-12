<!--
 * @Author: abc
 * @Date: 2021-08-19 12:32:02
 * @LastEditors: abc
 * @LastEditTime: 2021-10-12 15:34:43
 * @Description: 
-->
<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="10">
              <h6 class="home-new-text animated fadeInUp">
                {{ $t('develope.tool') }}
              </h6>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('develope.functions') }}
              </h2>
              <p class="animated fadeInUp">
                {{ $t('develope.ecoLib') }}
              </p>
              <div
                class="bass-top-box-content-btn animated fadeInUp"
                style="margin-top: 50px"
              >
                <button class="btn btn-primary" @click="handleVideoOpen">
                  {{ $t('develope.operation') }}
                </button>
              </div>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="home-tag animated fadeInUp">
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
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="weaver" class="other other-center" style="padding-bottom: 100px">
      <h2 class="develop-h2 wow fadeInUp">{{ $t('develope.weaver') }}</h2>
      <p class="develop-text wow fadeInUp">
        {{ $t('develope.bass') }}
      </p>
      <div class="home-top-btn wow fadeInUp">
        <a
          href="https://weaver.ibax.io/"
          target="_blank"
          class="btn btn-primary"
          >{{ $t('home.using') }}</a
        >
      </div>
    </div>
    <div class="bass-white bass-white-top">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="bass-white-content el-row-wrap">
            <h2 class="title-h2 wow fadeInUp">
              {{ $t('develope.encounter') }}
            </h2>
            <p class="wow fadeInUp">
              {{ $t('develope.technology') }}
            </p>
            <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
              <el-col :xs="24" :lg="11" class="bass-white-fade">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-white-title wow fadeInUp">
                      <i class="bass-white-icon iconfont el-developer"></i>
                      {{ $t('develope.document') }}
                    </h4>
                    <p class="wow fadeInUp">{{ $t('develope.use') }}</p>
                    <p class="wow fadeInUp">{{ $t('develope.doc') }}</p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/documentation"
                    target="_blank"
                    class="bass-white-bottom wow fadeInUp"
                  >
                    <span>{{ $t('home.go') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
              <el-col :xs="24" :lg="11" class="bass-white-fade">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-white-title wow fadeInUp">
                      <i class="bass-white-icon iconfont el-forum"></i
                      >{{ $t('develope.engineer') }}
                    </h4>
                    <p class="wow fadeInUp">
                      {{ $t('develope.can') }}
                    </p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/go-ibax/issues"
                    target="_blank"
                    class="bass-white-bottom wow fadeInUp"
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
          <h2 class="title-h2 wow fadeInUp">{{ $t('develope.open') }}</h2>
          <p class="wow fadeInUp">{{ $t('develope.has') }}</p>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="14" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/develop-more.jpg"
                    alt="develop-more"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <h4 class="develop-title wow fadeInUp">
                  <i class="iconfont el-payment develop-title-icon"></i>
                  <span>{{ $t('develope.paid') }}</span>
                </h4>
                <p class="wow fadeInUp">
                  {{ $t('develope.there') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.fees') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.deducted') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.deduction') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/develop-more.jpg"
                    alt="develop-more"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="8">
                <h4 class="develop-title wow fadeInUp">
                  <i class="iconfont el-code develop-title-icon"></i>
                  <span>{{ $t('develope.audit') }}</span>
                </h4>
                <p class="wow fadeInUp">
                  {{ $t('develope.review') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/develop-code.jpg"
                    alt="develop-code"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div
      class="develop-center"
      :style="{ 'padding-top': isMobile ? '50px' : '100px' }"
    >
      <h2 class="title-h2 wow fadeInUp">{{ $t('develope.lowCode') }}</h2>
      <p class="wow fadeInUp">
        {{ $t('develope.code') }}
      </p>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="14" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/develop-more.jpg"
                    alt="develop-more"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <h4 class="develop-title wow fadeInUp">
                  <i class="iconfont el-ecological develop-title-icon"></i>
                  <span>{{ $t('develope.ecological') }}</span>
                </h4>
                <p class="wow fadeInUp">
                  {{ $t('develope.quickly') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.also') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/develop-more.jpg"
                    alt="develop-more"
                  />
                </div>
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
                <h4 class="develop-title wow fadeInUp">
                  <i class="iconfont el-contract develop-title-icon"></i>
                  <span>{{ $t('develope.online') }}</span>
                </h4>
                <p class="wow fadeInUp">
                  {{ $t('develope.frameworks') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.means') }}
                </p>
                <p class="wow fadeInUp">{{ $t('develope.drag') }}</p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img wow fadeInUp">
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
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <h4 class="bass-h4 home-new-title wow fadeInUp">
                  <i class="iconfont el-templates develop-title-icon"></i>
                  <span>{{ $t('develope.template') }}</span>
                </h4>
                <p class="wow fadeInUp">
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
    <div id="empower" class="about-five">
      <el-row type="flex" justify="center">
        <el-col :md="16" :xs="23">
          <h2 class="about-five-title">{{ $t('develope.roadmap') }}</h2>
          <div class="about-five-content">
            <div class="about-five-content-item wow fadeInUp">
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
            <div class="about-five-content-item wow fadeInUp">
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
            <div class="about-five-content-item wow fadeInUp">
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
    <dialog-video
      :dialog-boo="dialogVideo"
      @videoclose="handleVideoClose"
    ></dialog-video>
    <!-- bottom -->
    <page-bottom class="lime" :obj="obj"></page-bottom>
  </div>
</template>
<script>
const img1 = require('@/assets/images/develop-create.jpg');
const img2 = require('@/assets/images/develop-ecolib.jpg');
const img3 = require('@/assets/images/develop-role.jpg');
const img4 = require('@/assets/images/develop-contract.jpg');
const img5 = require('@/assets/images/develop-voting.jpg');
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
          img: img4
        },
        {
          label: 'Voting',
          name: 'firth',
          img: img5
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.development')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Developer,Weaver,LowCode'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('nav.development')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('nav.development')}`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.numArchite =
        document.getElementById('weaver').getBoundingClientRect().bottom - 105;
      console.log(this.numArchite);
      this.numArchiteBottom =
        document.getElementById('empower').getBoundingClientRect().bottom - 105;
      if (this.numArchite) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handleArchiteScroll, 100);
        });
      }
    });
  },
  methods: {
    handleArchiteScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      if (scrollTop >= this.numArchite && scrollTop < this.numArchiteBottom) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (scrollTop >= this.numArchiteBottom) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    }
  }
};
</script>
