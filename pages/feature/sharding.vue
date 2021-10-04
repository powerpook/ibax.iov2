<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-10-04 22:43:00
 * @Description: sharding
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="18">
              <h6 class="global-h6 animated fadeInUp">
                {{ $t('high.technical') }}
              </h6>
              <h2 class="bass-h2 animated fadeInUp">
                {{ $t('bass.improve') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('bass.transaction') }}
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
              <div class="home-new-img">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('bass.registered') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('bass.sharding') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                {{ $t('bass.shards') }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-049"></i>
                <span class="home-new-title-text"> {{ $t('bass.work') }} </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.prove') }}</h2>
              <p>
                {{ $t('bass.global') }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="@/assets/images/fragmentation.png"
                  alt="fragmentation"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="solve" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <span class="other-center-box-strong">{{ $t('bass.solve') }}</span>
            <span>{{ $t('bass.thinking') }}</span>
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
                    src="@/assets/images/transaction.png"
                    alt="transaction"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-007"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.actions') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.not') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.whether') }}
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
                  <i class="el-iconfont iconfont el-a-031"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.same') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.controls') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.principle') }}
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
    <div id="multi" class="media-a high-bottom">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4 wow fadeInUp">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-031"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.multi') }}
                </h4>
                <p class="high-bottom-h6">{{ $t('nav.dec') }}</p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/multisig"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-038"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.with') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.smart') }}</p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/virtual-macine"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-010"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.security') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">
                  {{ $t('feature.encryption') }}
                </p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/security-privacy"
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
const img1 = require('../../assets/images/chain-1.png');
const img2 = require('../../assets/images/chain-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'bass.honor',
          name: 'first',
          img: img1
        },
        {
          label: 'nav.tran',
          name: 'second',
          img: img2
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.tran')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain BaaS,Mining,Sharding'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('nav.tran')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('nav.tran')}`
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
        document.getElementById('solve').getBoundingClientRect().bottom - 105;
      console.log(this.numArchite);
      this.numArchiteBottom =
        document.getElementById('multi').getBoundingClientRect().bottom - 105;
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
