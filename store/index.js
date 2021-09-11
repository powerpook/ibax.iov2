/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2021-09-10 14:46:47
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
    // console.log(authUser);
    return lang;
  }
};
