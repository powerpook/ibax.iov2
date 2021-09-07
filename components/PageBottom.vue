<!--
 * @Author: abc
 * @Date: 2021-08-23 14:22:23
 * @LastEditors: abc
 * @LastEditTime: 2021-09-01 16:35:32
 * @Description: 
-->
<template>
  <!-- bottom -->
  <div class="cta">
    <div class="container">
      <h1 v-if="obj.path === '/about'">{{ $t(obj.title) }}</h1>
      <h1 v-else>{{ $t(obj.title) }}</h1>
      <div class="text-wrap">
        <p v-if="obj.path === '/about'">
          {{ $t(obj.label) }}
        </p>
        <p v-else>
          {{ $t(obj.label) }}
        </p>
      </div>
      <slot v-if="$slots.btn" name="btn"> </slot>
      <div v-else class="btns-list">
        <a
          href="https://weaver.ibax.io/"
          target="_blank"
          class="btn btn-primary"
          >{{ $t('footer.now') }}</a
        >
        <nuxt-link
          v-if="obj.path === '/about'"
          :to="obj.path"
          class="btn btn-default"
          >{{ $t(obj.text) }}</nuxt-link
        >
        <a v-else :href="obj.path" target="_blank" class="btn btn-default">{{
          $t(obj.text)
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {
          title: 'footer.create',
          label: 'footer.fast',
          text: 'footer.check',
          path: 'https://github.com/IBAX-io/documentation'
        };
      }
    }
  },
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
