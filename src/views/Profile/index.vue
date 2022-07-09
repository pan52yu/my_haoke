<template>
  <div id="tabbar">
    <!--  未登录显示  -->
    <div class="noLog" v-if="!user">
      <div class="bg">
        <img :src="require('/src/styles/imgs/bg.png')" alt=""/>
      </div>
      <div class="box">
        <div class="myIcon">
          <img :src="require('/src/styles/imgs/avatar.png')" alt=""/>
        </div>
        <p>游客</p>
        <van-button type="primary" to="/login">去登录</van-button>
      </div>
      <van-grid :column-num="3" :border="false" class="vt-grid">
        <van-grid-item
          v-for="(item, index) in vtGrid"
          :key="index"
          :icon="item.icon"
          :text="item.text"
          to="/login"
        />
      </van-grid>
      <div class="join">
        <div><img :src="require('/src/styles/imgs/join.png')" alt=""/></div>
      </div>
    </div>
    <!---->
    <!--  已登陆显示  -->
    <div class="loging" v-else>
      <div class="bg">
        <img class="bgimg" :src="`http://liufusong.top:8080${userIfon.avatar}`" alt=""/>
      </div>
      <div class="box">
        <div class="myIcon">
          <img :src="require('/src/styles/imgs/avatar.png')" alt=""/>
        </div>
        <p>{{ userIfon.nickname }}</p>
        <van-button type="primary" @click="logOut">退出</van-button>
        <p class="gr">
          编辑个人资料 ▶
        </p>
      </div>
      <van-grid :column-num="3" :border="false" class="vt-grid">
        <van-grid-item icon="star-o" text="我的收藏" to="/favorate"/>
        <van-grid-item icon="wap-home-o" text="我的出租" to="/rent"/>
        <van-grid-item icon="clock-o" text="看房记录"/>
        <van-grid-item icon="vip-card-o" text="成为房主"/>
        <van-grid-item icon="user-circle-o" text="个人资料"/>
        <van-grid-item icon="phone-o" text="联系我们"/>
      </van-grid>
      <div class="join">
        <div><img :src="require('/src/styles/imgs/join.png')" alt=""/></div>
      </div>
    </div>
  </div>
</template>

<script>

import { userProfile } from '@/api'
import { mapState } from 'vuex'
import { Dialog } from 'vant'

export default {
  name: 'Profile',
  data() {
    return {
      userIfon: {},
      vtGrid: [
        {
          icon: 'star-o',
          text: '我的收藏'
        },
        {
          icon: 'wap-home-o',
          text: '我的出租'
        },
        {
          icon: 'clock-o',
          text: '看房记录'
        },
        {
          icon: 'vip-card-o',
          text: '成为房主'
        },
        {
          icon: 'user-circle-o',
          text: '个人资料'
        },
        {
          icon: 'phone-o',
          text: '联系我们'
        }
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.userProfile()
  },
  methods: {
    async userProfile() {
      const res = await userProfile(this.user)
      this.userIfon = res.data.body
      console.log(res)
    },
    async logOut() {
      try {
        await Dialog.confirm({
          title: '用户退出',
          message: '是否退出',
          closeOnClickOverlay: true
        })
        this.$store.commit('setUser', null)
      } catch (e) {
        console.log('已取消')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#tabbar {
  .bg {
    img {
      width: 100%;
    }
  }

  .bgimg {
    height: 400px;
  }

  .box {
    position: relative;
    margin: -100px 0 0 60px;
    width: 640px;
    height: 330px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 2px 2px rgb(150, 146, 146);

    .myIcon {
      position: absolute;
      left: 50%;
      top: -35px;
      transform: translateX(-50%);
      width: 140px;
      height: 140px;
      border-radius: 70px;
      box-shadow: 0 0 2px 2px rgb(200, 194, 194);
      background-color: #fff;

      img {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-56%, -50%);
        width: 120px;
        height: 120px;
      }
    }

    p {
      position: absolute;
      top: 110px;
      left: 50%;
      font-size: 14px;
      transform: translateX(-50%);
    }

    .gr {
      top: 250px;
      color: #999;
    }

    .van-button {
      border-radius: 8px;
      height: 60px;
      position: absolute;
      top: 170px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .vt-grid {
    margin-top: 10px;
  }

  .join {
    width: 100%;
    margin-top: 40px;
    position: relative;

    div {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      width: 690px;
      height: 85px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
