<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-15 19:23:48
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="18">
              <h6 class="global-h6">{{ $t('high.cross') }}</h6>
              <h2 class="bass-h2">{{ $t('bass.expand') }}</h2>
              <p class="home-new-p">
                {{ $t('bass.cross') }}
              </p>
              <p class="home-new-bottom">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <!--  <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="6">
              <div class="other-ease">{{ $t('bass.protect') }}</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">{{ $t('bass.ensure') }}</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">{{ $t('bass.network') }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-056"></i>
            <span class="home-new-title-text">
              {{ $t('bass.transmission') }}
            </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">{{ $t('bass.promote') }}</h2>
              <p>
                {{ $t('bass.sets') }}
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
          <div class="global-h6 wow fadeInUp">
            {{ $t('bass.effectiveness') }}
          </div>
          <div class="other-center-span wow fadeInUp">
            <strong class="other-center-strong">{{ $t('bass.always') }}</strong>
            {{ $t('bass.only') }}
          </div>
          <div class="global-h6 wow fadeInUp">Simon Hemmrich</div>
          <div class="global-h6 wow fadeInUp">Senior Consultant</div>
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
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.safety') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('bass.solid') }}</h2>
                <p>
                  {{ $t('bass.clb') }}
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
                  <i class="el-iconfont iconfont el-a-024"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.flexible') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('bass.onecreate') }}</h2>
                <p>
                  {{ $t('bass.decentralized') }}
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
                  <i class="el-iconfont iconfont el-a-056"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.clb') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.basis') }}</p>
                <p class="high-bottom-more link">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </p>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-003"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.private') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.fouds') }}</p>
                <p class="high-bottom-more link">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </p>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('high.lead') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.each') }}</p>
                <p class="high-bottom-more link">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </p>
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
          label: 'bass.interaction',
          name: 'first',
          img: img1
        },
        {
          label: 'bass.asset',
          name: 'second',
          img: img2
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('high.cross-chain')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,NFT'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('high.cross-chain')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('high.cross-chain')}`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
