<!--
 * @Author: abc
 * @Date: 2021-10-19 17:37:58
 * @LastEditors: abc
 * @LastEditTime: 2021-10-19 19:09:01
 * @Description: 
-->
<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="40%"
    :show-close="false"
    custom-class="dialog-box"
    center
  >
    <div slot="title">
      <i class="iconfont el-logo1"></i>
    </div>
    <div class="dialog-box-content">
      <div class="dialog-box-content-title">{{ $t('server.personal') }}</div>
      <ul>
        <li>
          {{ $t('server.our') }}
        </li>
        <li>
          {{ $t('server.processing') }}
        </li>
        <li>
          {{ $t('server.clicking') }}
        </li>
      </ul>
      <!--  <div class="dialog-box-content-title-small">
        {{ $t('server.business') }}
      </div>
      <p class="dialog-box-content-text">
        {{ $t('server.change') }}
      </p> -->
    </div>
    <span slot="footer" class="dialog-footer">
      <!--  <button class="btn btn-other" @click="handleDialogVisible">
        {{ $t('server.disagree') }}
      </button> -->
      <button class="btn btn-lime" @click="handleDialogVisible">
        {{ $t('server.agree') }}&nbsp;
        <span>{{ second }}s</span>
      </button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      dialogVisible: false,
      second: 5,
      timer: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleTime();
  },
  mounted() {
    this.$nextTick(() => {
      const dialogVisible = localStorage.getItem('dialogVisible');
      if (dialogVisible) {
        this.dialogVisible = false;
      } else {
        this.dialogVisible = true;
      }
    });
  },
  methods: {
    handleTime() {
      if (this.second <= 0) {
        this.dialogVisible = false;
        clearTimeout(this.timer);
        this.timer = null;
      } else if (this.second > 0) {
        this.second--;
      }
      this.timer = setTimeout(() => {
        this.handleTime();
      }, 1000);
    },
    handleDialogVisible() {
      this.dialogVisible = false;
      clearTimeout(this.timer);
      localStorage.setItem('dialogVisible', 'no');
    }
  }
};
</script>
