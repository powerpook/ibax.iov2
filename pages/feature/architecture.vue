<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-09 18:51:41
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6">{{ $t('high.technical') }}</h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="12">
              <h2 class="bass-h2">{{ $t('high.chain') }}</h2>
              <p class="home-new-p">{{ $t('high.low') }}</p>
              <p class="home-new-bottom">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <div class="other-easeplus">
                <!-- {{ $t('high.enough') }} -->
                <div>{{ $t('high.globalization') }}</div>
                <div>{{ $t('high.to') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="other-easeplus">
                <!--   {{ $t('high.compatibility') }} -->
                <div>{{ $t('high.compat') }}</div>
                <div>{{ $t('high.rich') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div class="other-easeplus">
                <!--  {{ $t('high.ease') }} -->
                <div>{{ $t('high.use') }}</div>
                <div>{{ $t('high.provide') }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-011"></i>
            <span class="home-new-title-text">
              {{ $t('high.innovation') }}
            </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">{{ $t('high.database') }}</h2>
              <p>{{ $t('high.postgreSQL') }}</p>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="home-new-img">
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
          <div class="global-h6">
            {{ $t('high.insights') }}
          </div>
          <div class="global-h6">
            <span class="other-center-strong">{{ $t('high.team') }}</span>
            <span>{{ $t('high.never') }}</span>
          </div>
          <div class="global-h6">Stuart Nichols</div>
          <div class="global-h6">IBAX CEO</div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    {{ $t('high.high') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('high.storage') }}</h2>
                <p>
                  {{ $t('feature.high') }}
                </p>
                <p>
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('feature.hor') }}</h2>
                <p>
                  {{ $t('feature.honor') }}
                </p>
                <p>
                  {{ $t('feature.any') }}
                </p>
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
    <div class="mdeia media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <p class="home-new-title" style="justify-content: center">
            <i class="el-iconfont iconfont el-a-035"></i>
            <span class="home-new-title-text"> {{ $t('feature.node') }} </span>
          </p>
          <h2 class="bass-h2">{{ $t('feature.guard') }}</h2>
          <p>
            {{ $t('feature.as') }}
          </p>
          <p>
            {{ $t('feature.ecological') }}
          </p>
          <div class="media-a-img">
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('feature.casting') }}</h2>
                <p>
                  {{ $t('high.etc') }}
                </p>
                <p>
                  {{ $t('high.reward') }}
                </p>
                <p>
                  {{ $t('high.running') }}
                </p>
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
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('high.sub') }}</h2>
                <p>{{ $t('high.node') }}</p>
                <p>{{ $t('high.can') }}</p>
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
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-title-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('nav.cross') }}</h2>
                <p>
                  {{ $t('high.of') }}
                </p>
                <p>{{ $t('high.runs') }}</p>
                <p>{{ $t('high.meet') }}</p>
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
          <h3 class="global-h4">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-007"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.tran') }}</h4>
                <p class="high-bottom-h6">{{ $t('high.divides') }}</p>
                <nuxt-link class="high-bottom-more link" to="/feature/sharding">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-042"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.multi') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.dec') }}</p>
                <nuxt-link class="high-bottom-more link" to="/feature/multisig">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-056"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('high.cross-chain') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.decen') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
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
