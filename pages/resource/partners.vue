<!--
 * @Author: abc
 * @Date: 2021-08-24 16:43:39
 * @LastEditors: abc
 * @LastEditTime: 2021-08-25 17:41:26
 * @Description: video resources
-->
<template>
  <div class="resource">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="resource-video">
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="8">
              <div class="resource-top">
                <strong class="resource-box-btn">合作案例</strong>
                <h2 class="bass-h2">Jutkey Wallt加入IBAX的收获</h2>
                <p>
                  Jutkey
                  Wallt的团队通过使用IBAX链作为钱包的基础应用，和IBAX团队保持沟通，获得了IBAX的多项技术支持。
                </p>
                <div class="resource-top-bottom">
                  <button class="btn btn-primary">查看全部故事</button>
                </div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="resource-img">
                <img
                  class="resource-img-right"
                  src="../../assets/image/Screen-Shot-2020-02-14-at-1.37.04-PM.png"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="resource-video">
          <div class="resource-partners-title">
            优秀的团队已经加入到IBAX生态中
          </div>
          <ul
            class="resource-partners-list"
            data-transition-delay="0.15s"
            style="transition-delay: 0.15s"
          >
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/logo-docusign-1.svg"
                class="attachment-full"
                alt="logo-docusign-1"
                width="134"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-uber.svg"
                class="attachment-full"
                alt="logo-uber"
                width="80"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-lemonade.svg"
                class="attachment-full"
                alt="logo-lemonade"
                width="142"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/rakuten-viber-logo-1.svg"
                class="attachment-full"
                alt="rakuten-viber-logo"
                width="171"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-expedia.svg"
                class="attachment-full"
                alt="logo-expedia"
                width="124"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-twitter.svg"
                class="attachment-full"
                alt="logo-twitter"
                width="46"
              />
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <div class="resource-page">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="resource-middle-top">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h2 class="bass-h3">了解IBAX生态的更多应用</h2>
              </el-col>
              <el-col :xs="23" :lg="12">
                <span>这些应用通过IBAX合约兼容的特性，一键完成生态部署</span>
              </el-col>
            </el-row>
          </div>
          <el-row
            type="flex"
            justify="space-between"
            align="top"
            class="resource-middle-warp"
          >
            <el-col v-for="i in 9" :key="i" :xs="23" :lg="7">
              <div class="resource-middle-body">
                <div class="resource-img">
                  <img
                    src="../../assets/image/ziprecruiter-hero@2x-2-1024x539.png"
                    mode="powerful"
                  />
                </div>
                <div class="resource-middle-body-content">
                  <h3>Heading-{{ i }}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo. Proin sodales
                    pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus pronin sapien nunc accuan eget.
                  </p>
                  <div class="home-new-bottom link">
                    <span>Watch Now</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="resource-partners">
      <div class="resource-partners-center">
        <el-row type="flex" justify="center">
          <el-col :xs="23" :sm="22" :md="12" :lg="10">
            <div class="resource-top">
              <h4 class="bass-h4">生态名称</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
              <div class="resource-partners-center-name">Nissim Lehyani</div>
              <div class="resource-partners-center-text">
                Senior Director of Product Management
              </div>
              <div class="home-new-bottom link">
                <span>查看全部案例</span>
                <i class="el-icon-right"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="resource-partners-center">
        <el-row type="flex" justify="center">
          <el-col :xs="23" :sm="22" :md="12" :lg="10">
            <div class="resource-top">
              <div class="intro-head">
                <div class="home-new-title">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/icon-impact.svg"
                    alt="ico-insights"
                  />
                  <span>相比冷钱包</span>
                </div>
              </div>
              <h3 class="bass-h3">使用IBAX将为你带来哪些收获</h3>
              <p data-transition-delay="0.3s" style="transition-delay: 0.3s">
                这些问题是开发者所面临是实际问题，通过IBAX你将轻松面对。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="resource-partners-box">
        <el-row type="flex" justify="center">
          <el-col :xs="23" :sm="22" :md="20" :lg="18">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="11">
                <div class="resource-partners-box-content">
                  <div class="resource-partners-box-left">
                    <h4 class="bass-h4">开发门槛</h4>
                    <p class="resource-partners-box-left-text">
                      每个开发团队都希望用最少的人力完成自己的创意，IBAX网络会为你提供完善的开发文档，你可以在这里创建你想命名的生态应用，同时我们提供的在线BaaS系统中还支持智能合约的在线编辑。
                    </p>
                    <div class="resource-partners-box-left-name">
                      <p>姓名</p>
                      <p>研发总监</p>
                    </div>
                    <div class="home-new-bottom link">
                      <span>查看更多资料</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="resource-partners-box-right">
                    <div class="resource-partners-box-right-percent">15%</div>
                    <div>节省开发时间</div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="resource-partners-box-content">
                  <div class="resource-partners-box-left">
                    <h4 class="bass-h4">降低费用</h4>
                    <p class="resource-partners-box-left-text">
                      我们已经注意到，很多优秀的开发团队因为某些链手续费过高的问题大受打击。而BAX网络具有高执行效率和高区块容量的特性，因此在IBAX宽阔的网络中交易费用是极为低廉的。
                    </p>
                    <div class="resource-partners-box-left-name">
                      <p>姓名</p>
                      <p>运营总监</p>
                    </div>
                    <div class="home-new-bottom link">
                      <span>获得更多帮助</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="resource-partners-box-right">
                    <div class="resource-partners-box-right-percent">80%</div>
                    <div>减少手续费</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="container">
              <h5 class="bass-h5">Awards and accolades</h5>
              <ul class="list">
                <li>
                  <div class="card-award">
                    <div class="logo">
                      <img
                        src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/logo-combinator-2.png"
                        class=""
                        width="134"
                        alt=""
                      />
                    </div>
                    <ul>
                      <li>Top Companies List, 2021</li>
                    </ul>
                  </div>
                </li>
                <li
                  data-transition-delay="0.15s"
                  style="transition-delay: 0.15s"
                >
                  <div class="card-award">
                    <div class="logo">
                      <img
                        src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/g2-crowd@2x.png"
                        class=""
                        width="118"
                        alt=""
                      />
                    </div>
                    <ul>
                      <li>Top Rated Analytics Solution, 2021</li>
                    </ul>
                  </div>
                </li>
                <li data-transition-delay="0.3s" style="transition-delay: 0.3s">
                  <div class="card-award">
                    <div class="logo">
                      <img
                        src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/SASCS19_Gold_Winner-1.svg"
                        class=""
                        width="118"
                        alt=""
                      />
                    </div>
                    <ul>
                      <li>Customer Service Department of the Year</li>
                    </ul>
                  </div>
                </li>
                <li
                  data-transition-delay="0.44999999999999996s"
                  style="transition-delay: 0.45s"
                >
                  <div class="card-award">
                    <div class="logo">
                      <img
                        src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/trust-radius-logo@2x.png"
                        class=""
                        width="54"
                        alt=""
                      />
                    </div>
                    <ul>
                      <li>Top Rated Web Analytics Tools for 2019</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isOpen: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleIsopen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
