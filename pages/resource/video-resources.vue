<!--
 * @Author: abc
 * @Date: 2021-08-24 16:43:39
 * @LastEditors: abc
 * @LastEditTime: 2021-08-25 15:54:46
 * @Description: video resources
-->
<template>
  <div class="resource">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="resource-video">
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="8">
              <div class="resource-top">
                <strong class="resource-box-btn">介绍</strong>
                <h4 class="bass-h4">用视频讲解的方式了解IBAX</h4>
                <div class="resource-top-warp">
                  <div
                    class="resource-top-warp-content"
                    :class="{ 'resource-top-warp-content-big': isOpen }"
                  >
                    <p>
                      IBAX is a practical enterprise-level，open source,
                      scalable piece.
                    </p>
                    <p>
                      IBAX take years to established an unique blockchain
                      network architecture. (Strong recommendation:Check tech
                      white paper on：https://IBAX.io).IBAX could provide a
                      stable and reliable channel for the transfer of business
                      data (assets, tokens, certificates, etc.) and interactions
                      with it.
                    </p>
                    <p>
                      Weaver (XXX Onchain ecoLXXX management platform) ensures
                      the sustainable expansion of cross-chain operations and
                      real value outputs.
                    </p>
                    <p>
                      IBAX not just a tool for tokens liquidity change or vogue
                      DEFI projects.We prefer to make real magic outputs into
                      reality.
                    </p>
                    <p>
                      We proud to announce simulation on the early IBAX basic
                      network(testnet environment)the average TPS is above
                      3,000.
                    </p>
                    <p>
                      IBAX would continuously meet the needs of an increasing
                      amount of businesses.
                    </p>
                  </div>
                  <div class="resource-top-warp-icon">
                    <i
                      :class="
                        isOpen ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                      "
                      @click="handleIsopen"
                    ></i>
                  </div>
                </div>
                <div>
                  <p>查看数据来源</p>
                  <div>
                    <button class="btn btn-primary">开始播放</button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="resource-img">
                <img
                  class="resource-img-right"
                  src="../../assets/image/sddefault.webp"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="resource-video">
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="8">
              <div class="resource-top">
                <h4 class="bass-h4">如何使用Weaver:</h4>
                <div>
                  <p class="home-new-title">
                    <img
                      src="../../assets/image/ico-insights.svg"
                      alt="ico-insights"
                    />
                    <span>通过Weaver快速的创建生态</span>
                  </p>
                  <p class="home-new-title">
                    <img
                      src="../../assets/image/ico-insights.svg"
                      alt="ico-insights"
                    />
                    <span>一键发币</span>
                  </p>
                  <p class="home-new-title">
                    <img
                      src="../../assets/image/ico-insights.svg"
                      alt="ico-insights"
                    />
                    <span>可视化的生态治理页面</span>
                  </p>
                </div>
                <div class="resource-top-bottom">
                  <p>查看数据来源</p>
                  <div>
                    <button class="btn btn-primary">开始播放</button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="resource-img">
                <img
                  class="resource-img-right"
                  src="../../assets/image/sddefault.webp"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="resource-middle">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="resource-middle-h3">
            <h3 class="bass-h3">IBAX团队的视频介绍</h3>
          </div>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="resource-img">
                <img src="../../assets/image/sddefault.webp" mode="powerful" />
              </div>
              <p class="resource-middle-text">
                Today I would like to give you a brief introduction and some of
                the history and reasons why I believe, developers and companies
                like yours should be excited about The IBAX Network.
              </p>
              <div class="home-new-bottom link">
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="resource-img">
                <img src="../../assets/image/sddefault.webp" mode="powerful" />
              </div>
              <p class="resource-middle-text">
                Ibax provides an integrated application development environment,
                that is secure, efficient and easy to use.
              </p>
              <div class="home-new-bottom link">
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="resource-img">
                <img src="../../assets/image/sddefault.webp" mode="powerful" />
              </div>
              <p class="resource-middle-text">
                IBAX network is a blockchain platform that aims to build a
                digital ecosystem based on an integrated application development
                environment has a multilevel permission system for managing
                access rights to data interfaces and smart contracts.
              </p>
              <div class="home-new-bottom link">
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isOpen: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleIsopen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
