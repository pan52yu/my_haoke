<template>
  <div id="app">
    <router-view :selectCurrentCity="selectCurrentCity"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectCurrentCity: {
        label: '北京',
        pinyin: 'beijing',
        short: 'bj',
        value: 'AREA|88cff55c-aaa4-e2e0'
      }
    }
  }
}
</script>
<style lang="less">
#app {
  padding-bottom: 100px;
  // background: #f6f5f6;
}
</style>
