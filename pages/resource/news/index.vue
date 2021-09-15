<!--
 * @Author: abc
 * @Date: 2021-08-24 16:15:10
 * @LastEditors: abc
 * @LastEditTime: 2021-09-14 18:46:38
 * @Description: news
-->
<template>
  <div class="news">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="16">
        <div class="news-header">
          <h2 class="news-h2">{{ $t('resourse.news') }}</h2>
          <p>{{ $t('resourse.follow') }}</p>
        </div>
        <div class="news-select">
          <div class="news-select-box">
            <el-select v-model="topics" :placeholder="$t('resourse.source')">
              <el-option
                v-for="item in arrTopics"
                :key="item.value"
                :label="$t(item.label)"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="type"
              :placeholder="$t('resourse.type')"
              class="news-select-box-second"
            >
              <el-option
                v-for="item in arrType"
                :key="item.value"
                :label="$t(item.label)"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="news-select-box">
            <el-input
              v-model="input"
              type="text"
              :placeholder="$t('resourse.search')"
            >
              <template #prefix>
                <i class="el-icon-search"></i>
              </template>
            </el-input>
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
          <div v-for="item in arrNews" :key="item.id" class="news-content-item">
            <nuxt-link
              :to="{ name: 'resource-news-id', params: { id: item.id } }"
              class="news-content-item-card"
            >
              <div class="news-content-item-img" v-html="item.icon"></div>
              <div class="news-content-item-text">
                <strong class="subtitle">
                  {{ $t(`${handleType(item.type)}`) }}
                </strong>
                <p>
                  {{ item.title }}
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="news-page">
          <el-pagination
            :page-size="pageParams.limit"
            layout="prev, pager, next"
            :total="pageParams.total"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      input: '',
      isAppend: false,
      arrTopics: [
        {
          value: 1,
          label: 'resourse.official'
        },
        {
          value: 2,
          label: 'resourse.facebook'
        },
        {
          value: 3,
          label: 'resourse.twitter'
        },
        {
          value: 4,
          label: 'resourse.community'
        }
      ],
      topics: '',
      arrType: [
        {
          value: 1,
          label: 'resourse.technology'
        },
        {
          value: 2,
          label: 'resourse.ecologically'
        },
        {
          value: 3,
          label: 'resourse.activities'
        }
      ],
      type: '',
      params: {
        where: {
          source: '',
          type: '',
          keywords: ''
        },
        page: 1,
        limit: 9
      },
      pageParams: {
        total: 0,
        page: 1,
        limit: 10
      },
      arrNews: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleNewsList(this.params);
  },
  mounted() {},
  methods: {
    async handleNewsList(params) {
      const res = await this.$axios.$post('/newsfind', params);
      const { data } = res;
      console.log(JSON.stringify(data));
      if (res.code === 0) {
        this.pageParams.page = data.page;
        this.pageParams.limit = data.limit;
        this.pageParams.total = data.total;
        this.arrNews = data.rets;
      }
    },
    handleType(val) {
      const obj = this.arrType.find((item) => item.value === val);
      return obj.label;
    },
    handleCurrentChange(page) {
      console.log(page);
    }
  }
};
</script>
