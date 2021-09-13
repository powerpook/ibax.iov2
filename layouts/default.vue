<!--
 * @Author: abc
 * @Date: 2021-08-16 15:01:26
 * @LastEditors: abc
 * @LastEditTime: 2021-09-13 16:53:16
 * @Description:
-->
<template>
  <div class="global">
    <el-scrollbar id="global" ref="scroll" style="height: 100%" class="global">
      <el-container class="global-screen">
        <!-- header -->
        <el-header class="global-header">
          <el-row type="flex" justify="center">
            <!-- PC nav -->
            <el-col
              ref="headerTop"
              :sm="23"
              :lg="18"
              :md="23"
              class="hidden-sm-and-down animated"
              :class="{
                'global-fixed': isFixed
              }"
            >
              <nav-page></nav-page>
            </el-col>
            <!-- mobile nav-->
            <el-col :xs="23" class="hidden-sm-and-up">
              <m-nav-page></m-nav-page>
            </el-col>
          </el-row>
        </el-header>
        <!-- main -->
        <el-main class="global-screen-main">
          <nuxt />
        </el-main>
        <el-footer class="footer">
          <!-- footer -->
          <el-row type="flex" justify="center">
            <el-col :sm="22" :lg="18" :md="20">
              <page-footer></page-footer>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"></el-backtop>
  </div>
</template>
<script>
if (process.client) {
  // eslint-disable-next-line no-var
  var { WOW } = require('wowjs');
}
export default {
  props: {},
  data() {
    return {
      domGlobal: '',
      domHeaderTop: '',
      visibilityHeight: 10,
      isFixed: false,
      back: false,
      isInUp: false,
      throttleTimer: false
    };
  },
  computed: {},
  watch: {
    /*  $route(newVal, oldVal) {
      const { scroll } = newVal.query;
      console.log(scroll);
      if (scroll) {
        console.log(newVal);
        this.$refs.scroll.scrollTo(
          {
            y: scroll
          },
          500,
          'easeInQuad'
        );
      }
    } */
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = this.$refs.headerTop.$el;
      console.log(this.domGlobal);
      this.domGlobal.addEventListener('scroll', () => {
        this.handleThrottle(this.handleScroll, 250);
      });
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.el-scrollbar__wrap',
        offset: 0,
        mobile: true,
        live: false
      });
      // console.log(wow);
      wow.init();
    });
  },
  methods: {
    handleBackTop() {
      return this.domGlobal;
    },
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      // console.log(this.domGlobal);
      if (scrollTop > 300) {
        this.back = true;
      } else {
        this.back = false;
      }
      const topHeight = this.domHeaderTop.offsetTop;
      this.isFixed = scrollTop > topHeight;
      this.isInUp = scrollTop === topHeight;
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
