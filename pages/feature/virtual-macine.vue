<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-15 19:02:01
 * @Description: virtual macine
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
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
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="6">
              <div class="other-ease animated fadeInUp">
                {{ $t('high.most') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease animated fadeInUp">
                {{ $t('high.one') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease animated fadeInUp">
                {{ $t('high.contract') }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <p class="home-new-title">
                <i class="el-iconfont iconfont el-a-042"></i>
                <span class="home-new-title-text"
                  >{{ $t('high.editor') }}
                </span>
              </p>
              <h2 class="bass-h2">{{ $t('high.simple') }}</h2>
              <p>
                {{ $t('home.system') }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="home-new-img">
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
    <div class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="12">
          <div class="global-h6">
            <img
              v-if="lang === 'en'"
              src="@/assets/icons/viewpoint.svg"
              alt="viewpoint_es"
            />
            <img
              v-if="lang === 'zh'"
              src="@/assets/icons/viewpoint_zh.svg"
              alt="viewpoint_es"
            />
            <img
              v-if="lang === 'tw'"
              src="@/assets/icons/viewpoint_tw.svg"
              alt="viewpoint_es"
            />
          </div>
          <div class="other-center-span wow fadeInUp">
            <strong class="other-center-strong">{{ $t('bass.spire') }}</strong>
            {{ $t('high.very') }}
          </div>
          <div class="global-h6">Simon Hemmrich</div>
          <div class="global-h6">Senior Consultant</div>
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-051"></i>
                  <span class="home-new-title-text">
                    {{ $t('high.cont') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('high.from') }}</h2>
                <p>
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-043"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.manager') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('bass.panel') }}</h2>
                <p>
                  {{ $t('bass.provides') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-tag">
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
    <div class="media-a high-bottom">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('high.lead') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.each') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/architecture"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-001"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('high.cross-chain') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.decen') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
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
  computed: {
    lang() {
      return this.$store.getters.handdleLang;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
