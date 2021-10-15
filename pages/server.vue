<!--
 * @Author: abc
 * @Date: 2021-10-15 12:27:07
 * @LastEditors: abc
 * @LastEditTime: 2021-10-15 17:19:16
 * @Description: 
-->
<template>
  <div class="server">
    <div id="serverTop" class="server-top">
      <img
        src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/ico-balance-1.svg"
        alt="ico-balance-1"
      />
      <h1 class="title-h3">Legal</h1>
    </div>
    <div class="server-content">
      <div class="server-content-top">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="20" :lg="12">
            <ul class="server-content-tab">
              <li
                v-for="item in arrPath"
                :key="item.key"
                :class="{ active: item.isActive }"
              >
                <nuxt-link :to="item.path"
                  ><i>{{ $t(item.title) }}</i></nuxt-link
                >
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <div class="server-content-bottom">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="20" :lg="12">
            <div class="server-content-box">
              <nuxt />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      arrPath: [
        {
          title: 'server.privacy',
          path: '/server/privacy-policy',
          key: '1',
          isActive: false
        },
        {
          title: 'server.term',
          path: '/server/terms-service',
          key: '2',
          isActive: false
        },
        {
          title: 'Cookie',
          path: '/server/cookie',
          key: '3',
          isActive: false
        }
      ]
    };
  },
  computed: {},
  watch: {
    $route: {
      handler() {
        const { path } = this.$route;
        const arrPath = this.arrPath.map((item) => {
          if (item.path === path) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
          return item;
        });
        this.arrPath = arrPath;
      },
      immediate: true
    }
  },
  created() {
    const route = this.$route.path;
    console.log(route);
  },
  mounted() {
    this.$nextTick(() => {
      this.domGlobal.addEventListener('scroll', () => {
        this.handleThrottle(this.handleAlwaysScroll, 100);
      });
    });
  },
  methods: {
    handleAlwaysScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('serverTop')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0) {
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
    }
  }
};
</script>
