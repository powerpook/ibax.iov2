<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-06 19:23:30
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6">隐私交易</h6>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">匿名交易，保护隐私安全</h2>
              <p class="home-new-p">
                在IBAX网络中，我们设计了交易零知识证明和智能合约零知识证明两种实现方式，在所有以智能合约为驱动的现代区块链网络中，只有智能合约的零知识证明，才能保证交易数据的安全性和隐私性。
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
            <el-col :xs="23" :lg="8">
              <div class="home-new-img">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="6">
              <div class="other-ease">健全的隐私保护机制</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">交易过程不可被追溯</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">个人交易数据不被泄露</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-051"></i>
            <span class="home-new-title-text"> 技术支撑 </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">‘黑匣子’技术</h2>
              <p>
                IBAX网络中，我们使用了复杂的同态加密技术，同态加密是基于数学难题的计算复杂性理论的密码学技术，其可对密文数据进行任意计算，并确保结果的准确性，且只有数据的主人才能获得数据，在交易过程中为您的隐私保驾护航。
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
              >由于隐私交易会让资产变得安全不可查，用户间的高频量化交易使其更加安全，在一定程度上填补了匿名交易的市场需求。</span
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
                  <i class="el-iconfont iconfont el-a-003"></i>
                  <span class="home-new-title-text"> 匿名交易 </span>
                </p>
                <h2 class="bass-h2">建立金融联邦体系</h2>
                <p>
                  金融联邦体系就是用一种加密货币从其他人那里得到同样金额的加密货币，它可以让用户快速高效地与其他用户的资金进行混合，在现有的用户账户和混币后的新账户之间创建随机关系，原理是分离交易中的输入和输出地址，由此来保护隐私，达到匿名的效果。
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
                  <i class="el-iconfont iconfont el-a-003"></i>
                  <span class="home-new-title-text"> 安全交易 </span>
                </p>
                <h2 class="bass-h2">隐私交易让身份更安全</h2>
                <p>
                  在IBAX网络中，无法通过技术手段得知交易的双方的信息，无法追踪且不受现实世界身份的影响，且保障了个人安全及隐私。身份隐匿，使得我们的交易身份更安全。
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
          <h3 class="global-h4">$t('feature.about')</h3>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-056"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('feature.network') }}</h4>
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
                  <i class="el-iconfont iconfont el-a-010"></i>
                </div>
                <h4 class="high-bottom-h4">安全和隐私</h4>
                <p class="high-bottom-h6">资金安全，匿名交易</p>
                <nuxt-link
                  class="high-bottom-more link"
                  to="/feature/security-privacy"
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
                <h4 class="high-bottom-h4">高性能/高并发的链</h4>
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
          label: '隐匿身份',
          name: 'first',
          img: img1
        },
        {
          label: '数据安全',
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
