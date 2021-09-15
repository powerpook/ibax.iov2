<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-15 15:43:27
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="12">
              <h6 class="global-h6 animated fadeInUp">{{ $t('bass.off') }}</h6>
              <h2 class="bass-h2 animated fadeInUp">{{ $t('bass.closed') }}</h2>
              <p class="home-new-p animated fadeInUp">{{ $t('bass.order') }}</p>
              <p class="home-new-p animated fadeInUp">{{ $t('bass.also') }}</p>
              <p class="home-new-bottom animated fadeInUp">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="home-new-img animated fadeInUp">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="6">
              <div class="other-ease wow fadeInUp">{{ $t('bass.in') }}</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease wow fadeInUp">
                {{ $t('bass.choices') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease wow fadeInUp">
                {{ $t('bass.support') }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title wow fadeInUp">
            <i class="el-iconfont iconfont el-a-054"></i>
            <span class="home-new-title-text">
              {{ $t('bass.diversification') }}
            </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.refer') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('bass.weather') }}
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
    <div class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="12">
          <div class="global-h6 wow fadeInUp">
            {{ $t('bass.effectiveness') }}
          </div>
          <div class="global-h6 wow fadeInUp">
            <span class="other-center-strong">{{ $t('bass.blockchain') }}</span>
            <!--  <span>{{ $t('high.never') }}</span> -->
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
                    {{ $t('bass.light') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.rapid') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.there') }}
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
                    {{ $t('bass.en') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.with') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.when') }}
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
    <div class="media-a high-bottom">
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
                  {{ $t('nav.security') }}
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
          label: 'bass.oper',
          name: 'first',
          img: img1
        },
        {
          label: 'bass.on',
          name: 'second',
          img: img2
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.clb')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,CLB,HybridSmartContracts'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('nav.clb')}-IBAX`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('nav.clb')}-IBAX`
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
