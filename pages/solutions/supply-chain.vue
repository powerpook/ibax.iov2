<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-01 16:38:06
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <h6 class="global-h6">金融保障</h6>
              <h2 class="bass-h2">供应链金融</h2>
              <p class="home-new-p">
                供应链金融服务平台，通过将核心企业的应收账款进行数字化升级，使得应收账款可以作为信用凭证，在供应链中流转而传递给上游供应商，从而解决供应链末端的小微企业融资贵、融资难的问题。同时，基于金融级别的身份安全和交易安全认证，也为企业在线零接触交易提供了完整的解决方案。
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
                开立和流转
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!--   {{ $t('high.compatibility') }} -->
                账款的提前收款
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!--  {{ $t('high.ease') }} -->
                应收帐款的销毁
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <p class="home-new-title">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-title-text">
                  数字资产全生命周期管理
                </span>
              </p>
              <h2 class="bass-h2">开立和流转</h2>
              <p>
                核心企业可以基于银行授信，将对一级供应商的应付账款线上确权并上链。一级供应商可以在链上将应收账款转让给二级或多级供应商。
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
            <span class="other-center-strong"
              >向银行、保理、担保、信托等各种金融机构，以及供应链上下游的核心企业及供应商全面开放。</span
            >
            <span
              >共建基于区块链的供应链金融协作生态。并欢迎有实力的大型银行，加入区块链联盟共建。应收账款全生命周期数字资产上链，数字资产的生成、流转、融资、销毁直接在链上完成。杜绝非区块链系统常见的费用双花和对账不一致问题。</span
            >
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
                  <span class="home-new-title-text"> 灵活开放、生态共建 </span>
                </p>
                <h2 class="bass-h2">应收帐款的提前收款</h2>
                <p>
                  各级供应商可以将链上持有的应收账款，转让给出资方，并提前获得现金收款。
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
                    协助核心企业实现供应链穿透管理
                  </span>
                </p>
                <h2 class="bass-h2">应收帐款的销毁</h2>
                <p>
                  核心企业付款后，ibax合作的清分机构将资金结算到应收账款的链上持有者，包括各级供应商及出资方。
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
        label: 'footer.blockchain',
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
