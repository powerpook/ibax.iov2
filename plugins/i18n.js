/*
 * @Author: renlei
 * @Date: 2019-11-08 15:06:37
 * @LastEditors: abc
 * @LastEditTime: 2021-10-18 15:02:28
 * @Description
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
// element langage setting
import zhCN from 'element-ui/lib/locale/lang/zh-CN';
import zhTW from 'element-ui/lib/locale/lang/zh-TW';
import zhBG from 'element-ui/lib/locale/lang/en';
import { handleGetLang } from '../assets/js/public.js';
const en = require('@/lang/en-us.json');
const zh = require('@/lang/zh-cn.json');
const tw = require('@/lang/zh-tw.json');
const serverEn = require('@/lang/server-us.json');
const serverZh = require('@/lang/server-cn.json');
const serverTw = require('@/lang/server-tw.json');
const mergeZH = Object.assign({}, zhCN, zh, serverZh);
const mergeEN = Object.assign({}, zhBG, en, serverEn);
const mergeTW = Object.assign({}, zhTW, tw, serverTw);
Vue.use(VueI18n);
export default ({ app, store }) => {
  let strLang = handleGetLang();
  if (handleGetLang()) {
    strLang = handleGetLang();
  } else {
    strLang = store.state.lang;
  }
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: strLang,
    fallbackLocale: strLang,
    messages: {
      en: mergeEN,
      zh: mergeZH,
      tw: mergeTW
    },
    silentTranslationWarn: true
  });
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};
