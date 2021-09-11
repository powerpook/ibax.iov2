<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-10 16:31:11
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <h6 class="global-h6">{{$t('solutions.diversified')}}</h6>
              <h2 class="bass-h2">{{$t('solutions.asset')}}</h2>
              <p class="home-new-p">
               {{$t('solutions.credible')}}
              </p>
             <p class="home-new-bottom">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('solutions.watch') }}</a
                >
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-default"
                  >{{ $t('nav.sign') }}</a
                >
              </p>
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
                {{$t('solutions.management')}}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!--   {{ $t('high.compatibility') }} -->
               {{$t('solutions.smart')}}
              </div>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="other-ease">
                <!--  {{ $t('high.ease') }} -->
              {{$t('solutions.real')}}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <p class="home-new-title">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-title-text"> {{$t('solutions.time')}} </span>
              </p>
              <h2 class="bass-h2">{{$t('solutions.management')}}</h2>
              <p>
              {{$t('solutions.including')}}
              </p>
              <div class="home-new-bottom link">
                <span> {{ $t('home.using') }}</span>
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
              {{$t('solutions.risk')}}</span
            >
            <span>{{$t('solutions.structured')}}</span>
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
                    {{$t('solutions.privacy')}}
                  </span>
                </p>
                <h2 class="bass-h2"> {{$t('solutions.smart')}}</h2>
                <p>
                   {{$t('solutions.realize')}}
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
                  <span class="home-new-title-text">  {{$t('solutions.second')}} </span>
                </p>
                <h2 class="bass-h2"> {{$t('solutions.real')}}</h2>
                <p>
                   {{$t('solutions.relying')}}
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
          <a class="btn btn-primary"> {{ $t('solutions.demo') }}</a>
          <a class="btn btn-default"> {{ $t('nav.sign') }}</a>
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
