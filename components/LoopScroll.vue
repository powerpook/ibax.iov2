<!--
 * @Author: abc
 * @Date: 2021-08-18 17:07:29
 * @LastEditors: abc
 * @LastEditTime: 2021-08-18 18:06:28
 * @Description: 
-->
<template>
  <div class="content">
    <div id="static_big_box">
      <div id="runing_box">
        <a href="" target="_blank">没有字怎么可以滚动？1</a>
        <a href="" target="_blank">没有字怎么可以滚动？2</a>
        <a href="" target="_blank">没有字怎么可以滚动？3</a>
        <a href="" target="_blank">没有字怎么可以滚动？4</a>
        <a href="" target="_blank">没有字怎么可以滚动？5</a>
        <a href="" target="_blank">没有字怎么可以滚动？6</a>
        <a href="" target="_blank">没有字怎么可以滚动？7</a>
        <a href="" target="_blank">没有字怎么可以滚动？8</a>
        <a href="" target="_blank">没有字怎么可以滚动？9</a>
        <a href="" target="_blank">没有字怎么可以滚动？10</a>
        <a href="" target="_blank">没有字怎么可以滚动？11</a>
        <a href="" target="_blank">没有字怎么可以滚动？12</a>
        <a href="" target="_blank">没有字怎么可以滚动？13</a>
        <a href="" target="_blank">没有字怎么可以滚动？14</a>
        <a href="" target="_blank">没有字怎么可以滚动？15</a>
        <a href="" target="_blank">有字才可以滚动34</a>
        <a href="" target="_blank">有字才可以滚动35</a>
        <a href="" target="_blank">有字才可以滚动36</a>
        <a href="" target="_blank">有字才可以滚动37</a>
        <a href="" target="_blank">有字才可以滚动38</a>
        <a href="" target="_blank">有字才可以滚动39</a>
        <a href="" target="_blank">有字才可以滚动40</a>
        <a href="" target="_blank">有字才可以滚动41</a>
        <a href="" target="_blank">有字才可以滚动42</a>
        <a href="" target="_blank">有字才可以滚动43</a>
        <a href="" target="_blank">有字才可以滚动44</a>
        <a href="" target="_blank">有字才可以滚动45</a>
        <a href="" target="_blank">有字才可以滚动46</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: () => 'left'
    },
    speed: {
      type: Number,
      default: () => 10
    },
    mouseStop: {
      type: Boolean,
      default: () => false
    },
    index: {
      type: Number,
      default: () => 1
    }
  },
  data() {
    return {
      i: 0,
      timer: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  mounted() {
    const boxObj = document.getElementById('runing_box');
    this.distance =
      boxObj.width ||
      boxObj.clientWidth ||
      boxObj.offsetWidth ||
      boxObj.scrollWidth;
    this.handleStartLoop(boxObj, this.distance);
  },
  methods: {
    handleStartLoop(dom, distance) {
      if (dom) {
        this.i--;
        // eslint-disable-next-line prefer-const
        console.log(this.i, distance);
        if (this.i <= -distance) {
          this.i = 2 * distance;
          dom.style.right = -distance + 'px';
        } else {
          // eslint-disable-next-line prefer-const
          let nowLeft = this.i >= distance ? this.i - distance : this.i;
          dom.style.left = nowLeft + 'px';
        }
        this.timer = setTimeout(() => {
          this.handleStartLoop(dom, distance);
        }, 10);
      }
    }
  }
};
</script>
<style>
#static_big_box {
  position: relative;
  width: 900px;
  margin: 0 auto;
  height: 30px;
  line-height: 30px;
  padding-right: 65px;
  overflow: hidden;
}
#runing_box {
  position: absolute;
  height: 30px;
  line-height: 30px;
  top: 0;
  left: 0;
}
#runing_box a {
  color: #fff;
  margin-left: 8px;
}
#runing_box a:hover {
  color: #57bc54;
}
.content {
  background: #333;
}
</style>
