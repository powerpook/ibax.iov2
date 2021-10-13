<!--
 * @Author: abc
 * @Date: 2021-08-24 16:43:39
 * @LastEditors: abc
 * @LastEditTime: 2021-10-13 11:13:35
 * @Description: video resources
-->
<template>
  <div class="resource">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="resource-video">
          <el-row type="flex" justify="space-between" class="el-row-wrap">
            <el-col :xs="24" :lg="10">
              <div class="resource-top">
                <strong
                  class="resource-box-btn wow fadeInUp"
                  style="text-transform: uppercase"
                  >{{ $t('resourse.introduce') }}</strong
                >
                <h4 class="title-h4 wow fadeInUp">
                  {{ $t('resourse.explanation') }}
                </h4>
                <p class="wow fadeInUp">{{ $t('resource.practical') }}</p>
                <p class="wow fadeInUp">{{ $t('resource.provide') }}</p>
                <div class="resource-bottom">
                  <p class="wow fadeInUp">{{ $t('resourse.sourceview') }}</p>
                  <div class="resource-top-href wow fadeInUp">
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
            <el-col :xs="24" :lg="12">
              <div class="resource-img">
                <img
                  class="resource-img-right wow fadeInUp"
                  src="@/assets/images/video-1.jpg"
                  alt="video"
                />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="resource-video">
          <el-row type="flex" justify="space-between" class="el-row-wrap">
            <el-col :xs="24" :lg="10">
              <div class="resource-top">
                <h4 class="title-h4 wow fadeInUp">{{ $t('resourse.how') }}</h4>
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
                  <div class="resource-top-href wow fadeInUp">
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
            <el-col :xs="24" :lg="12">
              <div class="resource-img wow fadeInUp">
                <img
                  class="resource-img-right"
                  src="@/assets/images/video-weaver.jpg"
                  alt="video-weaver"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="resourseMiddle" class="resource-middle">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <div class="resource-middle-h3">
            <h3 class="title-h3 wow fadeInUp">{{ $t('resourse.video') }}</h3>
          </div>
          <el-row type="flex" justify="space-between" class="el-row-wrap">
            <el-col :xs="24" :lg="7">
              <div class="resource-img wow fadeInUp">
                <img
                  src="@/assets/images/video-stuart.jpg"
                  alt="video-stuart"
                />
              </div>
              <p class="resource-middle-text wow fadeInUp">
                IBAX Network CEO Stuart Nichols gave a brief introduction and
                shared his vision of IBAX.
              </p>
              <a
                class="home-new-bottom link wow fadeInUp"
                href="https://www.youtube.com/watch?v=5yFY9vF2eIU"
                target="_blank"
              >
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </a>
            </el-col>
            <el-col :xs="24" :lg="7">
              <div class="resource-img wow fadeInUp">
                <img src="@/assets/images/video-an.png" alt="video-an" />
              </div>
              <p class="resource-middle-text wow fadeInUp">
                IBAX Network COO Alan Mclvor gave us a 1 minute brief
                introduction of IBAX Network.
              </p>
              <a
                class="home-new-bottom link wow fadeInUp"
                href="https://youtu.be/Iu8UdTljh1g"
                target="_blank"
              >
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </a>
            </el-col>
            <el-col :xs="24" :lg="7">
              <div class="resource-img wow fadeInUp">
                <img
                  src="../../assets/images/video-gianluca.jpg"
                  alt="video-gianluca"
                />
              </div>
              <p class="resource-middle-text wow fadeInUp">
                IBAX Network General Marketing Manager Gianluca gave a 1 minute
                brief introduction of IBAX.
              </p>
              <a
                class="home-new-bottom link wow fadeInUp"
                href="https://youtu.be/MVNppxG8DLM"
                target="_blank"
              >
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </a>
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
