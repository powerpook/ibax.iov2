<!--
 * @Author: abc
 * @Date: 2021-08-24 16:15:10
 * @LastEditors: abc
 * @LastEditTime: 2021-09-13 14:31:48
 * @Description: news
-->
<template>
  <div class="news">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="news-header">
          <h2 class="news-h2">{{ $t('resourse.news') }}</h2>
          <p>{{ $t('resourse.follow') }}</p>
        </div>
        <div class="news-select">
          <div class="news-select-box">
            <el-select v-model="topics" placeholder="来源">
              <el-option
                v-for="item in arrTopics"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="type"
              placeholder="类型"
              class="news-select-box-second"
            >
              <el-option
                v-for="item in arrType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="news-select-box">
            <el-input v-model="input" type="text" placeholder="搜索">
              <template #prefix>
                <i class="el-icon-search"></i>
              </template>
            </el-input>
          </div>
        </div>
        <div class="news-content">
          <div v-for="i in 6" :key="i" class="news-content-item">
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
                <strong class="subtitle">Blog</strong>
                <p>
                  How long does it take to implement Mixpanel? A 3-step
                  evaluation
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="news-content">
          <div class="news-content-helf">
            <div class="news-content-item-img">
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Blog-Image-1-1.png"
                class="attachment-full"
                alt="Blog-Image 1"
              />
            </div>
          </div>
          <div class="news-content-helf">
            <div class="inner">
              <strong class="subtitle">Ebook</strong>
              <h3>Guide to Product Analytics</h3>
              <p>A book of questions and answers.</p>
              <div class="home-new-bottom link">
                <span>Read now </span><i class="el-icon-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="news-content">
          <div v-for="i in 9" :key="i" class="news-content-item">
            <a
              href="https://mixpanel.com/blog/how-long-does-it-take-to-implement-mixpanel-a-3-step-evaluation/"
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
                <strong class="subtitle">Blog</strong>
                <p>
                  How long does it take to implement Mixpanel? A 3-step
                  evaluation
                </p>
              </div>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  layout: 'details',
  props: {},
  data() {
    return {
      input: '',
      isAppend: false,
      arrTopics: [
        {
          value: '1',
          label: '官方'
        },
        {
          value: '2',
          label: '脸书'
        },
        {
          value: '3',
          label: '推特'
        },
        {
          value: '4',
          label: '社区'
        }
      ],
      topics: '',
      arrType: [
        {
          value: '1',
          label: '技术相关'
        },
        {
          value: '2',
          label: '生态相关'
        },
        {
          value: '3',
          label: '活动相关'
        }
      ],
      type: ''
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
