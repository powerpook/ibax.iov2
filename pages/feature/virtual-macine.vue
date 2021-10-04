<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-20 16:41:43
 * @Description: virtual macine
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new" style="margin-top: 30px">
          <h6 class="global-h6 animated fadeInUp">
            {{ $t('high.technical') }}
          </h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="18">
              <h2 class="bass-h2 animated fadeInUp">
                {{ $t('home.multiple') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('nav.smart') }}
              </p>
              <p class="home-new-bottom animated fadeInUp">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <!-- <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div class="other other-middle">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('high.most') }}
                </div>
                <div>{{ $t('high.engine') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">{{ $t('high.one') }}</div>
                <div>{{ $t('high.chains') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('high.contract') }}
                </div>
                <div>{{ $t('high.trigger') }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-042"></i>
                <span class="home-new-title-text"
                  >{{ $t('high.editor') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">{{ $t('high.simple') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('home.system') }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="../../assets/image/img-insights-report2.png"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="most" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img">
            <i v-if="lang === 'zh'" class="iconfont el-viewpoint_zh"></i>
            <i v-if="lang === 'en'" class="iconfont el-viewpoint"></i>
            <i v-if="lang === 'tw'" class="iconfont el-viewpoint_tw"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">{{
              $t('home.basic')
            }}</strong>
            {{ $t('home.important') }}
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Simon Hemmrich</strong>
            <span class="other-center-bottom-text">Senior Consultant</span>
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
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-051"></i>
                  <span class="home-new-title-text">
                    {{ $t('high.cont') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('high.from') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.weaver') }}
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
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-043"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.manager') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.panel') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.provides') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-tag wow fadeInUp">
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
    </div>
    <div id="lead" class="media-a high-bottom">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4 wow fadeInUp">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('high.lead') }}
                </h4>
                <p class="high-bottom-h6">{{ $t('nav.each') }}</p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/architecture"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-001"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('high.cross-chain') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.decen') }}</p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/cross-chain"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-003"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.private') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.fouds') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/privite-transaction"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
  </div>
</template>
<script>
const img1 = require('../../assets/image/img-retention-report-2.png');
const img2 = require('../../assets/image/img-funnels-report-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'bass.local',
          name: 'first',
          img: img1
        },
        {
          label: 'bass.security',
          name: 'second',
          img: img2
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.virtual')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BaaS,Mining,PostgreSQL, Honor Node,Guardian Node,Mint Node,Sub Nodes, CLB (CROSS LEDGERS BASE),Smart contracts,ecoLib,ecoGroup, Weaver,Oracle,Solidity,Go,Rust,DAO'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('nav.virtual')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('nav.security')}`
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
        document.getElementById('most').getBoundingClientRect().bottom - 105;
      console.log(this.numArchite);
      this.numArchiteBottom =
        document.getElementById('lead').getBoundingClientRect().bottom - 105;
      if (this.numArchite) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handleMostScroll, 250);
        });
      }
    });
  },
  methods: {
    handleMostScroll() {
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
