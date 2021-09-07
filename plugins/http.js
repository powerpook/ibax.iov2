/*
 * @Author: abc
 * @Date: 2021-01-08 14:39:29
 * @LastEditors: abc
 * @LastEditTime: 2021-08-30 17:57:46
 * @Description:axios 配置
 */
import { Message } from 'element-ui';
// import qs from "qs";
export default function ({ $axios, redirect, store }) {
  $axios.onRequest(
    (config) => {
      config.headers['Content-Type'] = 'application/json';
      config.headers.Accept = 'application/json';
      config.retry = 4;
      config.retryDelay = 1000;
      config.timeout = 60000;
      return config;
    },
    (err) => {
      Message.error({ content: err.message });
    }
  );
  $axios.onResponse((response) => {
    // console.log(response);
    // response.data.errCode是接口返回的值，如果值为401，登录过期，然后跳转到登录页，
    // if (response.data.code == 401) {
    //   store.commit("handleIsLogin", true);
    // }
    return response.data;
  });
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    // console.log(code);
    Message.error({
      content: `Data call error, status code：${code}`,
      duration: 0,
      showClose: true
    });
  });
}
