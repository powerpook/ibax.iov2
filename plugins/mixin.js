/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: Vu
 * @Date: 2019-04-12 14:08:12
 * @LastEditTime: 2021-09-14 11:03:46
 */

import Vue from 'vue';
Vue.mixin({
  data() {
    return {
      domGlobal: ''
    };
  },
  methods: {
    handleThrottle(callback, time) {
      if (this.throttleTimer) return;
      this.throttleTimer = true;
      setTimeout(() => {
        callback();
        this.throttleTimer = false;
      }, time);
    },
    $analysis(str, dataArr) {
      const arr = str.match(/\[(.*?)\]/g);
      // console.log(arr);
      const width = '25';
      const height = '25';
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          for (const j in dataArr) {
            if (arr[i] === dataArr[j].phrase) {
              // console.log(dataArr[j].phrase);
              const ex =
                '<img width="' +
                width +
                '" height="' +
                height +
                '" src="' +
                dataArr[j].url +
                '">';
              str = str.replace(arr[i], ex);
              break;
            }
          }
        }
      }
      return str;
    },
    /* og:type 
    og:title 
       og:description 
       og:url 
       og:image 
       og:site_name 
       og:videosrc Flas 
       og:audiosrc  */
    $seo(title, type, content, keyWord, author, robots, payload = []) {
      // console.log(robots);
      return {
        title,
        meta: [
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            property: 'og:site_name',
            content: 'www.haomeren.com'
          },
          {
            hid: 'og:type',
            name: 'og:type',
            property: 'og:type',
            content: type
          },
          {
            hid: 'og:title',
            name: 'og:title',
            property: 'og:title',
            content: title
          },
          {
            hid: 'og:description',
            name: 'og:description',
            property: 'og:description',
            content
          },
          {
            hid: 'author',
            name: 'author',
            property: 'author',
            content: author
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: keyWord
          },
          {
            hid: 'robots',
            name: 'robots',
            content: robots
          }
        ].concat(payload)
      };
    }
  }
});
