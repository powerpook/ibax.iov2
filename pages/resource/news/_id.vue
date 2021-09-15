<!--
 * @Author: abc
 * @Date: 2021-08-26 14:35:27
 * @LastEditors: abc
 * @LastEditTime: 2021-09-14 18:27:23
 * @Description: news  news
-->
<template>
  <el-row type="flex" justify="center">
    <el-col :sm="22" :lg="16" :md="20">
      <div class="lead-img" v-html="objNews.icon"></div>
      <div class="inner">
        <div class="news-content" v-html="objNews.content"></div>
      </div>
      <div class="news-articles">
        <h2 class="news-articles-h2">相关文章</h2>
        <div class="news-content">
          <div v-for="i in 3" :key="i" class="news-content-item">
            <nuxt-link
              :to="{ name: 'resource-news-id', params: { id: i } }"
              class="news-content-item-card"
            >
              <div class="news-content-item-img">
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Mixpanel-Implementation-Final-Compressed.jpg"
                  class="attachment-full"
                  alt="Mixpanel-Implementation-Final-Compressed"
                />
              </div>
              <div class="news-content-item-text">
                <strong class="subtitle">Product Foundations</strong>
                <h4 class="news-articles-h4">
                  How to protect customer data while running smarter A/B tests
                </h4>
                <p>
                  How long does it take to implement Mixpanel? A 3-step
                  evaluation
                </p>
              </div>
              <div class="blog-cite">
                <a
                  href="https://mixpanel.com/blog/author/natasha-wahid/"
                  class="blog-cite-a"
                >
                  <div class="avatar">
                    <img
                      src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/Natasha_HS-e1629333888646.jpeg"
                      alt=""
                    />
                  </div>
                  <div class="per-info">
                    <strong class="name">Natasha Wahid</strong>
                    <span class="designation">AB Tasty</span>
                  </div>
                </a>
              </div>
            </nuxt-link>
          </div>
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
    return {};
  },
  head() {
    return {
      title: ` ${this.objNews.title} - 深圳智乾 | 深圳智乾区块链`,
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
  created() {},
  mounted() {},
  methods: {}
};
</script>
