<!--
 * @Author: abc
 * @Date: 2021-08-24 16:15:10
 * @LastEditors: abc
 * @LastEditTime: 2021-09-01 14:12:57
 * @Description: team
-->
<template>
  <div class="team">
    <div ref="container" class="parallax-container--over">
      <section
        id="parallax-container--top"
        class="about-us-hero"
        data-menu-theme="dark"
      >
        <el-row type="flex" justify="center">
          <el-col :xs="23" :sm="22" :md="20" :lg="18">
            <strong class="block-title lg">Our mission</strong>
            <h1>
              我们致力于技术研究<br />
              <strong>运用区块链技术改变社会现状</strong>
            </h1>
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
            <a
              href="https://github.com/IBAX-io/go-ibax/issues"
              target="_blank"
              class="home-new-bottom link"
            >
              <span>了解我们的合作伙伴</span>
              <i class="el-icon-right"></i>
            </a>
          </el-col>
        </el-row>
      </section>
    </div>
    <div ref="parallax" class="team-middle"></div>
    <div ref="fixed" class="team-fixed">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="header">
            <h3>Who we are</h3>
          </div>
          <div class="team-fixed-content">
            <p>
              IBAX
              是由一群来自全球各地热爱区块链技术的人组成，我们追求区块链技术的研究到实际的应用，不断探索区块链前沿知识。为所有认可加入我们的团队提供一个成熟稳定的区块链平台。
            </p>
            <p>
              技术需要为人类解决实际问题，我们希望通过区块链去中心化的理念打造一个去中心化自治的平台，你可以在这里购物、消费、出行等，做你想做的任何事情，无需担心数据泄露、资产安全、隐私问题，因为这些数据都将由你自己保管，自行授权。
            </p>
          </div>
          <div class="team-fixed-box">
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>上百人的</strong>
                  <div>研发团队</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>链</strong>
                  <div>区块链底层架构</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>3000</strong>
                  <div>TPS/S</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="team-fixed-box">
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>5项</strong>
                  <div>区块链领先技术</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>应用</strong>
                  <div>区块链BaaS系统</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>合约虚拟机</strong>
                  <div>兼容多种合约语言</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="team-rate">
      <div class="team-rate-icon">
        <i class="iconfont el-twitter"></i>
      </div>
      <h3>我们仍在创新突破</h3>
      <div class="team-loop">
        <div v-if="iconList.length" class="team-loop-content">
          <client-only>
            <vue-seamless-scroll
              :data="iconList"
              :class-option="optionLeft"
              class="team-loop-content-scroll"
            >
              <ul class="ul-scoll">
                <li v-for="item in iconList" :key="item.id">
                  <a :href="item.html_url">
                    <div class="team-loop-content-head">
                      <div class="team-loop-content-head-img">
                        <img :src="item.user.avatar_url" alt="avatar" />
                      </div>
                      <span class="team-loop-content-head-text">{{
                        item.user.login
                      }}</span>
                      <div class="team-loop-content-head-right">
                        <i class="iconfont el-GitHub"></i>
                      </div>
                    </div>
                    <div class="team-loop-content-title">{{ item.title }}</div>
                    <div v-if="item.body" class="team-loop-content-body">
                      {{ item.body }}
                    </div>
                  </a>
                </li>
              </ul>
            </vue-seamless-scroll>
          </client-only>
        </div>
        <div v-else class="team-loop-no">暂无数据</div>
      </div>
      <div>
        <a
          href="https://github.com/orgs/IBAX-io/people"
          target="_blank"
          class="btn btn-primary"
          >查看更多技术留言</a
        >
      </div>
    </div>
    <div class="team-leader">
      <div class="team-leader-top">
        <h2 class="h1">团队主要负责人</h2>
        <p>
          IBAX团队的每位负责人都是各领域非常杰出的人才，为IBAX做出了很多的贡献
        </p>
      </div>
      <div class="team-slick">
        <div class="team-slick-btn" style="display: none">
          <button class="team-slick-btn-item" @click="handleShowPre">
            <i class="el-icon-arrow-left"></i>
          </button>
          <button class="team-slick-btn-item" @click="handleShowNext">
            <i class="el-icon-arrow-right"></i>
          </button>
        </div>
        <el-row type="flex" justify="center">
          <el-col :xs="23" :sm="22" :md="20" :lg="18">
            <vue-slick-carousel
              v-bind="settings"
              ref="carousel"
              @afterChange="handleAfterChange"
            >
              <a
                v-for="(item, index) in arrPeople"
                :key="index"
                class="team-slick-item"
              >
                <div class="team-slick-item-img">
                  <img :src="item.img" :alt="item.img" />
                  <div>{{ item.name }}</div>
                  <div>{{ item.position }}</div>
                </div>
              </a>
            </vue-slick-carousel>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="team-serving">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="team-serving-header">
            <h3>来自于全球的技术团队</h3>
          </div>
          <el-row
            type="flex"
            justify="center"
            align="top"
            style="flex-flow: wrap"
          >
            <el-col v-for="i in 8" :key="i" :xs="23" :sm="12" :md="8" :lg="7">
              <div class="team-serving-content">
                <div class="inner">
                  <div class="img-wrap">
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/icon-san-francisco-1.svg"
                      class="attachment-medium"
                      alt="icon-san-francisco-1"
                    />
                  </div>
                  <strong class="place">San Francisco</strong>
                  <div>
                    One Front Street, 28th floor<br />
                    San Francisco, CA 94111
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
const ceo1 = require('../../assets/image/ceo-1.png');
const ceo2 = require('../../assets/image/ceo-2.png');
const ceo3 = require('../../assets/image/ceo-3.png');
export default {
  props: {},
  data() {
    return {
      settings: {
        dots: false,
        infinite: false,
        adaptiveHeight: true,
        initialSlide: 0,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
        // swipeToSlide: true
      },
      arrPeople: [
        {
          img: ceo1,
          name: 'Stuart Nichols',
          position: 'CEO'
        },
        {
          img: ceo2,
          name: 'Alan McIvor',
          position: 'COO'
        },
        {
          img: ceo3,
          name: 'Simon Hemmrich',
          position: 'Senior Consultant'
        }
      ],
      parallax: '',
      fixed: '',
      wScroll: 0,
      container: 0,
      domGlobal: '',
      optionLeft: {
        width: '100%',
        step: 1, // 数值越大速度滚动越快
        // limitMoveNum: 11, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 2, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 10 // 单步运动停止的时间(默认值1000ms)
      },
      iconList: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleGethubIssues();
  },
  mounted() {
    this.$nextTick(() => {
      this.fixed = this.$refs.fixed;
      console.log(this.fixed);
      this.parallax = this.$refs.parallax;
      console.log(this.parallax);
      this.container = this.$refs.container.scrollHeight + 140;
      console.log(this.container);
      this.wScroll = this.fixed.scrollHeight;
      this.parallax.style.height = this.wScroll + 'px';
      this.domGlobal = document.getElementById('global').firstChild;
      this.domGlobal.addEventListener('scroll', this.handleScroll);
    });
  },
  methods: {
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      //  console.log(scrollTop);
      // console.log(this.container);
      if (scrollTop >= this.container) {
        this.parallax.style.position = 'fixed';
        this.parallax.style.height = '0px';
        this.fixed.style.position = 'static';
      } else {
        this.parallax.style.position = 'static';
        this.parallax.style.height = this.wScroll + 'px';
        this.fixed.style.position = 'fixed';
      }
    },
    handleAfterChange(e) {
      console.log(e);
    },
    handleShowPre() {
      console.log(this.$refs.carousel);
      this.$refs.carousel.prev();
    },
    handleShowNext(e) {
      console.log(this.$refs.carousel);
      this.$refs.carousel.next();
    },
    async handleGethubIssues() {
      const url = 'https://api.github.com/repos/renleiabc/blockChain/issues';
      this.iconList = await this.$axios.get(url);
      // console.log(JSON.stringify(this.iconList));
    }
  }
};
</script>
