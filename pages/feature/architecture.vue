<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-13 18:26:22
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6 animated fadeInUp">
            {{ $t('high.technical') }}
          </h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="12">
              <h2 class="bass-h2 animated fadeInUp">{{ $t('high.chain') }}</h2>
              <p class="home-new-p animated fadeInUp">{{ $t('high.low') }}</p>
              <p class="home-new-bottom animated fadeIn">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div
                class="home-new-img animated fadeIn"
                style="animation-duration: 3s"
              >
                <img src="@/assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus animated fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <!-- {{ $t('high.enough') }} -->
                <div>{{ $t('high.globalization') }}</div>
                <div>{{ $t('high.to') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-easeplus animated fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <!--   {{ $t('high.compatibility') }} -->
                <div>{{ $t('high.compat') }}</div>
                <div>{{ $t('high.rich') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus animated fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                <!--  {{ $t('high.ease') }} -->
                <div>{{ $t('high.use') }}</div>
                <div>{{ $t('high.provide') }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-title-text">
                  {{ $t('high.innovation') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">{{ $t('high.database') }}</h2>
              <p class="wow fadeInUp">{{ $t('high.postgreSQL') }}</p>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="../../assets/image/img-insights-report2.png"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="12">
          <div class="global-h6 wow fadeInUp">
            {{ $t('high.insights') }}
          </div>
          <div class="global-h6 wow fadeInUp">
            <span class="other-center-strong">{{ $t('high.team') }}</span>
            <span>{{ $t('high.never') }}</span>
          </div>
          <div class="global-h6 wow fadeInUp">Stuart Nichols</div>
          <div class="global-h6 wow fadeInUp">IBAX CEO</div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    {{ $t('high.high') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('high.storage') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.high') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('feature.we') }}
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.hor') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.honor') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('feature.any') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mdeia media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <p
            class="home-new-title wow fadeInUp"
            style="justify-content: center"
          >
            <i class="el-iconfont iconfont el-a-035"></i>
            <span class="home-new-title-text"> {{ $t('feature.node') }} </span>
          </p>
          <h2 class="bass-h2 wow fadeInUp">{{ $t('feature.guard') }}</h2>
          <p class="wow fadeInUp">
            {{ $t('feature.as') }}
          </p>
          <p class="wow fadeInUp">
            {{ $t('feature.ecological') }}
          </p>
          <div class="media-a-img wow fadeInUp">
            <img
              src="../../assets/image/retention-report-1.png"
              alt="retention-report-1"
            />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('feature.casting') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('high.etc') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('high.reward') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('high.running') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new wow fadeInUp">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('high.sub') }}</h2>
                <p class="wow fadeInUp">{{ $t('high.node') }}</p>
                <p class="wow fadeInUp">{{ $t('high.can') }}</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('nav.cross') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('high.of') }}
                </p>
                <p class="wow fadeInUp">{{ $t('high.runs') }}</p>
                <p class="wow fadeInUp">{{ $t('high.meet') }}</p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-new-img">
                  <img
                    src="../../assets/image/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a high-bottom">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4 wow fadeInUp">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-007"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.tran') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">
                  {{ $t('high.divides') }}
                </p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/sharding"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-042"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('nav.multi') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.dec') }}</p>
                <nuxt-link class="high-bottom-more link" to="/feature/multisig">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-056"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t('high.cross-chain') }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">{{ $t('nav.decen') }}</p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  to="/feature/cross-chain"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
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
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
