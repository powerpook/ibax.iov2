<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-24 17:20:55
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="18">
              <h6 class="global-h6 animated fadeInUp">
                {{ $t('solutions.financial') }}
              </h6>
              <h2 class="bass-h2 animated fadeInUp">
                {{ $t('solutions.supply') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('solutions.service') }}
              </p>
              <p class="home-new-bottom animated fadeInUp">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('solutions.watch') }}</a
                >
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-default"
                  >{{ $t('nav.sign') }}</a
                >
              </p>
            </el-col>
            <!-- <el-col :xs="23" :lg="12">
              <div class="home-new-img">
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/hero-retention.png"
                  mode="powerful"
                />
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('solutions.issuance') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('solutions.early') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                {{ $t('solutions.destruction') }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-title-text">
                  {{ $t('solutions.digital') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">
                {{ $t('solutions.issuance') }}
              </h2>
              <p class="wow fadeInUp">
                {{ $t('solutions.credit') }}
              </p>
              <div class="home-new-bottom link wow fadeInUp">
                <span> {{ $t('home.using') }}</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/retention-img01.png"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="fully" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-technicaldomains_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-technicaldomains"></i>
            <i v-if="lang === 'tw'" class="iconfont el-technicaldomains_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <span class="other-center-strong">
              {{ $t('solutions.fully') }}
            </span>
            <span> {{ $t('solutions.build') }}</span>
          </div>
          <!--   <div class="global-h6">Stuart Nichols</div>
          <div class="global-h6">IBAX CEO</div> -->
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="12">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/funnel-analysis.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    {{ $t('solutions.flexible') }}</span
                  >
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('solutions.early') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('solutions.suppliers') }}
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="assist" class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('solutions.assist') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('solutions.destruction') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('solutions.after') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="12">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/retention-img03.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime" :obj="obj">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a class="btn btn-primary"> {{ $t('solutions.demo') }}</a>
          <a class="btn btn-default"> {{ $t('nav.sign') }}</a>
        </div>
      </template>
    </page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      obj: {
        title: 'footer.create',
        label: 'footer.blockchain',
        text: 'footer.check',
        path: 'https://github.com/IBAX-io/documentation'
      }
    };
  },
  head() {
    return {
      title: `${this.$t('solutions.supply')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,SupplyChainFinance'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('solutions.supply')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('solutions.supply')}`
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
        document.getElementById('fully').getBoundingClientRect().bottom - 105;
      console.log(this.numArchite);
      this.numArchiteBottom =
        document.getElementById('assist').getBoundingClientRect().bottom - 105;
      if (this.numArchite) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handleAlwaysScroll, 100);
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
