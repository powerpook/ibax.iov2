<!--
 * @Author: abc
 * @Date: 2021-08-26 14:35:27
 * @LastEditors: abc
 * @LastEditTime: 2021-10-08 18:34:50
 * @Description: news  news
-->
<template>
  <el-row type="flex" justify="center">
    <el-col :sm="22" :lg="16" :md="20">
      <div class="lead-img">
        <img :src="objNews.icon" alt="banner" />
      </div>
      <div class="inner">
        <h1 class="news-articles-h2">{{ objNews.title }}</h1>
        <div class="news-box" v-html="objNews.content"></div>
      </div>
      <div class="news-articles">
        <h2 class="news-articles-h2">{{ $t('feature.articles') }}</h2>
        <div class="news-content">
          <div v-if="arrNew.length === 0" class="news-no">
            {{ $t('resourse.no') }}
          </div>
          <template v-else>
            <div
              v-for="item in arrNew"
              :key="item.id"
              class="news-content-item"
            >
              <div class="news-content-item-card">
                <nuxt-link
                  :to="{ name: 'resource-news-id', params: { id: item.id } }"
                >
                  <div class="news-content-item-card-img">
                    <img
                      :src="item.icon"
                      class="attachment-full"
                      alt="Mixpanel-Implementation-Final-Compressed"
                    />
                  </div>
                  <div class="news-content-item-text">
                    <strong class="subtitle">{{
                      $t(`${handleType(item.type)}`)
                    }}</strong>
                    <h4 class="news-articles-h4">
                      {{ item.title }}
                    </h4>
                    <p class="news-articles-text">
                      {{ item.introduction.trim() }}
                    </p>
                  </div>
                </nuxt-link>
                <a
                  :href="item.source_url"
                  target="_blank"
                  class="news-content-item-avatar"
                >
                  <img
                    v-if="item.sourceicon"
                    :src="item.sourceicon"
                    alt="sourceicon"
                  />
                  <span v-if="item.source">{{ item.source }}</span>
                </a>
              </div>
            </div>
          </template>
        </div>
        <div class="events-email">
          <h4 class="title-h4">{{ $t('events.follow') }}</h4>
          <div class="news-select-box">
            <el-input
              v-model="email"
              type="email"
              clearable
              :placeholder="$t('events.address')"
              @keyup.enter.native="handleKeywords"
            >
            </el-input>
          </div>
          <div class="btn btn-primary">{{ $t('events.now') }}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  layout: 'newsLayouts',
  validate({ params }) {
    // must number
    return /^\d+$/.test(params.id);
  },
  async asyncData({ app, params, router }) {
    // console.log(params);
    const newsData = await app.$axios.$get(`news/${params.id}`);
    console.log(JSON.stringify(newsData));
    let objNews = '';
    let id = '';
    if (newsData && newsData.code === 0) {
      objNews = newsData.data;
      id = newsData.homeindex;
      // where = newsData.homeenable;
    } else {
      objNews = '';
    }
    return {
      objNews,
      id
    };
  },

  data() {
    return {
      email: '',
      objNews: '',
      arrNew: []
    };
  },
  head() {
    return {
      title: ` ${this.objNews.title} - IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.objNews.keywords
        },
        {
          hid: 'description',
          name: 'description',
          content: this.objNews.introduction
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.objNews.introduction
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleNewsrandow();
  },
  mounted() {},
  methods: {
    async handleNewsrandow() {
      const res = await this.$axios.$get('/newsrandow');
      const { data } = res;
      if (res.code === 0) {
        this.arrNew = data.rets;
        console.log(JSON.stringify(this.arrNew));
      }
    }
  }
};
</script>
