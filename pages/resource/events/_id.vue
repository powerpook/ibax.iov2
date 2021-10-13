<!--
 * @Author: abc
 * @Date: 2021-09-28 16:09:11
 * @LastEditors: abc
 * @LastEditTime: 2021-10-13 18:41:59
 * @Description: 
-->
<template>
  <div class="events">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="10">
              <strong class="block-title animated fadeInUp">
                {{
                  objEvents.type === 1
                    ? $t('events.home')
                    : objEvents.type === 2
                    ? $t('events.future')
                    : $t('events.marvellous')
                }}
              </strong>
              <h3 class="title-h3 animated fadeInUp">
                {{ objEvents.name }}
              </h3>
              <p class="events-text animated fadeInUp">
                <i class="iconfont el-xingzhuang"></i>
                <span>{{ dayjs(objEvents.start_time).format('LLL') }}</span>
              </p>
              <p class="events-text animated fadeInUp">
                <i class="iconfont el-shizhongclock77"></i>
                <span>{{
                  dayjs(objEvents.stop_time).diff(new Date(), 'hour')
                }}</span>
                Hour
              </p>
              <p class="events-text animated fadeInUp">
                {{ objEvents.introduction }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="10">
              <div class="home-new-img">
                <img :src="objEvents.icon" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="events-details">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="16" :md="20">
          <strong class="events-test-title">{{ $t('events.act') }}</strong>
          <div class="events-articles">
            <div class="news-box" v-html="objEvents.content"></div>
          </div>
          <strong class="events-test-title">{{ $t('events.much') }}</strong>
          <h2 class="news-articles-h2">{{ $t('events.content') }}</h2>

          <div class="events-more-content">
            <div v-if="arrEvents.length === 0" class="news-no wow fadeInUp">
              {{ $t('resourse.no') }}
            </div>
            <template v-else>
              <div
                v-for="item in arrEvents"
                :key="item.id"
                class="events-more-content-item"
              >
                <nuxt-link
                  :to="{
                    name: 'resource-events-id',
                    params: { id: item.id }
                  }"
                  class="od-card"
                >
                  <div class="od-card-img wow fadeInUp">
                    <!--  <span class="duration">60mins</span> -->
                    <img
                      :src="item.icon"
                      class="attachment-full"
                      alt="Inside MP"
                    />
                  </div>
                  <div class="text-wrap">
                    <p class="wow fadeInUp">
                      {{ item.introduction }}
                    </p>
                  </div>
                  <div class="home-new-bottom link wow fadeInUp">
                    <span>Watch Now</span>
                    <i class="el-icon-right"></i>
                  </div>
                </nuxt-link>
              </div>
            </template>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="events-email">
      <h4 class="title-h4">{{ $t('events.follow') }}</h4>
      <div class="news-select-box">
        <el-input
          v-model="obj.email"
          type="email"
          clearable
          :placeholder="$t('events.address')"
        >
        </el-input>
      </div>
      <div class="btn btn-primary" @click="handleSendEmail">
        {{ $t('events.now') }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  async asyncData({ app, params, router }) {
    console.log(params);
    const newsData = await app.$axios.$get(`events/${params.id}`);
    console.log(JSON.stringify(newsData));
    let objEvents = '';
    if (newsData && newsData.code === 0) {
      objEvents = newsData.data;
    } else {
      objEvents = '';
    }
    return {
      objEvents
    };
  },
  data() {
    return {
      obj: {
        email: ''
      },
      arrEvents: []
    };
  },
  head() {
    return {
      title: ` ${this.objEvents.name} - IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.objEvents.keywords
        },
        {
          hid: 'description',
          name: 'description',
          content: this.objEvents.introduction
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.objEvents.introduction
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleArrEvents();
  },
  mounted() {},
  methods: {
    handleKeywords() {},
    async handleSendEmail() {
      const params = this.obj;
      const res = await this.$axios.$post(`/get_email`, params);
      if (res.code === 0) {
        this.$message({
          showClose: true,
          message: res.message,
          type: 'success'
        });
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: 'warning'
        });
      }
    },
    async handleArrEvents() {
      const res = await this.$axios.$get('/eventsrandow');
      const { data } = res;
      if (res.code === 0) {
        this.arrEvents = data.rets;
        console.log(JSON.stringify(this.arrEvents));
      }
    }
  }
};
</script>
