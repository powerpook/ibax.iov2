/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2021-09-23 10:09:24
 */
import { handleGetLang } from '../assets/js/public';
console.log(handleGetLang());
// console.log(handleGetLang());
export const state = () => ({
  headerColor: '#274235',
  color: '#fff',
  locales: ['zh', 'en', 'tw'],
  lang: handleGetLang(),
  domClass: 'subMenu--horizontal',
  isTop: true,
  isFixed: false,
  isWhite: true
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
  handleChangeClass(state, domClass) {
    state.domClass = domClass;
  },
  handleBoxShadow(state, boxShadow) {
    state.boxShadow = boxShadow;
  },
  handleIsTop(state, boo) {
    state.isTop = boo;
  },
  handleIsFixed(state, boo) {
    state.isFixed = boo;
  },
  handleIsWhite(state, boo) {
    state.isWhite = boo;
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
  handlePopperClass(state) {
    const { domClass } = state;
    // console.log(authUser);
    return domClass;
  },
  handleBoxShadow(state) {
    const { boxShadow } = state;
    // console.log(authUser);
    return boxShadow;
  },
  handleIsTop(state) {
    const { isTop } = state;
    return isTop;
  },
  handleIsFixed(state) {
    const { isFixed } = state;
    return isFixed;
  },
  handleIsWhite(state) {
    const { isWhite } = state;
    return isWhite;
  }
};
