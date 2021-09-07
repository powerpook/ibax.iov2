/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2021-09-07 11:55:38
 */
import { handleGetLang } from '../assets/js/public';
console.log(handleGetLang());
export const state = () => ({
  locales: ['zh', 'en', 'tw'],
  lang: handleGetLang()
});
export const mutations = {
  handleChangeLang(state, lang) {
    if (state.locales.includes(lang)) {
      state.lang = lang;
    }
  }
};
//      store/index.js  ）。
export const actions = {
  // nuxtServerIni Nuxt.j
  async nuxtServerInit({ dispatch, commit }, { req }) {}
};
export const getters = {
  handdleLang(state) {
    const { lang } = state;
    console.log(lang);
    // console.log(authUser);
    return lang;
  }
};
