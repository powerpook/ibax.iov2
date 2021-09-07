<!--
 * @Author: abc
 * @Date: 2021-08-17 10:59:52
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 12:02:54
 * @Description: nav
-->
<template>
  <div class="nav">
    <div class="nav-index">
      <nuxt-link :to="{ name: 'index' }">
        <img src="../assets/image/logo-ib.svg" alt="logo" />
      </nuxt-link>
    </div>
    <el-menu
      :default-active="$route.path"
      router
      background-color="#274235"
      text-color="#fff"
      active-text-color="#fff"
      class="el-menu-nav"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="items in arrNav">
        <el-submenu v-if="items.children" :key="items.key" :index="items.path">
          <template slot="title">{{ $t(items.title) }}</template>
          <div class="nav-child">
            <div
              v-for="child in items.children"
              :key="child.key"
              class="nav-child-item"
            >
              <div v-if="child.title" class="nav-child-title">
                {{ $t(child.title) }}
              </div>
              <template v-for="item in child.content">
                <el-menu-item
                  v-if="item.path"
                  :key="item.key"
                  :index="item.path"
                  class="el-menu-nav-item"
                >
                  <div class="nav-child-item-content">
                    <div class="nav-child-item-content-img">
                      <i :class="item.icon"></i>
                    </div>
                    <div class="nav-child-item-content-title">
                      <div class="nav-child-item-content-title-text">
                        {{ $t(item.title) }}
                      </div>
                      <div
                        v-if="item.describe"
                        class="nav-child-item-content-title-text-small"
                      >
                        {{ $t(item.describe) }}
                      </div>
                    </div>
                  </div>
                </el-menu-item>
                <el-menu-item v-else :key="item.key" class="el-menu-nav-item">
                  <a
                    :href="item.link"
                    target="_blank"
                    class="nav-child-item-content"
                  >
                    <div class="nav-child-item-content-img">
                      <i :class="item.icon"></i>
                    </div>
                    <div class="nav-child-item-content-title">
                      <div class="nav-child-item-content-title-text">
                        {{ $t(item.title) }}
                      </div>
                    </div>
                  </a>
                </el-menu-item>
              </template>
            </div>
          </div>
        </el-submenu>
        <el-menu-item v-else :key="items.path" :index="items.path">
          {{ $t(items.title) }}
        </el-menu-item>
      </template>
    </el-menu>
    <div class="nav-right">
      <div class="nav-right-dropdown">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="../assets/image/translate.svg" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in arrLang"
              :key="item.lang"
              :command="item.lang"
            >
              {{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <nuxt-link :to="{ name: 'login' }" class="nav-link nav-link-middle">{{
        $t('nav.log')
      }}</nuxt-link>
      <nuxt-link :to="{ name: 'login-register' }" class="btn btn-primary">{{
        $t('nav.sign')
      }}</nuxt-link>
    </div>
  </div>
</template>
<script>
import { handleSaveCookie, handleGetLang } from '../assets/js/public.js';
export default {
  props: {},
  data() {
    return {
      activeIndex: '1',
      strLang: 'English',
      arrLang: [
        {
          label: 'English',
          lang: 'en'
        },
        {
          label: '简体中文',
          lang: 'zh'
        }
      ],
      arrNav: [
        /*  {
          title: 'nav.home',
          path: '/'
        }, */
        {
          title: 'nav.features',
          path: '/feature',
          key: '1',
          children: [
            {
              title: 'nav.performance',
              key: '1-1',
              content: [
                {
                  title: 'nav.high',
                  describe: 'nav.use',
                  icon: 'iconfont el-technology',
                  path: '/feature/architecture',
                  key: '1-1-1'
                },
                {
                  title: 'nav.virtual',
                  describe: 'nav.smart',
                  icon: 'iconfont el-private',
                  path: '/feature/virtual-macine',
                  key: '1-1-2'
                },
                {
                  title: 'nav.tran',
                  describe: 'nav.improve',
                  icon: 'iconfont el-elastic',
                  path: '/feature/sharding',
                  key: '1-1-3'
                },
                {
                  title: 'nav.security',
                  describe: 'nav.encryption',
                  icon: 'iconfont el-protection',
                  path: '/feature/security-privacy',
                  key: '1-1-4'
                }
              ]
            },
            {
              title: 'nav.break',
              key: '1-2',
              content: [
                {
                  title: 'nav.chain',
                  describe: 'nav.decen',
                  icon: 'iconfont el-cloud-computing',
                  path: '/feature/cross-chain',
                  key: '1-2-1'
                },
                {
                  title: 'nav.multi',
                  describe: 'nav.dec',
                  icon: 'iconfont el-algorithm',
                  path: '/feature/multisig',
                  key: '1-2-2'
                },
                {
                  title: 'nav.cross',
                  describe: 'nav.basis',
                  icon: 'iconfont el-transfer',
                  path: '/feature/clb',
                  key: '1-2-3'
                },
                {
                  title: 'nav.private',
                  describe: 'nav.fouds',
                  icon: 'iconfont el-private',
                  path: '/feature/privite-transaction',
                  key: '1-2-4'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.bass',
          path: '/bass-markeplace',
          key: '2'
        },
        {
          title: 'nav.resource',
          path: '/resource',
          key: '3',
          children: [
            {
              title: 'resource.project',
              key: '3-1',
              content: [
                {
                  title: 'resource.team',
                  icon: 'iconfont el-a-teamintroduction',
                  path: '/resource/team',
                  key: '3-1-1'
                },
                {
                  title: 'resource.white',
                  icon: 'iconfont el-whitepaper',
                  //  path: '/resource/white-paper',
                  link: 'https://ibax.io/IBAX_Public_Network_Whitepaper_V1.1.pdf',
                  key: '3-1-2'
                },
                {
                  title: 'resource.video',
                  icon: 'iconfont el-a-Videoresource',
                  path: '/resource/video-resources',
                  key: '3-1-3'
                },
                {
                  title: 'resource.document',
                  icon: 'iconfont el-document',
                  // path: '/resource/document',
                  link: 'https://github.com/IBAX-io/documentation',
                  key: '3-1-4'
                }
              ]
            },
            {
              title: 'resource.external',
              key: '3-2',
              content: [
                {
                  title: 'resource.news',
                  icon: 'iconfont el-news',
                  path: '/resource/news',
                  key: '3-2-1'
                },
                /* {
                  title: 'resource.economic',
                  icon: 'iconfont el-algorithm',
                  path: '/resource/economic-model',
                  alt: 'resource.economic'
                }, */
                {
                  title: 'resource.community',
                  icon: 'iconfont el-a-communityexchange',
                  // path: '/resource/community',
                  link: 'https://github.com/orgs/IBAX-io/people',
                  key: '3-2-2'
                },
                {
                  title: 'resource.download',
                  icon: 'iconfont el-Download',
                  //  path: '/resource/download',
                  link: 'https://github.com/orgs/IBAX-io/repositories',
                  key: '3-2-3'
                }
              ]
            },
            {
              title: 'resource.more',
              key: '3-3',
              content: [
                {
                  title: 'resource.activity',
                  icon: 'iconfont el-activity1',
                  path: '/resource/events',
                  key: '3-3-1'
                },
                {
                  title: 'resource.partner',
                  icon: 'iconfont el-partner',
                  path: '/resource/partners',
                  alt: 'resource.partner',
                  key: '3-3-2'
                }
                /* {
                  title: 'resource.recruitment',
                  icon: 'iconfont el-transfer',
                  path: '/resource/carees'
                } */
              ]
            }
          ]
        },
        {
          title: 'nav.solution',
          path: '/solutions',
          key: '4',
          children: [
            {
              key: '4-1',
              content: [
                {
                  title: 'nav.supply',
                  icon: 'iconfont el-supply-chain',
                  path: '/solutions/supply-chain',
                  key: '4-1-1'
                }
              ]
            },
            {
              key: '4-2',
              content: [
                {
                  title: 'nav.copyright',
                  icon: 'iconfont el-copyright',
                  path: '/solutions/copyright',
                  key: '4-2-1'
                }
              ]
            },
            {
              key: '4-3',
              content: [
                {
                  title: 'nav.assets',
                  icon: 'iconfont el-asset-management',
                  path: '/solutions/assets',
                  key: '4-3-1'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.development',
          path: '/developer',
          key: '5'
        },
        {
          title: 'nav.about',
          path: '/about',
          key: '6'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const val = handleGetLang();
    this.arrLang.map((item) => {
      if (val === item.lang) {
        this.strLang = item.label;
      }
    });
    this.$store.commit('handleChangeLang', val);
  },
  methods: {
    handleSelect(path, keyPath) {
      console.log(path, keyPath);
    },
    handleCommand(val) {
      console.log(val);
      this.arrLang.map((item) => {
        if (val === item.lang) {
          this.strLang = item.label;
        }
      });
      this.$store.commit('handleChangeLang', val);
      this.$i18n.locale = val;
      handleSaveCookie('lang', { lang: val }, 7);
    }
  }
};
</script>
