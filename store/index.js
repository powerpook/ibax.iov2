/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2021-09-15 17:55:01
 */
import { handleGetLang } from '../assets/js/public';
console.log(handleGetLang());
export const state = () => ({
  headerColor: '#274235',
  color: '#fff',
  locales: ['zh', 'en', 'tw'],
  lang: handleGetLang(),
  popperClass: 'subMenu--horizontal'
});
export const mutations = {
  handleChangeLang(state, lang) {
    if (state.locales.includes(lang)) {
      state.lang = lang;
    }
  },
  handleChangeColor(state, { headerColor, color }) {
    state.headerColor = headerColor;
    state.color = color;
  },
  handleChangeClass(state, popperClass) {
    state.popperClass = popperClass;
  }
};

export const actions = {
  // nuxtServerIni Nuxt.j
  async nuxtServerInit({ dispatch, commit }, { req }) {}
};
export const getters = {
  handdleLang(state) {
    const { lang } = state;
    // console.log(authUser);
    return lang;
  },
  handleHeaderColor(state) {
    const { headerColor } = state;
    // console.log(authUser);
    return headerColor;
  },
  handleColor(state) {
    const { color } = state;
    // console.log(authUser);
    return color;
  },
  handdlePopperClass(state) {
    const { popperClass } = state;
    // console.log(authUser);
    return popperClass;
  }
};
