<!--
 * @Author: abc
 * @Date: 2021-08-19 12:24:26
 * @LastEditors: abc
 * @LastEditTime: 2021-09-06 17:15:04
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
                    <p>详细的文档帮助文档帮你快速丰富应用内容</p>
                  </div>
                  <div class="bass-white-bottom">
                    <span>查看详情</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-h4">
                      <i
                        class="bass-white-icon iconfont el-a-customerservice"
                      ></i
                      >BaaS演示视频
                    </h4>
                    <p>观看BaaS系统操作视频，了解系统内容，知查看实施步骤</p>
                  </div>
                  <div class="bass-white-bottom">
                    <span>查看详情</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="bass-white-apply">
            <h2 class="bass-h2">BaaS应用</h2>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">聊天</h5>
                  <p>
                    查看聊天记录，显示当前生态内有关自身的所有聊天记录。发起一对一聊天，私密内容不会被外界知悉。支持群组聊天功能，大家畅所欲言，分享彼此观点。
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">消息通知</h5>
                  <p>
                    链上消息具有自动推送功能，显示当前生态内有关自身的所有通知，让你不错过重要的通知。
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">投票</h5>
                  <p>
                    提供多个投票模版，包括联合网络加入模版、修改平台参数模版、修改生态参数模版、通证退还模版、生态价值认证模版、普通表决模版。包括修改上述模版参数的模版，支持自定义发起投票
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">聊天</h5>
                  <p>
                    查看聊天记录，显示当前生态内有关自身的所有聊天记录。发起一对一聊天，私密内容不会被外界知悉。支持群组聊天功能，大家畅所欲言，分享彼此观点。
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">消息通知</h5>
                  <p>
                    链上消息具有自动推送功能，显示当前生态内有关自身的所有通知，让你不错过重要的通知。
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">投票</h5>
                  <p>
                    提供多个投票模版，包括联合网络加入模版、修改平台参数模版、修改生态参数模版、通证退还模版、生态价值认证模版、普通表决模版。包括修改上述模版参数的模版，支持自定义发起投票
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">聊天</h5>
                  <p>
                    查看聊天记录，显示当前生态内有关自身的所有聊天记录。发起一对一聊天，私密内容不会被外界知悉。支持群组聊天功能，大家畅所欲言，分享彼此观点。
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">消息通知</h5>
                  <p>
                    链上消息具有自动推送功能，显示当前生态内有关自身的所有通知，让你不错过重要的通知。
                  </p>
                </div>
              </el-col>
              <el-col :xs="23" :lg="7">
                <div class="bass-white-three">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">投票</h5>
                  <p>
                    提供多个投票模版，包括联合网络加入模版、修改平台参数模版、修改生态参数模版、通证退还模版、生态价值认证模版、普通表决模版。包括修改上述模版参数的模版，支持自定义发起投票
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
          <h2 class="bass-h2">常见问题解答</h2>
          <h6 class="home-new-bottom">
            <span>查看更多的问题答疑</span>
            <i class="el-icon-right"></i>
          </h6>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="11">
              <h4 class="bass-h4">Heading 3</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
            </el-col>
            <el-col :xs="23" :lg="11">
              <h4 class="bass-h4">Heading 3</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :xs="23" :lg="11">
              <h4 class="bass-h4">Heading 3</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
            </el-col>
            <el-col :xs="23" :lg="11">
              <h4 class="bass-h4">Heading 3</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <page-bottom class="gray"></page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
