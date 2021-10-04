<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-28 12:17:48
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new" style="margin-top: 30px">
          <p class="home-new-title-text animated fadeInUp">
            {{ $t('high.technical') }}
          </p>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="18">
              <h2 class="bass-h2 animated fadeInUp">{{ $t('high.chain') }}</h2>
              <p class="home-new-p animated fadeInUp">{{ $t('high.low') }}</p>
              <p class="home-new-bottom animated fadeIn">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <!-- <el-col :xs="23" :lg="6">
              <div
                class="home-new-img animated fadeIn"
                style="animation-duration: 3s"
              >
                <img src="@/assets/image/diamond.svg" mode="powerful" />
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
                  {{ $t('high.globalization') }}
                </div>
                <div>{{ $t('high.to') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">{{ $t('high.compat') }}</div>
                <div>{{ $t('high.rich') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                <div class="other-easeplus-strong">{{ $t('high.use') }}</div>
                <div>{{ $t('high.provide') }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-title-text">
                  {{ $t('high.innovation') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">{{ $t('high.database') }}</h2>
              <p class="wow fadeInUp">{{ $t('high.postgreSQL') }}</p>
            </el-col>
            <el-col :xs="23" :lg="12">
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
    <div id="archite" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-techinsights_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-techinsights"></i>
            <i v-if="lang === 'tw'" class="iconfont el-techinsights_zh"></i>
          </div>
          <!--  <div class="global-h6 wow fadeInUp">
            {{ $t('high.insights') }}
          </div> -->
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">{{
              $t('high.team')
            }}</strong>
            <span>{{ $t('high.never') }}</span>
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Stuart Nichols</strong>
            <span class="other-center-bottom-text">IBAX CEO</span>
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
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    {{ $t('high.high') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('high.storage') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.high') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('feature.we') }}
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
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.hor') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.honor') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('feature.any') }}
                </p>
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
    <div class="mdeia media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <p
            class="home-new-title wow fadeInUp"
            style="justify-content: center"
          >
            <i class="el-iconfont iconfont el-a-035"></i>
            <span class="home-new-title-text"> {{ $t('feature.node') }} </span>
          </p>
          <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.guard') }}</h2>
          <p class="wow fadeInUp">
            {{ $t('feature.as') }}
          </p>
          <p class="wow fadeInUp">
            {{ $t('feature.ecological') }}
          </p>
          <div class="media-a-img wow fadeInUp">
            <img
              src="../../assets/image/retention-report-1.png"
              alt="retention-report-1"
            />
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
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('feature.casting') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('high.etc') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('high.reward') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('high.running') }}
                </p>
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
          <div class="home-new wow fadeInUp">
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
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('high.sub') }}</h2>
                <p class="wow fadeInUp">{{ $t('high.node') }}</p>
                <p class="wow fadeInUp">{{ $t('high.can') }}</p>
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
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('nav.cross') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('high.of') }}
                </p>
                <p class="wow fadeInUp">{{ $t('high.runs') }}</p>
                <p class="wow fadeInUp">{{ $t('high.meet') }}</p>
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
    <div id="architeBottom" class="media-a high-bottom">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4 wow fadeInUp">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-007"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.tran') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">
                  {{ $t('high.divides') }}
                </p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/sharding"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-042"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.multi') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.dec') }}</p>
                <nuxt-link class="high-bottom-more link" to="/feature/multisig">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-056"></i>
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
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  head() {
    return {
      title: `${this.$t('nav.high')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BaaS,Mining,PostgreSQL, Honor Node,Guardian Node,Mint Node,Sub Nodes, CLB (CROSS LEDGERS BASE),Smart contracts,ecoLib,ecoGroup, Weaver'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('nav.high')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('nav.high')}`
        }
      ],
      numArchite: 0,
      numArchiteBottom: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.numArchite =
        document.getElementById('archite').getBoundingClientRect().bottom - 105;
      console.log(this.numArchite);
      this.numArchiteBottom =
        document.getElementById('architeBottom').getBoundingClientRect()
          .bottom - 105;
      if (this.numArchite) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handleArchiteScroll, 250);
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
