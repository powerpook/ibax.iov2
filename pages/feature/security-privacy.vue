<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 18:56:19
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="12">
              <h6 class="global-h6">隐私</h6>
              <h2 class="bass-h2">高于客戶隐私安全的追求</h2>
              <p class="home-new-p">
                IBAX各个方面的关键组成是"深度防御"，保障客户安全和数据隐私是加密货币的基础。IBAX部署了多层安全矩阵，以确保客户资产安全免受网络攻击，内部攻击和人为错误的影响。
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
              <div class="other-ease">保护你的数据的安全</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">遵守全球隐私的安全法规</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">禁止個人数据泄露</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-010"></i>
            <span class="home-new-title-text"> 安全和隐私 </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">用银行级别的技术高度保障个人信息安全</h2>
              <p>
                去中心化的属性使得区块链世界里不能对应到真实身份，最大限度的保护了个人隐私，则IBAX在技术实现上采取了同态加密、资产锁定、智能合约零知识证明、不可读取秘钥对（智能合约加密）的跨链机制、多链隔离等最先进密码学技术，最大程度上保障了
                IBAX的个人安全及隐私。
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
              >"安全是金字塔的塔尖，隐私是塔尖上的明珠。我们对安全和隐私的重视超过一切，只有足够重视才能保证链的安全、用户的安全、资金的安全，严格遵守国际隐私准则，你的隐私权完全由自己掌握。"</span
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
                  <span class="home-new-title-text"> 专为安全构建 </span>
                </p>
                <h2 class="bass-h2">您的安全是我们的顶级考虑</h2>
                <p>
                  基于区块链椭圆对称加密机制和HASH加密机制确保数据传输过程安全可靠，数据结果通过HASH映射的方式将结果存储在IBAX网络中，变更记录清晰可见。
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
                  <span class="home-new-title-text"> 致力保障个人财产 </span>
                </p>
                <h2 class="bass-h2">多层次加密保障您的个人财产安全</h2>
                <p>
                  IBAX使用公私钥加密解密签名验证，只有其使用用户才可以使用自己的私钥解密，保证了数据及身份的安全性。并把加密货币存入到去中心化钱包,
                  利用多方数字签字技术来保证您财产的安全。
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
            <el-col :xs="23" :lg="7">
              <div class="high-bottom-box">
                <div class="high-bottom-img">
                  <i class="el-iconfont iconfont el-a-007"></i>
                </div>
                <h4 class="high-bottom-h4">{{ $t('nav.tran') }}</h4>
                <p class="high-bottom-h6">{{ $t('nav.improve') }}</p>
                <nuxt-link class="high-bottom-more link" to="/feature/sharding">
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
