<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-28 12:21:20
 * @Description:
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="18">
              <h6 class="global-h6 animated fadeInUp">
                {{ $t('featrue.ecolog') }}
              </h6>
              <h2 class="bass-h2 animated fadeInUp">
                {{ $t('feature.realize') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('feature.take') }}
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
            <!--  <el-col :xs="23" :lg="6">
              <div class="home-new-img animated fadeInUp">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('feature.consensus') }}
                </div>
                <div>{{ $t('feature.costs') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('feature.issuing') }}
                </div>
                <div>{{ $t('feature.economic') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('feature.mining') }}
                </div>
                <div>{{ $t('feature.incentives') }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-054"></i>
                <span class="home-new-title-text">
                  {{ $t('feature.model') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.eco') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('feature.choose') }}
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
    <div id="implement" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <div class="other-center-span wow fadeInUp">
            <strong class="other-center-strong">{{
              $t('feature.business')
            }}</strong>
            {{ $t('feature.tokens') }}
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
                  <i class="el-iconfont iconfont el-a-024"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.economy') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.gas') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.transactions') }}
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
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.expansion') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.based') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.use') }}
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
    <div id="refBottom" class="media-a high-bottom">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4 wow fadeInUp">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
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
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.multi') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.dec') }}</p>
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
                  <i class="el-iconfont iconfont el-a-003"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.private') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.fouds') }}</p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
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
          label: 'feature.ecology',
          name: 'first',
          img: img1
        },
        {
          label: 'feature.governance',
          name: 'second',
          img: img2
        }
      ],
      refBottom: ''
    };
  },
  head() {
    return {
      title: `${this.$t('nav.self')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,DAO,GAS,ecoLib'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('nav.self')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('nav.self')}`
        }
      ],
      numImplement: 0,
      numBottom: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  beforeDestroy() {
    this.domGlobal.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$nextTick(() => {
      this.numArchite =
        document.getElementById('implement').getBoundingClientRect().bottom -
        105;
      console.log(this.numArchite);
      this.numArchiteBottom =
        document.getElementById('refBottom').getBoundingClientRect().bottom -
        105;
      if (this.numArchite) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handleAlwaysScroll, 250);
        });
      }
    });
  },
  methods: {
    handleAlwaysScroll() {
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
