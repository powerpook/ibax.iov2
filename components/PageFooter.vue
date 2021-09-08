<!--
 * @Author: abc
 * @Date: 2021-08-19 14:44:39
 * @LastEditors: abc
 * @LastEditTime: 2021-09-08 10:48:24
 * @Description: 
-->
<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :xs="23" :lg="3">
        <div class="nav-index-img">
          <nuxt-link :to="{ name: 'index' }">
            <img src="../assets/image/logo.png" alt="logo" />
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="23" :lg="4">
        <h6 class="global-h6">{{ $t('footer.feature') }}</h6>
        <div v-for="item in arrFeature" :key="item.key" class="footer-link">
          <nuxt-link :to="{ path: item.key }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="23" :lg="4">
        <h6 class="global-h6">{{ $t('nav.bass') }}</h6>
        <div v-for="item in arrBass" :key="item.key" class="footer-link">
          <nuxt-link :to="{ path: item.key }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="23" :lg="4">
        <h6 class="global-h6">{{ $t('nav.resource') }}</h6>
        <div v-for="item in arrResource" :key="item.key" class="footer-link">
          <nuxt-link v-if="item.path" :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
          <a v-if="item.link" :href="item.link" target="_blank">
            {{ $t(item.title) }}
          </a>
        </div>
      </el-col>
      <el-col :xs="23" :lg="4">
        <h6 class="global-h6">{{ $t('nav.solution') }}</h6>
        <div v-for="item in arrSolution" :key="item.path" class="footer-link">
          <nuxt-link :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="23" :lg="4">
        <h6 class="global-h6">{{ $t('nav.development') }}</h6>
        <div v-for="item in arrDevelop" :key="item.path" class="footer-link">
          <nuxt-link :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="23" :lg="4">
        <h6 class="global-h6">{{ $t('footer.more') }}</h6>
        <div v-for="item in arrAbout" :key="item.path" class="footer-link">
          <nuxt-link :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
    </el-row>
    <div class="footer-icon">
      <div class="footer-icon-content">
        <a href="https://www.facebook.com/ibaxproject" target="_blank">
          <i class="iconfont el-facebook"></i>
        </a>
        <a href="https://github.com/IBAX-io/documentation" target="_blank">
          <i class="iconfont el-github"></i>
        </a>
        <a href="https://t.me/IBAXNetwork" target="_blank">
          <i class="iconfont el-medium"></i>
        </a>
        <a href="https://twitter.com/IbaxNetwork" target="_blank">
          <i class="iconfont el-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
          target="_blank"
        >
          <i class="iconfont el-youtube"></i>
        </a>
        <a href="https://t.me/IBAXNetwork" target="_blank">
          <i class="iconfont el-telegram"></i>
        </a>
        <a href="https://t.me/IBAXNetwork" target="_blank">
          <i class="iconfont el-reddit"></i>
        </a>
        <a href="https://www.linkedin.com/company/ibaxio/" target="_blank">
          <i class="iconfont el-linkedin"></i>
        </a>
        <a href="https://discord.gg/zRX6Mwafya" target="_blank">
          <i class="iconfont el-discord"></i>
        </a>
      </div>
      <div class="footer-icon-text">IBAX FOUNDATION © 2019 - 2021</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      arrFeature: [
        {
          title: 'nav.high',
          key: '/feature/architecture'
        },
        {
          title: 'nav.virtual',
          key: '/feature/virtual-macine'
        },
        {
          title: 'nav.tran',
          key: '/feature/sharding'
        },
        {
          title: 'nav.security',
          key: '/feature/security-privacy'
        },

        {
          title: 'nav.chain',
          key: '/feature/cross-chain'
        },
        {
          title: 'nav.multi',
          key: '/feature/multisig'
        },
        {
          title: 'nav.cross',
          key: '/feature/clb'
        },
        {
          title: 'nav.private',
          key: '/feature/privite-transaction'
        },
        {
          title: 'nav.self',
          key: '/feature/ecolib-governance'
        }
      ],
      arrBass: [
        {
          title: 'nav.bass',
          key: '/bass-markeplace'
        },
        {
          title: 'bass.ecological',
          key: '/bass-markeplace/ecolibs'
        }
      ],
      arrResource: [
        {
          title: 'resource.team',
          path: '/resource/team',
          key: '1'
        },
        {
          title: 'resource.white',
          path: '/resource/white-paper',
          key: '2'
        },
        {
          title: 'resource.video',
          path: '/resource/video-resources',
          key: '3'
        },
        {
          title: 'resource.document',
          // path: '/resource/document',
          link: 'https://github.com/IBAX-io/documentation',
          key: '4'
        },
        {
          title: 'resource.news',
          path: '/resource/news',
          key: '5'
        },
        {
          title: 'resource.community',

          // path: '/resource/community',
          link: 'https://github.com/orgs/IBAX-io/people',
          key: '6'
        },
        {
          title: 'resource.download',
          //  path: '/resource/download',
          link: 'https://github.com/orgs/IBAX-io/repositories',
          key: '7'
        },
        {
          title: 'resource.activity',
          path: '/resource/events',
          key: '8'
        },
        {
          title: 'resource.partner',
          path: '/resource/partners',
          alt: 'resource.partner',
          key: '9'
        }
      ],
      arrSolution: [
        {
          title: 'nav.solution',
          path: '/solutions'
        }
      ],
      arrDevelop: [
        {
          title: 'footer.developer',
          path: '/developer',
          key: '5'
        }
      ],
      arrAbout: [
        {
          title: 'nav.about',
          path: '/about',
          key: '5'
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
