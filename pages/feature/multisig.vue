<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 11:22:08
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <h6 class="global-h6">分散权限</h6>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">使用多重签名分散账户权限</h2>
              <p class="home-new-p">
                多重签名账户(N)转移资金时，需要得到(M)个多重签名账户的授权。M+N>51%才能完成转账。
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
              <div class="other-ease">账户权限分散等同私钥分散</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">多方协同时，规避权限集中</div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">一致性，每个账户权限相同</div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <p class="home-new-title">
            <i class="el-iconfont iconfont el-a-059"></i>
            <span class="home-new-title-text"> 钱包安全 </span>
          </p>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="8">
              <h2 class="bass-h2">多重签名钱包防止私钥泄露</h2>
              <p>
                在不安全的环境下使用私钥可能发生私钥泄露的情况，通过多重签名的钱包将有效的防止黑客入侵而造成的私钥泄露。
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
              >"去中心化理念是区块链的根本，多重签名技术很好的维护及应用了这个理念。这项技术还能很好的避免了中心化权限的问题，应用的范围包括：Defi、交易所等业务场景。"</span
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
                  <i class="el-iconfont iconfont el-a-001"></i>
                  <span class="home-new-title-text"> 链上通知 </span>
                </p>
                <h2 class="bass-h2">签名转账会在链上通知关联账户</h2>
                <p>
                  发起签名转账时IBAX链会同步通知到关联账户，无需你再通过其他方式告知关联账户。
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
                  <i class="el-iconfont iconfont el-a-034"></i>
                  <span class="home-new-title-text"> 相比冷钱包 </span>
                </p>
                <h2 class="bass-h2">比冷钱包更安全可靠</h2>
                <p>
                  多重签名账户与冷钱包相比更安全可靠，多重私钥具有灵活的存储方式，分散的权限远比集中的管理要安全的多。
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
                  <i class="el-iconfont iconfont el-a-001"></i>
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
                  <i class="el-iconfont iconfont el-a-031"></i>
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
