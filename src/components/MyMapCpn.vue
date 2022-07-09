<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw"
  >
    <div v-text="text" class="map-text">
    </div>
    <div v-text="main">
    </div>
  </bm-overlay>
</template>

<script>
export default {
  props: ['text', 'position', 'active', 'main'],
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    draw({
      el,
      BMap,
      map
    }) {
      const {
        lng,
        lat
      } = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background: rgb(26, 175, 96, 0.9);
  overflow: hidden;
  font-size: 18px;
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
}

.map-text {
  margin-top: 10px;
}

.sample.active {
  color: #fff;
}
</style>
