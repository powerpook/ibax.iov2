<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 18:57:06
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="12">
              <h6 class="global-h6">专为跨链设计</h6>
              <h2 class="bass-h2">扩展更多链外连接</h2>
              <p class="home-new-p">
                IBAX网络中的跨账本通信节点(CLB)专为跨链设计的，灵活地根据需求配置CLB性能和部署，无需重复劳动，轻松获取外部系统数据，创建连接，也可以自行对数据进行加工和格式转换。
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
              <div class="other-ease">保护数据跨链准确</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">保障资产跨链安全</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">全面的跨链网络</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-056"></i>
            <span class="home-new-title-text"> 跨链传输 </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">促进链与链之间的价值互通</h2>
              <p>
                一个真正的跨链通信解决方案不仅仅是数字资产传输，而是可以在链与链之间传输丰富的数据集和智能合约操作，还可以传输
                dApp 特定的数据、NFT等等。
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
              >"去中心化的跨链一直受到人们的期望，只有真正的跨链才能让大家放心的实现资产互兑互通,不必担心任何人盗取资金，这才符合区块链‘不信任’的理念。"</span
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
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-title-text"> 安全 </span>
                </p>
                <h2 class="bass-h2">扎实的跨链数据交互基础</h2>
                <p>
                  CLB独特创新的合约验证机制，当外部系统需要调用链上合约执行链上操作时，IBAX公众网络会在执行过程当中和执行之后验证合约的hash是否正确，以确定链外与链上的交互握手是可信安全的，此种方式可以保障交互过程中合约不存在篡改等风险。
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
                  <i class="el-iconfont iconfont el-a-024"></i>
                  <span class="home-new-title-text"> 灵活配置 </span>
                </p>
                <h2 class="bass-h2">任何人皆可创建</h2>
                <p>
                  去中心化跨链，不是披着去中心化外衣的产物，它是真实的去中心化，它无需开发者许可，不经开发者干扰，就可以在链间进行数字资产传输、数据传输和智能合约操作。他们不仅可以为自己启用这个功能，而且通过部署
                  CLB，还可以为其他开发团队提供跨链通信服务。
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
                  <i class="el-iconfont iconfont el-a-056"></i>
                </div>
                <h4 class="high-bottom-h4">跨账本通信节点（CLB）</h4>
                <p class="high-bottom-h6">数据跨链和资产跨链的基础</p>
                <p class="high-bottom-more link">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </p>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-003"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.private') }}</h4>
                <p class="high-bottom-h6">资金安全，匿名交易</p>
                <p class="high-bottom-more link">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </p>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-052"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.high') }}</h4>
                <p class="high-bottom-h6">{{ $t('feature.efficiency') }}</p>
                <p class="high-bottom-more link">
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </p>
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
          label: '跨链交互',
          name: 'first',
          img: img1
        },
        {
          label: '资产安全',
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
