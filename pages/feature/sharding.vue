<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 18:57:27
 * @Description: sharding
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="12">
              <h6 class="global-h6">{{ $t('high.technical') }}</h6>
              <h2 class="bass-h2">通过交易分片提升事务效率</h2>
              <p class="home-new-p">
                交易分片就像是同一个泳池的不同泳道一样，这是一种分隔业务提升效率的有效方法。理论上切片的越细，执行效率越高，但也要综合考虑大量跨片区业务出现时的情况，因此平衡才是最重要的。
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
              <div class="other-ease">对注册的用户进行分片</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">根据不同的业务类型分片</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">分片不是越多越好，需要因地制宜</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-049"></i>
            <span class="home-new-title-text"> 网络分片 </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">通过网络分片提升通讯、同步机制</h2>
              <p>
                IBAX是面向全球的区块链底层框架，因为地区的不同而造成的网络延时，因此我们对网络进行了分片，通过当前地区的荣誉节点提升网络效率。
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
          <div class="global-h6">执行效率</div>
          <div class="global-h6">
            <span class="other-center-strong"
              >"我们要解决的不是技术难题而是产品理念，只有站在使用用户的角度思考才是真正的提升效率。"</span
            >
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
                  <i class="el-iconfont iconfont el-a-007"></i>
                  <span class="home-new-title-text"> 跨分片交易 </span>
                </p>
                <h2 class="bass-h2">跨分片事务不影响执行效率和性能</h2>
                <p>
                  不论是网络分片还是事务分片的跨区域交易，都由事务处理机制通过荣誉节点分发处理，不会影响效率和性能。
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
                  <i class="el-iconfont iconfont el-a-031"></i>
                  <span class="home-new-title-text"> 同一条链 </span>
                </p>
                <h2 class="bass-h2">IBAX通过共识和荣誉节点控制分片</h2>
                <p>
                  IBAX坚持一条链的原则，通过部署在全球的荣誉节点及共识机制实现交易分片。
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
                  <i class="el-iconfont iconfont el-a-031"></i>
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
                  <i class="el-iconfont iconfont el-a-038"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.virtual') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.smart') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/virtual-macine"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-010"></i>
                </div>
                <h4 class="high-bottom-h4">安全和隐私</h4>
                <p class="high-bottom-h6">{{ $t('feature.encryption') }}</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/security-privacy"
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
          label: '荣誉节点',
          name: 'first',
          img: img1
        },
        {
          label: '交易分片',
          name: 'second',
          img: img2
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
