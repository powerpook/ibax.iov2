<!--
 * @Author: abc
 * @Date: 2021-08-17 17:50:10
 * @LastEditors: abc
 * @LastEditTime: 2021-08-30 10:30:53
 * @Description: conact us
-->
<template>
  <div class="about">
    <div class="about-left">
      <div class="about-left-box">
        <nuxt-link to="/" class="about-left-box-icon">
          <i class="iconfont el-logo"></i>
        </nuxt-link>
        <div class="about-left-box-head">
          <img
            class="icon"
            src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/ico-contact.svg"
            alt=""
          />
          <span>CONTACT US</span>
        </div>
        <h1 class="bass-h1">你可以通过以下方式跟我们交谈</h1>
        <p>我们在各媒体平台都有社交账号，你可以关注我们，跟我们留言互动</p>
        <ul class="award-list">
          <a href="https://www.facebook.com/ibaxproject" target="_blank">
            <div class="logo-hold">
              <img src="@/assets/logo/facebook.svg" width="30" alt="facebook" />
            </div>
            <span class="caption">我们对项目进度的公布和区块链见</span>
          </a>
          <a href="https://twitter.com/IbaxNetwork" target="_blank">
            <div class="logo-hold">
              <img src="@/assets/logo/twitter.svg" width="30" alt="twitter" />
            </div>
            <span class="caption">发布活动和区块链新闻相关的内容</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
            target="_blank"
          >
            <div class="logo-hold">
              <img src="@/assets/logo/youtube.svg" width="30" alt="youtube" />
            </div>
            <span class="caption">视频资源的重要发布渠道</span>
          </a>
        </ul>
        <div class="logo-row">
          <span class="title">还可以通过以下方式加入：</span>
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
          >想要获得技术问题解答？前往技术论坛 -></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'about',
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
