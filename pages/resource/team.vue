<!--
 * @Author: abc
 * @Date: 2021-08-24 16:15:10
 * @LastEditors: abc
 * @LastEditTime: 2021-09-15 14:59:43
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
            <!-- <strong class="block-title lg">Our mission</strong> -->
            <h1>
              {{ $t('resource.technical') }}<br />
              <strong> {{ $t('resource.committed') }}</strong>
            </h1>
            <ul class="customers-list">
              <li v-for="(item, index) in arrPatter" :key="index">
                <img :src="item.img" class="attachment-medium" />
              </li>
            </ul>
            <a
              href="https://github.com/IBAX-io/go-ibax/issues"
              target="_blank"
              class="home-new-bottom link"
            >
              <span>{{ $t('resource.know') }}</span>
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
              {{ $t('resource.composed') }}
            </p>
            <p>
              {{ $t('resource.needs') }}
            </p>
          </div>
          <div class="team-fixed-box">
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>{{ $t('resourse.hundreds') }}</strong>
                  <div>{{ $t('resourse.r') }}</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>{{ $t('resourse.chain') }}</strong>
                  <div>{{ $t('resourse.underlying') }}</div>
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
                  <strong>{{ $t('resourse.items') }}</strong>
                  <div>{{ $t('resourse.leading') }}</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>{{ $t('resourse.application') }}</strong>
                  <div>{{ $t('resourse.system') }}</div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="inner">
                  <strong>{{ $t('resourse.machine') }}</strong>
                  <div>{{ $t('resourse.languages') }}</div>
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
      <h3>{{ $t('resourse.still') }}</h3>
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
        <div v-else class="team-loop-no">{{ $t('resourse.no') }}</div>
      </div>
      <div>
        <a
          href="https://github.com/orgs/IBAX-io/people"
          target="_blank"
          class="btn btn-primary"
          >{{ $t('resourse.view') }}</a
        >
      </div>
    </div>
    <div class="team-leader">
      <div class="team-leader-top">
        <h2 class="h1">{{ $t('resourse.person') }}</h2>
        <p>
          {{ $t('resourse.charge') }}
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
    <div class="team-bod">
      <div class="container">
        <h3>{{ $t('resourse.senior') }}</h3>
        <ul class="investors-bod-list">
          <li v-for="item in arrBod" :key="item.alt">
            <div class="avatar-wrap">
              <img :src="item.img" class="attachment-full" :alt="item.alt" />
            </div>
            <div class="info-wrap">
              <strong class="name">{{ item.name }}</strong>
              <strong class="post">{{ $t(item.introduce) }}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="team-serving">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="team-serving-header">
            <h3>{{ $t('resourse.from') }}</h3>
          </div>
          <el-row type="flex" justify="center" style="flex-flow: wrap">
            <el-col
              v-for="item in arrTeam"
              :key="item.name"
              :xs="23"
              :sm="12"
              :md="8"
              :lg="7"
            >
              <div class="team-serving-content">
                <div class="team-serving-content-img">
                  <img
                    :src="item.img"
                    class="attachment-medium"
                    alt="item.name"
                  />
                </div>
                <strong class="place">{{ item.name }}</strong>
                <div class="team-serving-content-text">
                  {{ item.label }}<br />
                  {{ $t(item.des) }}
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
const adviser1 = require('../../assets/image/avatars/adviser-1.png');
const adviser2 = require('../../assets/image/avatars/adviser-2.png');
const adviser3 = require('../../assets/image/avatars/adviser-3.png');
const member1 = require('../../assets/image/avatars/member-1.png');
const member2 = require('../../assets/image/avatars/member-2.png');
const member3 = require('../../assets/image/avatars/member-3.png');
const member4 = require('../../assets/image/avatars/member-4.png');
const member5 = require('../../assets/image/avatars/member-5.png');
const member6 = require('../../assets/image/avatars/member-6.png');
const member7 = require('../../assets/image/avatars/member-7.png');
const member8 = require('../../assets/image/avatars/member-8.png');
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
      arrTeam: [
        {
          img: member1,
          name: 'Scotland',
          label: 'Clifford G.Gordon',
          des: 'resourse.developer'
        },
        {
          img: member2,
          name: 'Singapore',
          label: 'Leslie J. Otero',
          des: 'resourse.designer'
        },
        {
          img: member3,
          name: 'Australia',
          label: 'Leslie J. Otero',
          des: 'resourse.soon'
        },
        {
          img: member4,
          name: 'Chen Ren',
          label: 'Singapore',
          des: 'resourse.joined'
        },
        {
          img: member5,
          name: 'US',
          label: 'Harold R. Johansson',
          des: 'resourse.responsible'
        },
        {
          img: member6,
          name: 'US',
          label: 'Nathan Conley',
          des: 'resourse.hum'
        },
        {
          img: member7,
          name: 'Italy',
          label: 'Alberto Angelo',
          des: 'resourse.our'
        },
        {
          img: member8,
          name: 'US',
          label: 'Rebecca J. Bourquin',
          des: 'resourse.administrative'
        }
      ],
      arrBod: [
        {
          img: adviser1,
          alt: 'adviser-1',
          name: 'Scotland',
          introduce: 'Professor(Institut polytechnique de Paris)'
        },
        {
          img: adviser2,
          alt: 'adviser-2',
          name: 'Rakib Sajid',
          introduce: 'resourse.doctor'
        },
        {
          img: adviser3,
          alt: 'adviser-3',
          name: 'Priscilla Wang ',
          introduce: 'resourse.affairs'
        }
      ],
      arrPatter: [
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/logo-docusign-1.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-uber.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/logo-rakuten-viber-white.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-twitter.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/sweetgreen-2.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/expedia.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/ziprecruiter-logo-small.svg'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/ziprecruiter-logo-small.svg'
        }
      ],
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
        step: 1,
        // limitMoveNum: 11,
        hoverStop: true,
        direction: 2, // 0-dwon 1-up 2-left 3-right
        openWatch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 10
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
      const { data } = await this.$axios.get(url);
      this.iconList = data;
      console.log(JSON.stringify(this.iconList));
    }
  }
};
</script>
