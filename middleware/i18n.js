/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description
 * @Date: 2019-04-11 09:27:56
 * @LastEditTime: 2021-08-17 17:57:28
 */
import { handleGetLang } from '../assets/js/public.js';
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  const defaultLocale = app.i18n.fallbackLocale;
  if (isHMR) return;
  const lang = handleGetLang();
  store.commit('handleChangeLang', lang);
  app.i18n.locale = lang;
  if (
    lang === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '');
    const zh = new RegExp(toReplace);
    return redirect(route.fullPath.replace(zh, '/'));
  }
}
