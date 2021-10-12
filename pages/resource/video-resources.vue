<!--
 * @Author: abc
 * @Date: 2021-08-24 16:43:39
 * @LastEditors: abc
 * @LastEditTime: 2021-10-12 14:07:57
 * @Description: video resources
-->
<template>
  <div class="resource">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="resource-video">
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="10">
              <div class="resource-top">
                <strong
                  class="resource-box-btn wow fadeInUp"
                  style="text-transform: uppercase"
                  >{{ $t('resourse.introduce') }}</strong
                >
                <h4 class="bass-h4 wow fadeInUp">
                  {{ $t('resourse.explanation') }}
                </h4>
                <p class="wow fadeInUp">{{ $t('resource.practical') }}</p>
                <p class="wow fadeInUp">{{ $t('resource.provide') }}</p>
                <!--   <div class="resource-top-warp wow fadeInUp">
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
                   <div class="resource-top-warp-icon wow fadeInUp">
                    <i
                      :class="
                        isOpen ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                      "
                      @click="handleIsopen"
                    ></i>
                  </div>
                </div>
                -->
                <div class="resource-bottom">
                  <p class="wow fadeInUp">{{ $t('resourse.sourceview') }}</p>
                  <div class="wow fadeInUp">
                    <a
                      class="btn btn-primary"
                      href="https://www.youtube.com/watch?v=jzfvZMb_jus"
                      target="_blank"
                    >
                      {{ $t('resourse.start') }}
                    </a>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="resource-img">
                <img
                  class="resource-img-right wow fadeInUp"
                  src="../../assets/image/sddefault.webp"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="resource-video">
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="10">
              <div class="resource-top">
                <h4 class="bass-h4 wow fadeInUp">{{ $t('resourse.how') }}</h4>
                <div>
                  <p class="home-new-title wow fadeInUp">
                    <i class="iconfont el-create resource-top-icon"></i>
                    <span>{{ $t('resourse.quickly') }}</span>
                  </p>
                  <p class="home-new-title wow fadeInUp">
                    <i class="iconfont el-one resource-top-icon"></i>
                    <span>{{ $t('resourse.issuance') }}</span>
                  </p>
                  <p class="home-new-title wow fadeInUp">
                    <i class="iconfont el-keshi resource-top-icon"></i>
                    <span>{{ $t('resourse.visual') }}</span>
                  </p>
                </div>
                <div class="resource-top-bottom">
                  <p class="wow fadeInUp">{{ $t('resourse.sourceview') }}</p>
                  <div class="wow fadeInUp">
                    <a
                      class="btn btn-primary"
                      href="https://www.youtube.com/watch?v=v6djILrPGbw"
                      target="_blank"
                    >
                      {{ $t('resourse.start') }}
                    </a>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="resource-img wow fadeInUp">
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
    <div id="resourseMiddle" class="resource-middle">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="resource-middle-h3">
            <h3 class="bass-h3 wow fadeInUp">{{ $t('resourse.video') }}</h3>
          </div>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="resource-img wow fadeInUp">
                <img src="../../assets/image/sddefault.webp" mode="powerful" />
              </div>
              <p class="resource-middle-text wow fadeInUp">
                IBAX is a fast and reliable whole new blockchain network. 3
                minutes to know more about IBAX.
              </p>
              <a class="home-new-bottom link wow fadeInUp">
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </a>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="resource-img wow fadeInUp">
                <img src="../../assets/image/sddefault.webp" mode="powerful" />
              </div>
              <p class="resource-middle-text wow fadeInUp">
                Ibax provides an integrated application development environment,
                that is secure, efficient and easy to use.
              </p>
              <div class="home-new-bottom link wow fadeInUp">
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="resource-img wow fadeInUp">
                <img src="../../assets/image/sddefault.webp" mode="powerful" />
              </div>
              <p class="resource-middle-text wow fadeInUp">
                IBAX network is a blockchain platform that aims to build a
                digital ecosystem based on an integrated application development
                environment has a multilevel permission system for managing
                access rights to data interfaces and smart contracts.
              </p>
              <div class="home-new-bottom link wow fadeInUp">
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
    <dialog-video
      :dialog-boo="dialogVideo"
      @videoclose="handleVideoClose"
    ></dialog-video>
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
  mounted() {
    this.$nextTick(() => {
      this.numMiddleTop =
        document.getElementById('resourseMiddle').getBoundingClientRect().top -
        140;
      console.log(this.numArchite);
      this.numMiddleBottom =
        document.getElementById('resourseMiddle').getBoundingClientRect()
          .bottom - 140;
      if (this.numMiddleTop) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handlerMiddleScroll, 100);
        });
      }
    });
  },
  methods: {
    handleIsopen() {
      this.isOpen = !this.isOpen;
    },
    handlerMiddleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      if (scrollTop >= this.numMiddleTop && scrollTop < this.numMiddleBottom) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (scrollTop >= this.numMiddleBottom) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
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
