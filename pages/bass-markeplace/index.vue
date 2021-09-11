<!--
 * @Author: abc
 * @Date: 2021-08-19 12:24:26
 * @LastEditors: abc
 * @LastEditTime: 2021-09-10 12:01:40
 * @Description: 
-->
<template>
  <div class="bass">
    <div style="background: #274235">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <div class="bass-top">
            {{ $t('bass.anyone') }}
            <h1 class="bass-h1">{{ $t('bass.create') }}</h1>
          </div>
          <div class="bass-top-warp">
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-top-box">
                  <div class="bass-top-box-title">{{ $t('bass.quickly') }}</div>
                  <div class="bass-top-box-content">
                    <h2 class="bass-h2">{{ $t('bass.ecology') }}</h2>
                    <p class="bass-top-box-content-text">
                      {{ $t('bass.without') }}
                    </p>
                    <div class="bass-top-box-content-btn">
                      <a
                        href="https://weaver.ibax.io/"
                        target="_blank"
                        class="btn btn-primary"
                        >{{ $t('bass.ecolog') }}</a
                      >
                    </div>
                    <div class="bass-top-box-content-blod">
                      {{ $t('bass.creator') }}
                    </div>
                    <div class="bass-top-box-content-line">
                      <span> {{ $t('bass.obtain') }} </span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.define') }}</span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.set') }}</span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.give') }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-top-box">
                  <div class="bass-top-box-title">
                    {{ $t('bass.circulation') }}
                  </div>
                  <div class="bass-top-box-content">
                    <h2 class="bass-h2">{{ $t('bass.issue') }}</h2>
                    <p class="bass-top-box-content-text">
                      {{ $t('bass.customize') }}
                    </p>
                    <div class="bass-top-box-content-btn">
                      <a
                        href="https://weaver.ibax.io/"
                        target="_blank"
                        class="btn btn-primary"
                      >
                        {{ $t('bass.issuance') }}
                      </a>
                    </div>
                    <div class="bass-top-box-content-blod">
                      {{ $t('bass.can') }}
                    </div>
                    <div class="bass-top-box-content-line">
                      <span> {{ $t('bass.naming') }} </span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.logo') }}</span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.number') }}</span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.incentives') }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-top-box">
                  <div class="bass-top-box-title">{{ $t('bass.smart') }}</div>
                  <div class="bass-top-box-content">
                    <h2 class="bass-h2">{{ $t('bass.contract') }}</h2>
                    <p class="bass-top-box-content-text">
                      {{ $t('bass.use') }}
                    </p>
                    <div class="bass-top-box-content-btn">
                      <a
                        href="https://weaver.ibax.io/"
                        target="_blank"
                        class="btn btn-primary"
                      >
                        {{ $t('bass.add') }}
                      </a>
                    </div>
                    <div class="bass-top-box-content-blod">
                      {{ $t('bass.one') }}
                    </div>
                    <div class="bass-top-box-content-line">
                      <span> {{ $t('bass.reference') }} </span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.write') }}</span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.eco') }}</span>
                    </div>
                    <div class="bass-top-box-content-line">
                      <span>{{ $t('bass.manage') }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="bass-top-warp-box">
              <el-row type="flex" justify="space-between" align="middle">
                <el-col :xs="23" :lg="17">
                  <h4 class="bass-h4">{{ $t('bass.incentive') }}</h4>
                  <div>
                    {{ $t('bass.encourages') }}
                  </div>
                </el-col>
                <el-col :xs="23" :lg="4">
                  <nuxt-link
                    to="/bass-markeplace/ecolibs"
                    class="btn btn-primary"
                    >{{ $t('bass.learn') }}</nuxt-link
                  >
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bass-white">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="bass-white-content">
            <strong class="block-title lg">{{ $t('bass.what') }}</strong>
            <h2 class="bass-h2">{{ $t('bass.how') }}</h2>
            <p>{{ $t('bass.materials') }}</p>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i
                        class="bass-white-icon iconfont el-a-customerservice"
                      ></i>
                      {{ $t('bass.manual') }}
                    </h4>
                    <p>{{ $t('market.help') }}</p>
                  </div>
                  <div class="bass-white-bottom">
                    <span>{{ $t('market.view') }}</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i class="bass-white-icon iconfont el-video"> </i>
                      {{ $t('market.video') }}
                    </h4>
                    <p>{{ $t('market.watch') }}</p>
                  </div>
                  <div class="bass-white-bottom">
                    <span>{{ $t('market.view') }}</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="bass-white-apply">
            <h2 class="bass-h2">{{ $t('market.application') }}</h2>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.token') }}</h5>
                  <p>
                    {{ $t('market.create') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.point') }}</h5>
                  <p>
                    {{ $t('market.each') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.vote') }}</h5>
                  <p>
                    {{ $t('market.multiple') }}
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.supply') }}</h5>
                  <p>
                    {{ $t('market.provide') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.defi') }}</h5>
                  <p>
                    {{ $t('market.the') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.member') }}</h5>
                  <p>
                    {{ $t('market.govern') }}
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.network') }}</h5>
                  <p>
                    {{ $t('market.display') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.cyber') }}</h5>
                  <p>
                    {{ $t('market.secure') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.decentralized') }}</h5>
                  <p>
                    {{ $t('market.chat') }}
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bass-answer">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h2 class="bass-h2">{{ $t('market.asked') }}</h2>
          <h6 class="home-new-bottom">
            <span>{{ $t('market.more') }}</span>
            <i class="el-icon-right"></i>
          </h6>
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
            <el-col
              v-for="(item, index) in arrAsked"
              :key="index"
              :xs="23"
              :lg="11"
            >
              <h4 class="bass-h4">{{ $t(item.title) }}</h4>
              <p>
                {{ $t(item.contentOne) }}
              </p>
              <p v-if="item.contentTwo">
                {{ $t(item.contentTwo) }}
              </p>
              <p v-if="item.contentThree">
                {{ $t(item.contentThree) }}
              </p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <page-bottom class="gray" :obj="obj">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a
            href="https://weaver.ibax.io/"
            target="_blank"
            class="btn btn-primary"
            >{{ $t('footer.now') }}</a
          >
          <nuxt-link
            v-if="obj.path === '/about'"
            :to="obj.path"
            class="btn btn-default"
            >{{ $t(obj.text) }}</nuxt-link
          >
          <a v-else :href="obj.path" target="_blank" class="btn btn-default">{{
            $t(obj.text)
          }}</a>
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
      arrAsked: [
        {
          title: 'market.real',
          contentOne: 'market.exist',
          contentTwo: 'market.public'
        },
        {
          title: 'market.low',
          contentOne: 'market.has'
        },
        {
          title: 'market.ia',
          contentOne: 'market.integrate'
        },
        {
          title: 'market.built',
          contentOne: 'market.one',
          contentTwo: 'market.two',
          contentThree: 'market.three'
        }
      ],
      obj: {
        title: 'bass.now',
        label: 'footer.fast',
        text: 'nav.about',
        path: '/about'
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
