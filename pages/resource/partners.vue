<!--
 * @Author: abc
 * @Date: 2021-08-24 16:43:39
 * @LastEditors: abc
 * @LastEditTime: 2021-09-10 19:08:36
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
                <strong class="resource-box-btn">{{
                  $t('resourse.case')
                }}</strong>
                <h2 class="bass-h2">{{ $t('resourse.gains') }}</h2>
                <p>
                  {{ $t('resourse.used') }}
                </p>
                <div class="resource-top-bottom">
                  <button class="btn btn-primary">
                    {{ $t('resourse.story') }}
                  </button>
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
            {{ $t('resourse.excellent') }}
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
                <h2 class="bass-h3">{{ $t('resourse.learn') }}</h2>
              </el-col>
              <el-col :xs="23" :lg="12">
                <span>{{ $t('resourse.compatible') }}</span>
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
              <h4 class="bass-h4">{{ $t('resourse.name') }}</h4>
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
                <span>{{ $t('resourse.cases') }}</span>
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
                  <span>{{ $t('resourse.advantage') }}</span>
                </div>
              </div>
              <h3 class="bass-h3">{{ $t('resourse.gain') }}</h3>
              <p data-transition-delay="0.3s" style="transition-delay: 0.3s">
                {{ $t('resourse.problems') }}
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
                    <h4 class="bass-h4">{{ $t('resourse.threshold') }}</h4>
                    <p class="resource-partners-box-left-text">
                      {{ $t('resourse.every') }}
                    </p>
                    <div class="resource-partners-box-left-name">
                      <p>{{ $t('resourse.names') }}</p>
                      <p>{{ $t('resourse.d') }}</p>
                    </div>
                    <div class="home-new-bottom link">
                      <span>{{ $t('resourse.information') }}</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="resource-partners-box-right">
                    <div class="resource-partners-box-right-percent">50%</div>
                    <div>{{ $t('resourse.time') }}</div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="resource-partners-box-content">
                  <div class="resource-partners-box-left">
                    <h4 class="bass-h4">{{ $t('resourse.cost') }}</h4>
                    <p class="resource-partners-box-left-text">
                      {{ $t('resourse.noticed') }}
                    </p>
                    <div class="resource-partners-box-left-name">
                      <p>{{ $t('resourse.names') }}</p>
                      <p>{{ $t('resourse.operations') }}</p>
                    </div>
                    <div class="home-new-bottom link">
                      <span>{{ $t('resourse.help') }}</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="resource-partners-box-right">
                    <div class="resource-partners-box-right-percent">80%</div>
                    <div>{{ $t('resourse.handling') }}</div>
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
    <page-bottom class="lime" :obj="obj"></page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isOpen: false,
      obj: {
        path: '/about',
        text: 'nav.about',
        label: 'footer.compete',
        title: 'footer.creative'
      }
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
