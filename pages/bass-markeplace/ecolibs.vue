<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-09-10 17:20:15
 * @Description: ecolibs
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="23" :lg="12">
              <h6 class="global-h6">{{ $t('market.reward') }}</h6>
              <h3 class="global-h3">{{ $t('market.colorful') }}</h3>
              <p class="home-new-p">
                {{ $t('market.foundation') }}
              </p>
              <p class="home-new-bottom">
                <button class="btn btn-primary">
                  {{ $t('market.join') }}
                </button>
              </p>
            </el-col>
            <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="@/assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div clsss="bass-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
            <el-col
              v-for="(item, index) in arrHeading"
              :key="index"
              :xs="23"
              :lg="10"
            >
              <div class="bass-center-box">
                <div class="bass-center-box-img">
                  <img src="@/assets/image/heart-off.svg" alt="heart-off" />
                </div>
                <div class="bass-center-box-text">
                  <h5 class="bass-h5">
                    {{ $t('market.heading') }} {{ index + 1 }}
                  </h5>
                  <p>
                    {{ $t('market.foundation') }}
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <p class="bass-center-text">
        {{ $t('market.want') }}
      </p>
      <div class="bass-center-img"></div>
    </div>
    <div class="bass-appeared">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="22" :md="20" :lg="18">
          <ul class="bass-list">
            <li v-for="(item, index) in arrImg" :key="index">
              <img :src="item.img" class="attachment-large" :alt="item.alt" />
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="media-b" style="background: #fcfcfc">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h3 class="global-h3">{{ $t('market.creative') }}</h3>
                <p>
                  {{ $t('market.ideas') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="10">
                <div class="home-new-img">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/illustration.svg"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="12">
                <div class="home-new-img">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/boost-funnel-performance.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <h2 class="bass-h2">{{ $t('market.ecological') }}</h2>
                <p>
                  {{ $t('market.development') }}
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mdeia media-a">
      <el-row type="flex" justify="center" style="padding-bottom: 100px">
        <el-col :xs="23" :lg="12">
          <h2 class="bass-h2">
            <a
              href="https://weaver.ibax.io"
              target="_blank"
              style="color: #1f1f24"
            >
              {{ $t('market.wonderful') }}
            </a>
          </h2>
          <p>
            {{ $t('market.blockchain') }}
          </p>
          <div class="global-h6">Simon Hemmrich</div>
          <div class="global-h6">Senior Consultant</div>
          <nuxt-link
            to="/resource/video-resources"
            class="home-new-bottom link"
            style="justify-content: center"
          >
            <span>{{ $t('market.videos') }}</span>
            <i class="el-icon-right"></i>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
    <div class="media-b" style="background: #fcfcfc">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="8">
                <h3 class="global-h3">{{ $t('market.rewards') }}</h3>
                <p>
                  {{ $t('market.order') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="10">
                <div class="home-new-img">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/ship-features-that-move-the-needle.png"
                    mode="powerful"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row type="flex" justify="space-between" align="middle">
              <el-col :xs="23" :lg="12">
                <div class="home-new-img">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/scale-illustration.svg"
                    mode="powerful"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <h2 class="bass-h2">{{ $t('market.team') }}</h2>
                <p>
                  {{ $t('market.have') }}
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mdeia media-a" style="padding-bottom: 100px">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="14">
          <h2 class="bass-h2">{{ $t('market.excellent') }}</h2>
          <p>
            {{ $t('market.exploring') }}
          </p>
          <div class="media-a-img">
            <img
              src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/find-and-fix-drivers-of-churn.png"
              alt="retention-report-1"
            />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bass-case">
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h3">{{ $t('market.much') }}</h3>
          <div class="bass-case-box">
            <div
              v-for="(item, index) in arrCase"
              :key="index"
              class="bass-case-box-item"
            >
              <a :href="item.url" target="_blank" class="bass-case-box-card">
                <div class="bass-case-box-card-img">
                  <img
                    :src="item.img"
                    class="attachment-large"
                    alt="Preview Image 1 (2)"
                  />
                </div>
                <div class="bass-case-box-item-content">
                  <h3 class="card-title">{{ $t(item.title) }}</h3>
                  <p class="bass-case-box-item-content-text">
                    {{ $t(item.content) }}
                  </p>
                </div>
                <div class="home-new-bottom link">
                  <span>{{ $t(item.small) }}</span>
                  <i class="el-icon-right"></i>
                </div>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a
            href="https://weaver.ibax.io/"
            target="_blank"
            class="btn btn-primary"
            >{{ $t('footer.now') }}</a
          >
        </div>
      </template>
    </page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrHeading: [
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        }
      ],
      arrImg: [
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/clari.svg',
          alt: 'clari'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/vivino.svg',
          alt: 'vivino'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/blind.svg',
          alt: 'blind'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/mmhmm.svg',
          alt: 'mmhmm'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/talkspace.svg',
          alt: 'talkspace'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/branch.svg',
          alt: 'branch'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/noom.svg',
          alt: 'noom'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/bentobox.svg',
          alt: 'mmhmm'
        }
      ],
      arrCase: [
        {
          url: 'https://github.com/orgs/IBAX-io/repositories',
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Preview-Image-1-2-1024x613.png',
          title: 'market.eco',
          content: 'market.based',
          small: 'market.download'
        },
        {
          url: 'https://weaver.ibax.io/',
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Preview-Image-1-2-1024x613.png',
          title: 'market.management',
          content: 'market.Weaver',
          small: 'home.using'
        },
        {
          url: 'https://weaver.ibax.io/',
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Preview-Image-1-2-1024x613.png',
          title: 'market.information',
          content: 'market.tool',
          small: 'market.learn'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
