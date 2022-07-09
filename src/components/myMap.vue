<template>
  <div id="map">
    <baidu-map class="maps" center="北京">
    </baidu-map>
  </div>
</template>

<script>

export default {
  name: 'Map',
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  overflow: hidden;

  .maps {
    width: 100%;
    height: 100%;
  }
}
</style>
