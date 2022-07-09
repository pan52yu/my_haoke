<template>
  <!--  zoom="11" 为默认视图-->
  <baidu-map id="container" dragging class="map" center="北京">
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
    <my-map-cpn
      :position="{lng: 116.404, lat: 39.915}"
      text="1"
      main="1"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false"
    >
    </my-map-cpn>
  </baidu-map>
</template>

<script>
import MyMapCpn from '@/components/MyMapCpn'

export default {
  data() {
    return {
      active: false
    }
  },
  components: {
    MyMapCpn
  }
}
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 100vh;
}
</style>
