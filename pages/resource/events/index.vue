<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-28 18:45:29
 * @Description: ecolibs
-->
<template>
  <div class="events">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="18">
              <h6 class="global-h6 animated fadeInUp">
                {{ $t('events.urge') }}
              </h6>
              <h3 class="global-h3 animated fadeInUp">
                {{ $t('events.center') }}
              </h3>
              <p class="home-new-p animated fadeInUp">
                {{ $t('events.new') }}
              </p>
            </el-col>
            <!--   <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="@/assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div clsss="bass-center">
      <div id="img" class="bass-center-img"></div>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Inside-MP-3.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <div class="events-test">
                  <strong class="events-test-title wow fadeInUp">{{
                    $t('events.online')
                  }}</strong>
                  <h4 class="title-h4 wow fadeInUp">
                    {{ $t('events.invited') }}
                  </h4>
                  <p>{{ $t('events.tasks') }}</p>
                  <p class="wow fadeInUp">
                    {{ $t('market.ideas') }}
                  </p>
                  <p class="wow fadeInUp">{{ $t('events.them') }}</p>
                  <p class="wow fadeInUp">{{ $t('events.manual') }}</p>
                  <ul class="events-list">
                    <li class="wow fadeInUp">
                      <div class="events-list-address">
                        <i class="iconfont el-dizhi"></i>
                        <strong>{{ $t('events.discord') }}</strong>
                      </div>
                      <a
                        href="https://discord.gg/zRX6Mwafya"
                        target="_blank"
                        class="link"
                      >
                        <span>{{ $t('events.join') }} </span>
                        <i class="el-icon-right"></i>
                      </a>
                    </li>
                    <li class="wow fadeInUp">
                      <div class="events-list-address">
                        <i class="iconfont el-dizhi"></i>
                        <strong>{{ $t('events.telegram') }}</strong>
                      </div>
                      <a
                        href="https://t.me/IBAXNetwork"
                        target="_blank"
                        class="link"
                      >
                        <span>{{ $t('events.join') }} </span>
                        <i class="el-icon-right"></i
                      ></a>
                    </li>
                    <li class="wow fadeInUp">
                      <div class="events-list-address">
                        <i class="iconfont el-dizhi"></i>
                        <strong>{{ $t('events.subscribe') }}</strong>
                      </div>
                      <a
                        href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
                        target="_blank"
                        class="link"
                      >
                        <span>{{ $t('events.join') }} </span>
                        <i class="el-icon-right"></i
                      ></a>
                    </li>
                  </ul>
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
          <div class="events-data">
            <div class="events-data-top">
              <strong class="events-test-title wow fadeInUp">{{
                $t('events.coming')
              }}</strong>
              <h2 class="title-h2 wow fadeInUp">
                {{ $t('events.next') }}
              </h2>
            </div>
            <div class="event-row" style="order: 0">
              <a
                href="https://mixpanel.com/webinars/grow/explore-the-dos-and-donts-of-rapid-scaling/"
              >
                <div class="col-l">
                  <span class="tag">Webinar</span>
                  <h5>
                    Going international: the do’s and don’ts of rapid scaling
                  </h5>
                  <div class="meta">
                    <div
                      class="time-col"
                      data-time-zone="Europe/London"
                      data-time-convert="2021-09-28T13:00:00"
                    >
                      <span class="date"
                        ><i class="iconfont el-xingzhuang"></i>
                        Sep 28, 2021
                      </span>
                      <span class="time">8:00 pm CST</span>
                    </div>
                    <div class="duration">
                      <i class="iconfont el-shizhongclock77"></i>
                      1 Hour
                    </div>
                  </div>
                </div>
                <div class="col-r">
                  <span class="btn btn-primary_bordered">Register</span>
                </div>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <!-- <page-bottom class="lime">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a
            href="https://weaver.ibax.io/"
            target="_blank"
            class="btn btn-primary"
            >{{ $t('footer.now') }}</a
          >
        </div>
      </template>
    </page-bottom> -->
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrHeading: [
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        }
      ],
      arrCase: [
        {
          url: 'https://github.com/orgs/IBAX-io/repositories',
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Preview-Image-1-2-1024x613.png',
          title: 'market.eco',
          content: 'market.based',
          small: 'market.download'
        },
        {
          url: 'https://weaver.ibax.io/',
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Preview-Image-1-2-1024x613.png',
          title: 'market.management',
          content: 'market.Weaver',
          small: 'home.using'
        },
        {
          url: 'https://weaver.ibax.io/',
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Preview-Image-1-2-1024x613.png',
          title: 'market.information',
          content: 'market.tool',
          small: 'market.learn'
        }
      ],
      secondParam: {
        where: {},
        limit: 10,
        type: 2,
        page: 1
      }
    };
  },
  head() {
    return {
      title: `${this.$t('home.ecological')}-IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,DAO,Token,contract,LowCode,Reward'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('home.ecological')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$t('home.ecological')}`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    const secondParam = this.secondParam;
    this.handleEventsfind(secondParam);
  },
  mounted() {
    this.$nextTick(() => {
      this.numArchite =
        document.getElementById('img').getBoundingClientRect().bottom - 105;
      console.log(this.numArchite);
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
      if (scrollTop >= this.numArchite) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    },
    async handleEventsfind(params) {
      console.log(params);
      const arrSecondEvents = await this.$axios.$post('/eventsfind', params);
      console.log(JSON.string(arrSecondEvents));
    }
  }
};
</script>
