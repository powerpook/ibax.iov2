<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 18:57:48
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="12">
              <h6 class="global-h6">链外通信</h6>
              <h2 class="bass-h2">打破区块链的封闭空间</h2>
              <p class="home-new-p">
                区块链为了保障数据的完整性牺牲掉了与外界交互的可能。跨账本通信节点(CLB)可将链外数据引用到链内来使用，不论是资产跨链还是数据跨链，都将变成现实。
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
              <div class="other-ease">丰富链内数据</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">数据变多，选择变多，机会也将变多</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">去中心化跨链的支撑</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-054"></i>
            <span class="home-new-title-text"> 数据多样化 </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">坚决守护您的隐私交易数据</h2>
              <p>
                如果可以在链内引用气象数据、股票行情数据、地理信息等，充分利用这些互联网上的数据，集合区块链的去中心化机制，那将会真正的改变这个世界。
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
              >"区块链受到了很多局限性，链外数据验证影响了区块链的发展。跨账本通信节点(CLB)如同打开了一扇通往互联网世界的大门，你可以用她来实现你的任何想法。"</span
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
                  <i class="el-iconfont iconfont el-a-024"></i>
                  <span class="home-new-title-text"> 轻便快捷 </span>
                </p>
                <h2 class="bass-h2">快速部署跨账本通信节点(CLB)</h2>
                <p>
                  跨账本通信节点(CLB)跟其他节点的部署没有差别，你可以自行部署到计算机设备中，满足跨账本通信节点(CLB)共识的前提下，可以通过智能合约获取链外数据。
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
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-title-text"> 保障安全 </span>
                </p>
                <h2 class="bass-h2">具有‘验证绑定’功能，防止篡改</h2>
                <p>
                  当CLB中的智能合约和链上⽤于验证的智能合约不匹配时，CLB将不再执⾏此合约，‘验证绑定’功能保证和提升了⽤户对运⾏CLB的⽣态以信任。
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
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.high') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.each') }}</p>
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
                  <i class="el-iconfont iconfont el-a-003"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.private') }}</h4>
                <p class="high-bottom-h6">资金安全，匿名交易</p>
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
          label: 'CLB运行',
          name: 'first',
          img: img1
        },
        {
          label: '链外数据上链',
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
