<!--
 * @Author: abc
 * @Date: 2021-08-16 11:14:27
 * @LastEditors: abc
 * @LastEditTime: 2021-09-08 15:11:29
 * @Description: home
-->
<template>
  <div class="home">
    <div class="home-main">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="home-top">
            <h1 class="global-h1">{{ $t('home.start') }}</h1>
            <p class="p-lead">{{ $t('home.performance') }}</p>
            <div class="home-top-btn">
              <a
                href="https://weaver.ibax.io/"
                target="_blank"
                class="btn btn-primary"
                >{{ $t('home.using') }}</a
              >
              <nuxt-link
                to="/resource/video-resources"
                class="btn btn-default"
                >{{ $t('home.watch') }}</nuxt-link
              >
            </div>
          </div>
          <div class="home-picture">
            <img src="../assets/image/picture.png" alt="picture" />
          </div>
          <div class="home-team" style="display: none">
            <el-row type="flex" justify="center">
              <el-col :xs="23" :sm="22" :md="20" :lg="18">
                <h5 class="bass-h5">{{ $t('home.partners') }}</h5>
                <ul class="customers-list">
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/logo-docusign-1.svg"
                      class="attachment-medium"
                      alt="logo-docusign-1"
                      width="134"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-uber.svg"
                      class="attachment-medium"
                      alt="logo-uber"
                      width="80"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/logo-rakuten-viber-white.svg"
                      class="attachment-medium"
                      alt="logo-rakuten-viber-white"
                      width="171"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-twitter.svg"
                      class="attachment-medium"
                      alt="logo-twitter"
                      width="46"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/sweetgreen-2.svg"
                      class="attachment-medium"
                      alt="sweetgreen"
                      width="160"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-lemonade.svg"
                      class="attachment-medium"
                      alt="logo-lemonade"
                      width="142"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/expedia.svg"
                      class="attachment-medium"
                      alt="expedia"
                      width="124"
                    />
                  </li>
                  <li>
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/ziprecruiter-logo-small.svg"
                      class="attachment-medium"
                      alt="ziprecruiter-logo-small"
                      width="151"
                    />
                  </li>
                </ul>
                <!--  <a
                      href="https://github.com/IBAX-io/go-ibax/issues"
                      target="_blank"
                      class="home-new-bottom link"
                    >
                      <span>了解我们的合作伙伴</span>
                      <i class="el-icon-right"></i>
                    </a> -->
              </el-col>
            </el-row>
          </div>
          <div class="home-new">
            <p class="subtitle">{{ $t('home.innovate') }}</p>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="12">
                <h2 class="bass-h2">{{ $t('home.framework') }}</h2>
                <p>{{ $t('home.bottom') }}</p>
              </el-col>
              <el-col :xs="23" :lg="6">
                <div class="home-new-img">
                  <img src="@/assets/image/diamond.svg" mode="powerful" />
                </div>
              </el-col>
            </el-row>
            <nuxt-link to="/feature/architecture" class="home-new-bottom link">
              <span>{{ $t('home.learn') }}</span>
              <i class="el-icon-right"></i>
            </nuxt-link>
          </div>
          <div class="home-new">
            <p class="home-new-title">
              <i class="el-iconfont iconfont el-a-038"></i>
              <span class="home-new-title-text">
                {{ $t('home.virtual') }}
              </span>
            </p>
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h2 class="bass-h2">{{ $t('home.machine') }}</h2>
                <p>{{ $t('home.can') }}</p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../assets/image/img-insights-report2.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="home-new">
            <p class="home-new-title">
              <i class="el-iconfont iconfont el-a-028"></i>
              <span class="home-new-title-text">
                {{ $t('home.consensus') }}
              </span>
            </p>
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h2 class="bass-h2">{{ $t('home.dpoa') }}</h2>
                <p>{{ $t('home.good') }}</p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../assets/image/img-funnels-report-2.png"
                    mode="img-funnels-report-2"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="home-new">
            <p class="home-new-title">
              <i class="el-iconfont iconfont el-a-036"></i>
              <span class="home-new-title-text">
                {{ $t('home.bifurcation') }}
              </span>
            </p>
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h2 class="bass-h2">{{ $t('home.honor') }}</h2>
                <p>{{ $t('home.unified') }}</p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../assets/image/img-retention-report-2.png"
                    mode="img-retention-report-2"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="home-new">
            <p class="subtitle">{{ $t('home.economics') }}</p>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="12">
                <h2 class="bass-h2">
                  {{ $t('home.benefits') }}
                </h2>
                <p>
                  {{ $t('home.matter') }}
                </p>
                <a
                  href="https://ibax.io/IBAX_Public_Network_Whitepaper_V1.1.pdf"
                  target="_blank"
                  class="home-new-bottom link"
                >
                  <span>{{ $t('home.pub') }}</span>
                  <i class="el-icon-right"></i>
                </a>
              </el-col>
              <el-col :xs="23" :lg="6">
                <div class="home-new-img">
                  <img src="../assets/image/Simple.svg" mode="powerful" />
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="home-tag">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="12">
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
              </el-col>
              <el-col :xs="23" :lg="4">
                <template v-for="item in arrText">
                  <div
                    :key="item.name"
                    class="home-tag-item"
                    :class="{
                      'home-tag-item-active': item.name === activeName
                    }"
                    @click="handleTagClick(item)"
                  >
                    {{ $t(item.label) }}
                  </div>
                </template>
              </el-col>
            </el-row>
          </div>
          <div class="home-new">
            <p class="subtitle">{{ $t('home.lead') }}</p>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="18">
                <h2 class="bass-h2">{{ $t('home.driven') }}</h2>
                <p class="global-h6">{{ $t('home.chain') }}</p>
              </el-col>
              <el-col :xs="23" :lg="4">
                <div class="home-new-img">
                  <img src="../assets/image/connect.svg" mode="connect" />
                </div>
              </el-col>
            </el-row>
            <nuxt-link to="/feature/cross-chain" class="home-new-bottom link">
              <span>{{ $t('home.we') }}</span>
              <i class="el-icon-right"></i>
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="home-loop">
      <h6 class="global-h4">{{ $t('home.have') }}</h6>
      <div class="home-loop-content">
        <client-only>
          <vue-seamless-scroll
            :data="iconList"
            :class-option="optionLeft"
            class="home-loop-content-scroll"
          >
            <ul class="ul-scoll">
              <li v-for="(item, index) in iconList" :key="index">
                <div class="ul-scoll-img">
                  <i class="iconfont" :class="item.icon"></i>
                </div>
              </li>
            </ul>
          </vue-seamless-scroll>
        </client-only>
      </div>
      <div class="home-p5">
        <client-only>
          <vue-p5 @setup="setup" @draw="draw"></vue-p5>
        </client-only>
      </div>
      <div class="home-appeared">
        <h1>{{ $t('home.your') }}</h1>
        <div class="home-appeared-box">
          <ul class="home-appeared-item">
            <li>
              <i class="iconfont el-huaban24"></i
              ><span>{{ $t('home.get') }}</span>
            </li>
            <li>
              <i class="iconfont el-huaban24"></i
              ><span>{{ $t('home.manul') }}</span>
            </li>
            <li>
              <i class="iconfont el-huaban24"></i
              ><span>{{ $t('home.enjoy') }}</span>
            </li>
          </ul>
        </div>
        <div class="home-top-btn">
          <a
            href="https://weaver.ibax.io/"
            target="_blank"
            class="btn btn-primary"
            >{{ $t('home.using') }}</a
          >
        </div>
      </div>
    </div>
    <div ref="empty" class="home-empty"></div>
    <div ref="story" class="home-story">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <p class="subtitle">{{ $t('home.partner') }}</p>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="8">
              <h3 class="global-h3">{{ $t('home.ibaa') }}</h3>
              <li class="home-story-text-li">
                {{ $t('home.official') }}
              </li>
              <li class="home-story-text-li">
                {{ $t('home.supports') }}
              </li>
              <li class="home-story-text-li">
                {{ $t('home.manage') }}
              </li>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="../assets/image/device-494x1024.png" mode="connect" />
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <p class="global-h6 home-story-title">
                {{ $t('home.wallet') }}
              </p>
              <p class="home-story-right">
                {{ $t('home.very') }}
              </p>
              <p class="home-story-right">
                {{ $t('home.is') }}
              </p>
              <p class="home-story-right">
                {{ $t('home.more') }}
              </p>
              <p class="home-story-right">
                {{ $t('home.there') }}
              </p>
              <div class="global-h6 home-story-text">
                <div class="home-story-text-img">
                  <img src="../assets/image/avatar.jpg" alt="avatar" />
                </div>
                <div class="home-story-text-name">
                  <div>
                    {{ $t('home.name') }}
                  </div>
                  <div>
                    {{ $t('home.product') }}
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- develop -->
    <div class="home-product">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h6 class="bass-h2">{{ $t('home.develop') }}</h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="home-new-img">
                <img src="@/assets/image/gtpmthumbzhhant.png" alt="" />
              </div>
              <div class="home-story-text">
                <i class="iconfont el-technology1"></i>
                <strong>{{ $t('home.technology') }}</strong>
              </div>
              <h4 class="home-story-text-h4">{{ $t('home.technical') }}</h4>
              <a
                href="https://github.com/IBAX-io/documentation"
                target="_blank"
                class="home-new-bottom link"
              >
                <span>{{ $t('home.go') }}</span>
                <i class="el-icon-right"></i>
              </a>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="home-new-img">
                <img src="@/assets/image/gtpmthumbzhhant.png" alt="" />
              </div>
              <div class="home-story-text">
                <i class="iconfont el-video"></i>
                <strong>{{ $t('home.video') }}</strong>
              </div>
              <h4 class="home-story-text-h4">{{ $t('home.about') }}</h4>
              <nuxt-link
                to="/resource/video-resources"
                class="home-new-bottom link"
              >
                <span>{{ $t('home.m') }}</span>
                <i class="el-icon-right"></i>
              </nuxt-link>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="home-new-img">
                <img src="@/assets/image/gtpmthumbzhhant.png" alt="" />
              </div>
              <div class="home-story-text">
                <i class="iconfont el-activity"></i>
                <strong>{{ $t('home.activity') }}</strong>
              </div>
              <h4 class="home-story-text-h4">{{ $t('home.exciting') }}</h4>
              <nuxt-link to="/resource/events" class="home-new-bottom link">
                <span>{{ $t('home.award') }}</span>
                <i class="el-icon-right"></i>
              </nuxt-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/image/img-retention-report-2.png');
const img2 = require('../assets/image/img-funnels-report-2.png');
const img3 = require('../assets/image/img-insights-report2.png');
const amsLogo = require('../assets/logo/AWS_logo.svg');
const gineLogo = require('../assets/logo/TDengine_logo.svg');
const langLogo = require('../assets/logo/Golang_logo.svg');
const gologo = require('../assets/logo/Go_logo.svg');
const centrifugoLogo = require('../assets/logo/Centrifugo_logo.svg');
const cloudLogo = require('../assets/logo/Google_Cloud_logo.svg');
const algorithmLogo = require('../assets/logo/Encryption_Algorithm_logo.svg');
const protocolLogo = require('../assets/logo/UDP_protocol_logo.svg');
const postgreLogo = require('../assets/logo/postgreSQL_logo.svg');
export default {
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      boo: false,
      xSpacing: 20, // 每个水平位置的距离
      waveWidth: 0, // 波的宽度
      theta: 0.0, // 初始角度为 0
      amplitude: 80, // 波的高度
      period: 400, // 波在重复前的像素个数
      xWave: 0, // x 的增量
      arrWave: [], // 保存波的高度的数组
      helf: 0,
      color: 'rgba(243,172,52,0.5)',
      arrTags: [
        {
          label: 'home.fixed',
          name: 'first',
          img: img1
        },
        {
          label: 'home.mining',
          name: 'second',
          img: img2
        },
        {
          label: 'home.ecological',
          name: 'third',
          img: img3
        }
      ],
      arrText: [
        {
          label: 'home.all',
          name: 'first',
          img: img1
        },
        {
          label: 'home.per',
          name: 'second',
          img: img2
        },
        {
          label: 'home.mint',
          name: 'third',
          img: img3
        }
      ],
      optionLeft: {
        width: '100%',
        step: 1, // 数值越大速度滚动越快
        // limitMoveNum: 11, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 3, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 10 // 单步运动停止的时间(默认值1000ms)
      },
      iconList: [
        {
          icon: 'iconfont el-AWS_logo',
          img: amsLogo
        },
        {
          icon: 'iconfont el-TDengine_logo',
          img: gineLogo
        },
        {
          icon: 'iconfont el-Golang_logo',
          img: langLogo
        },
        {
          icon: 'iconfont el-Go_logo',
          img: gologo
        },
        {
          icon: 'iconfont el-Centrifugo_logo',
          img: centrifugoLogo
        },
        {
          icon: 'iconfont el-Google_Cloud_logo',
          img: cloudLogo
        },
        {
          icon: 'iconfont el-Encryption_Algorithm_logo',
          img: algorithmLogo
        },
        {
          icon: 'iconfont el-UDP_protocol_logo',
          img: protocolLogo
        },
        {
          icon: 'iconfont el-postgreSQL_logo',
          img: postgreLogo
        }
      ],
      domGlobal: '',
      emptyTop: '',
      domEmpty: '',
      domStory: '',
      back: '',
      offsetHeight: '',
      numMain: '',
      colorPrimary: '#f3ac34',
      colorLine: 'rgba(243,172,52,0.2)'
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.domEmpty = this.$refs.empty;
      this.domStory = this.$refs.story;
      this.offsetHeight = this.domStory.offsetHeight;
      this.domEmpty.style.height = this.offsetHeight + 'px';
      this.domGlobal = document.getElementById('global').firstChild;
      this.numMain = this.domEmpty.getBoundingClientRect().bottom;
      console.log(this.numMain);
      if (this.numMain) {
        this.domGlobal.addEventListener('scroll', this.handleScroll);
      }
    });
  },
  methods: {
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      if (scrollTop >= this.numMain) {
        this.domEmpty.style.position = 'fixed';
        this.domStory.style.position = 'static';
      } else {
        this.domEmpty.style.position = 'static';
        this.domStory.style.position = 'fixed';
      }
    },
    setup(sketch) {
      const width =
        document.documentElement.clientWidth || document.body.clientWidth;
      this.helf = width / 2;
      sketch.createCanvas(width, 500);
      this.waveWidth = sketch.width + 20;
      this.xWave = (sketch.TWO_PI / this.period) * this.xSpacing;
      this.arrWave = new Array(sketch.floor(this.waveWidth / this.xSpacing));
      const icon = sketch.createElement('i');
      icon.style('color', this.colorPrimary);
      // position the element
      icon.position(this.helf - 35, 393);
      icon.addClass('iconfont el-circle');
      console.log(icon);
    },
    draw(sk) {
      sk.background('#274235');
      this.calcWave(sk);
      this.renderWave(sk);
    },
    renderWave(sk) {
      sk.noStroke();
      sk.fill(this.colorPrimary);
      // 在波上的每个位置画椭圆
      for (let x = 0; x < this.arrWave.length; x++) {
        // eslint-disable-next-line prefer-const
        let arrWave = sk.height / 6 + this.arrWave[x];
        sk.ellipse(x * this.xSpacing, arrWave, 6, 6);
        sk.stroke(this.colorLine);
        sk.line(x * this.xSpacing, arrWave, this.helf, sk.height - 80);
      }
      /*  sk.fill('red');
      sk.circle(this.helf, sk.height - 45, 70, 70);
      sk.fill(0);
      sk.circle(this.helf - 20, sk.height - 45, 13, 13);
      sk.circle(this.helf, sk.height - 45, 10, 10);
      sk.circle(this.helf + 15, sk.height - 45, 5, 5); */
    },
    calcWave(sk) {
      // theta 增量（尝试赋予 ‘角速度’ 不同的数值）
      this.theta += 0.01;
      // 对于每一个 x 值，使用正弦函数计算 y 值
      let x = this.theta;
      for (let i = 0; i < this.arrWave.length; i++) {
        this.arrWave[i] = sk.sin(x) * this.amplitude;
        x += this.xWave;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleTagClick(obj) {
      console.log(obj);
      this.activeName = obj.name;
    }
  }
};
</script>
