<template>
  <div id="detail">
    <!-- 顶部标题 -->
    <van-nav-bar
      title="占位"
      left-arrow
      @click-left="onClickLeft"
      class="vt-nb"
    />
    <!--  图片信息  -->
    <van-swipe class="my-swipe" height="2100px" indicator-color="white">
      <van-swipe-item>
      </van-swipe-item>
      <van-swipe-item></van-swipe-item>
    </van-swipe>
    <!--  房屋信息  -->
    <div class="houseList">
      <div class="title">
        <p>{{ houseInformation.community }}</p>
        <span v-for="(item,index) in houseInformation.tags" :key="index">
          {{ item }}
        </span>
      </div>
      <div class="houseInfo">
        <div>
          <i>1500/月</i>
          <p>租金</p>
        </div>
        <div>
          <i>四室</i>
          <p>房型</p>
        </div>
        <div>
          <i>80平米</i>
          <p>面积</p>
        </div>
      </div>
      <div class="houseBottom">
        <div>
          <p>
            <span>装修：</span>
            <i> 精装</i>
          </p>
          <p>
            <span>楼层：</span>
            <i> {{ houseInformation.floor }}</i>
          </p>
        </div>
        <div>
          <p>
            <span>朝向：</span>
            <i> {{ houseInformation.oriented[0] }}</i>
          </p>
          <p>
            <span>类型：</span>
            <i> {{ houseInformation.roomType }}</i>
          </p>
        </div>
      </div>
    </div>
    <!--  小区地图  -->
    <div class="communityMap">
      <p>小区：{{ houseInformation.community }}</p>
      <div class="map">
        <my-map class="myMap"></my-map>
      </div>
    </div>
    <!-- 房源概括  -->
    <div class="generalizationProperties">
      <p class="title">房源概括</p>
      <div class="body">
        <div class="left">1</div>
        <div class="content">
          <p>王女士</p>
          <p>以认证房主</p>
        </div>
        <div class="right">
          <button>发信息</button>
        </div>
      </div>
      <div class="bottom">
        1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
        2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。 3.人车分流，环境优美。 4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
      </div>
    </div>
    <!--  底部三个导航  -->
    <div class="tabBar">
      <div @click="showPopup">
        <van-icon name="star-o"/>
        收藏
      </div>
      <div>在线咨询</div>
      <div class="phone">电话预约</div>
    </div>
    <!--  弹出层  -->
    <van-popup round v-model="show" class="vt-popup">
      <div class="content">
        <div class="title">好客租房</div>
        <div class="body">您还未登录，是否跳转登录页面？</div>
        <div class="header">
          <span>取消</span>
          <span class="tz" @click="goLogin">跳转</span>
        </div>

      </div>
    </van-popup>
  </div>
</template>

<script>

import MyMap from '@/components/myMap'
import { getHouseInformation } from '@/api'

export default {
  name: 'detail',
  components: { MyMap },

  data() {
    return {
      show: false,
      houseInformation: {}
    }
  },
  created() {
    this.getHouseInformation()
  },
  methods: {
    async getHouseInformation() {
      const res = await getHouseInformation(this.$route.query.id)
      this.houseInformation = res.data.body
    },
    onClickLeft() {
      this.$router.back()
    },
    showPopup() {
      this.show = true
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
#detail {
  background-color: #f6f5f6;
  padding-bottom: 50px;

  i {
    font-style: normal;
  }

  .vt-nb {
    background-color: #21b97a;

    /deep/ .van-ellipsis {
      color: #ffffff !important;
    }

    /deep/ .van-icon {
      color: #ffffff !important;
    }
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 500px;
    line-height: 150px;
    text-align: center;
    background-color: #eee;
  }

  .houseList {
    padding: 30px;
    background: #fff;
    font-size: 32px;
    color: #333;

    .title {
      span {
        font-size: 26px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
        color: #39becd;
        background: #e1f5f8;
      }
    }

    .houseInfo {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin: 30px 0 0 0;
      padding: 30px 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;

      i {
        font-style: normal;
        color: red;
        font-weight: 700;
        font-size: 36px;
      }

      p {
        margin: 10px;
        font-size: 28px;
        color: #635c5c;
      }
    }

    .houseBottom {
      display: flex;
      font-size: 26px;

      div {
        width: 50%;

        span {
          color: #999;
        }
      }
    }
  }

  .communityMap {
    margin: 20px 0 0 0;
    background-color: #fff;
    //height: 414px;
    padding-top: 10px;

    p {
      font-size: 28px;
      height: 44px;
      line-height: 44px;
      margin: 10px 0;
    }

    .map {
      background-color: #cccccc;
      height: 290px;

      .myMap {
        height: 100%;
      }
    }
  }

  .generalizationProperties {
    background-color: #fff;
    margin: 20px 0;
    padding: 0 10px;

    .title {
      font-size: 30px;
      font-weight: 600;
      padding: 30px 0;
      border-bottom: 1px solid #cecece;
      margin-top: 0;
      margin-bottom: 20px;
    }

    .body {
      display: flex;
      font-size: 28px;
      margin: 20px 0;

      div {
        margin: 0;
      }

      .left {
        width: 100px;
        height: 100px;
        border: 1px solid #0bb16c;
        margin-right: 20px;
      }

      .content {
        flex: 1;

        p {
          margin: 5px 0;
        }
      }

      .right {
        button {
          margin-top: 25px;
          color: #33be85;
          border: 1px solid #33be85;
          border-radius: 3px;
          padding: 3px 15px;
        }
      }
    }

    .bottom {
      padding: 20px 0;
      font-size: 28px;
    }
  }

  .tabBar {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100px;
    line-height: 100px;
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 34px;
    background-color: #fff;

    div {
      border: 1px solid #999;
      flex: 1;
      color: #999999;
    }

    .phone {
      color: #ffffff;
      background-color: #21b97a;
    }
  }

  .vt-popup {
    .content {
      position: relative;
      width: 270*2px;
      height: 141*2px;
      font-size: 36px;
      text-align: center;

      .title {
        margin: 40px 0;
      }

      .body {
        font-size: 30px;
        color: #888;
      }

      .header {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;

        span {
          border: 1px solid #cccccc;
          display: inline-block;
          width: 49%;
          height: 80px;
          line-height: 80px;
        }

        .tz {
          color: #108ee9;
        }
      }
    }
  }
}
</style>
