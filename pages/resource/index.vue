<!--
 * @Author: abc
 * @Date: 2021-08-19 12:28:14
 * @LastEditors: abc
 * @LastEditTime: 2021-09-01 14:48:39
 * @Description: 
-->
<template>
  <div></div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to);
    if (to.name === 'resource')
      next({
        path: '/resource/team'
      });
    else next();
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
