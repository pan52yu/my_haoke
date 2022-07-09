<template>
  <div id="home">
    <!-- 顶部搜索框 -->
    <Search class="search" :selectCurrentCity="selectCurrentCity"></Search>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt=""/>
      </van-swipe-item>
    </van-swipe>
    <!-- 中间导航区域 -->
    <van-grid :border="false" class="navigation">
      <van-grid-item icon="wap-home-o" text="整租" to="/home/list"/>
      <van-grid-item icon="friends-o" text="合租" to="/home/list"/>
      <van-grid-item icon="location-o" text="地图找房" to="/map"/>
      <van-grid-item icon="home-o" text="去出租" to="/login"/>
    </van-grid>
    <!-- 租房小组 -->
    <van-cell title="租房小组" value="更多" class="vt-title"/>
    <van-grid
      :gutter="'5px'"
      :border="false"
      direction="horizontal"
      :column-num="2"
      class="vt-grid"
    >
      <van-grid-item v-for="item in rentList" :key="item.id">
        <van-image
          width="100"
          height="100"
          :src="'http://liufusong.top:8080' + item.imgSrc"
        />
        <div>
          <p class="p">{{ item.title }}</p>
          <p class="p">{{ item.desc }}</p>
        </div>
      </van-grid-item>
    </van-grid>

    <router-view></router-view>
  </div>
</template>

<script>
import { getRenting } from '@/api'
import Search from '@/components/Search.vue'

export default {
  props: {
    selectCurrentCity: {
      type: Object
    }
  },
  components: { Search },

  name: 'Home',
  data() {
    return {
      value: '',
      images: [
        'https://s2.loli.net/2022/07/02/eafgyVhX9WFvZb6.png',
        'https://s2.loli.net/2022/07/02/XmC5jrvJwNQaixf.png',
        'https://s2.loli.net/2022/07/02/skEvw1hKu8bRYQZ.png'
      ],
      rentList: []
    }
  },
  created() {
    this.getRenting()
  },
  methods: {
    async getRenting() {
      const res = await getRenting()
      this.rentList = res.data.body
    },
    goMap() {
      this.$router.push('/map')
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  padding-bottom: 10px;

  .search {
    position: fixed;
    z-index: 999;
    top: 30px;

    :deep(.van-search) {
      background-color: transparent !important;
    }

    :deep(.van-search__content) {
      width: 560px !important;
    }
  }

  background-color: #f6f5f6;

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height: 424px;
    text-align: center;
    background-color: #39a9ed;

    img {
      width: 100%;
    }
  }

  .vt-title {
    background-color: #f6f5f6;

    /deep/ .van-cell__title {
      font-size: 30px;
      font-weight: 700;
    }
  }

  .navigation {
    :deep(.van-icon) {
      color: #0bb16c;
      font-size: 90px;
      margin-bottom: 7px;
    }

    :deep(.van-grid-item) {
      height: 220px;
    }
  }

  .vt-grid {
    background-color: #f6f5f6;
    text-align: center;
    // flex-wrap: wrap;
    :deep(.van-grid-item) {
      width: 44%;
      border-radius: 10px;
    }

    .van-image {
      margin-left: -50px;
      width: 100px !important;
      height: 100px !important;
    }

    .p {
      font-size: 28px !important;
      margin: 5px 0;
    }
  }
}
</style>
