<!--
 * @Author: abc
 * @Date: 2021-08-17 17:50:10
 * @LastEditors: abc
 * @LastEditTime: 2021-09-14 17:14:22
 * @Description: conact us
-->
<template>
  <div class="about">
    <div class="about-left">
      <div class="about-left-box">
        <nuxt-link to="/" class="about-left-box-icon">
          <i class="iconfont el-logo1"></i>
        </nuxt-link>
        <div class="about-left-box-head">
          <img
            class="icon"
            src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/ico-contact.svg"
            alt=""
          />
          <span>CONTACT US</span>
        </div>
        <h1 class="bass-h1">{{ $t('about.can') }}</h1>
        <p>{{ $t('about.have') }}</p>
        <ul class="award-list">
          <a href="https://www.facebook.com/ibaxproject" target="_blank">
            <div class="logo-hold">
              <img src="@/assets/logo/facebook.svg" width="30" alt="facebook" />
            </div>
            <span class="caption">{{ $t('about.our') }}</span>
          </a>
          <a href="https://twitter.com/IbaxNetwork" target="_blank">
            <div class="logo-hold">
              <img src="@/assets/logo/twitter.svg" width="30" alt="twitter" />
            </div>
            <span class="caption">{{ $t('about.events') }}</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
            target="_blank"
          >
            <div class="logo-hold">
              <img src="@/assets/logo/youtube.svg" width="30" alt="youtube" />
            </div>
            <span class="caption">{{ $t('about.an') }}</span>
          </a>
        </ul>
        <div class="logo-row">
          <span class="title">{{ $t('about.you') }}</span>
          <ul class="logo-list">
            <a href="https://t.me/IBAXNetwork" target="_blank">
              <img src="@/assets/logo/telegram.svg" width="40" alt="telegram" />
            </a>
            <a href="https://discord.gg/zRX6Mwafya" target="_blank">
              <img src="@/assets/logo/discord.svg" width="40" alt="discord" />
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div class="about-right">
      <div class="about-right-box">
        <el-input
          v-model="textarea"
          type="textarea"
          placeholder="Talk to us"
          class="about-right-textarea"
        >
        </el-input>
        <div class="about-right-btn">
          <button class="btn btn-default">Send</button>
        </div>
      </div>
      <div class="about-right-btn-text">
        <a
          href="https://github.com/orgs/IBAX-io/people"
          target="_blank"
          class="link"
          >{{ $t('about.want') }} -></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'aboutLayouts',
  props: {},
  data() {
    return {
      textarea: ''
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
