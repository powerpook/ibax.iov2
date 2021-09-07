<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-02 12:31:28
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <h6 class="global-h6">多元化的资产管理</h6>
              <h2 class="bass-h2">资产管理平台</h2>
              <p class="home-new-p">
                基于区块链搭建的灵活、可信、多元的资产管理平台，助力企业将底层资产上链，实现链上资产打包、授权等穿透式管理，并通过链上风控持续追踪资产情况，助力资产合约发行，为主体信用较弱但拥有优质资产的企业降低融资门槛。
              </p>
              <p class="home-new-bottom">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >Watch Demo</a
                >
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-default"
                  >Sign Up</a
                >
              </p>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="home-new-img">
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/hero-retention.png"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="other">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!-- {{ $t('high.enough') }} -->
                链上自动资产管理
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!--   {{ $t('high.compatibility') }} -->
                智能合约资产管理
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!--  {{ $t('high.ease') }} -->
                资金穿透式管理
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <p class="home-new-title">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-title-text"> 实时风控分析引擎 </span>
              </p>
              <h2 class="bass-h2">链上自动资产管理</h2>
              <p>
                包括资产实时上链存证，链上资产确权，资产自动授权，资产决策管理、资产风控分析。
              </p>
              <div class="home-new-bottom link">
                <span>Get Started</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="home-new-img">
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/retention-img01.png"
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
              src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/logo-domain.svg"
              alt=""
            />
          </div>
          <div class="global-h6">
            <span class="other-center-strong">
              秒级链上资产风控分析引擎，助力穿透式洞察底层资产明细，</span
            >
            <span>使得结构化资产更透明可信。</span>
          </div>
          <!--   <div class="global-h6">Stuart Nichols</div>
          <div class="global-h6">IBAX CEO</div> -->
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="12">
                <div class="home-new-img">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/funnel-analysis.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <p class="home-new-title">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    金融级区块链隐私保护
                  </span>
                </p>
                <h2 class="bass-h2">智能合约资产管理</h2>
                <p>
                  基于智能合约实现资产交易结构设计，自动合约发行，循环购买资产、以及置换资产等能力。
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
                  <span class="home-new-title-text"> 秒级资产穿透增信 </span>
                </p>
                <h2 class="bass-h2">资金穿透式管理</h2>
                <p>
                  依托区块链账户及核身体系，实现线上签约、代收代付等一站式服务，助力资方看清资产形成过程，助力企业获得更低成本的资金。
                </p>
              </el-col>
              <el-col :xs="23" :lg="12">
                <div class="home-new-img">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/retention-img03.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime" :obj="obj">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a class="btn btn-primary">Get Demo</a>
          <a class="btn btn-default">Sign Up</a>
        </div>
      </template>
    </page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      obj: {
        title: 'footer.create',
        label: 'nav.it',
        text: 'footer.check',
        path: 'https://github.com/IBAX-io/documentation'
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
