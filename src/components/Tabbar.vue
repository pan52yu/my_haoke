<template>
  <div>
    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" route active-color="#21b9a3">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/list">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/home/news">资讯</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/profile"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
