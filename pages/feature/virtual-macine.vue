<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 18:56:39
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6">{{ $t('high.technical') }}</h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="12">
              <h2 class="bass-h2">{{ $t('nav.virtual') }}</h2>
              <p class="home-new-p">
                {{ $t('high.virtual') }}
              </p>
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
            <el-col :xs="23" :lg="6">
              <div class="other-ease">{{ $t('high.most') }}</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">{{ $t('high.one') }}</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">{{ $t('high.contract') }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-042"></i>
            <span class="home-new-title-text">{{ $t('high.smart') }} </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">{{ $t('high.simple') }}</h2>
              <p>
                {{ $t('home.system') }}
              </p>
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
            <img
              v-if="lang === 'en'"
              src="@/assets/icons/viewpoint.svg"
              alt="viewpoint_es"
            />
            <img
              v-if="lang === 'zh'"
              src="@/assets/icons/viewpoint_zh.svg"
              alt="viewpoint_es"
            />
            <img
              v-if="lang === 'tw'"
              src="@/assets/icons/viewpoint_tw.svg"
              alt="viewpoint_es"
            />
          </div>
          <div class="global-h6">
            <span class="other-center-strong">{{ $t('high.basic') }}</span>
            <span>{{ $t('high.never') }}</span>
          </div>
          <div class="global-h6">Simon Hemmrich</div>
          <div class="global-h6">Senior Consultant</div>
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
                  <i class="el-iconfont iconfont el-a-051"></i>
                  <span class="home-new-title-text">
                    {{ $t('high.import') }}
                  </span>
                </p>
                <h2 class="bass-h2">{{ $t('high.from') }}</h2>
                <p>
                  Weaver支持ABI、Json等格式的智能合约文件，可以将智能合约以模块化的形式，快速导入到用户生态DAO中使用。
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
                  <i class="el-iconfont iconfont el-a-043"></i>
                  <span class="home-new-title-text"> 智能合约管理器 </span>
                </p>
                <h2 class="bass-h2">智能合约面板预览及管理</h2>
                <p>
                  Weaver提供了合约管理功能，在进入您的生态管理界面后，可以清晰的查看生态内的所有智能合约、数据表、字段，让你更轻松的维护和扩展生态内容。
                </p>
              </el-col>
              <el-col :xs="23" :lg="14">
                <div class="home-tag">
                  <el-tabs v-model="activeName" :tab-position="tabPosition">
                    <el-tab-pane
                      v-for="item in arrTags"
                      :key="item.name"
                      :label="$t(item.label)"
                      :name="item.name"
                    >
                      <div class="home-tag-img">
                        <img :src="item.img" :alt="item.label" />
                      </div>
                    </el-tab-pane>
                  </el-tabs>
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
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.high') }}</h4>
                <p class="high-bottom-h6">{{ $t('feature.efficiency') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/architecture"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-001"></i>
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
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-003"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.private') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.decen') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/privite-transaction"
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
const img1 = require('../../assets/image/img-retention-report-2.png');
const img2 = require('../../assets/image/img-funnels-report-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: '本地存储',
          name: 'first',
          img: img1
        },
        {
          label: '安全数据',
          name: 'second',
          img: img2
        }
      ]
    };
  },
  computed: {
    lang() {
      return this.$store.getters.handdleLang;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
