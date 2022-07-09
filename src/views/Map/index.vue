<template>
  <div id="map">
    <div class="title">
      <van-icon
        name="arrow-left"
        @click="goHome"
      />
      <span>地图找房</span>
      <span></span>
    </div>
    <baidu-map
      class="map"
      :center="currentCity.label"
      :dragging="false">
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
      <my-map-cpn
        v-for="(item,index) in mapHouse"
        :key="index"
        :position="item.coord"
        :text="item.label"
        :main="`${item.count}套`"
        :active="active"
        @mouseover.native="active = true"
        @mouseleave.native="active = false"
        @click.native="click(index)"
      >
      </my-map-cpn>
      <van-cell is-link>展示弹出层</van-cell>
      <van-popup class="vt-popup" v-model="show" :overlay="false">
        <van-loading class="vt-loading" size="24px" vertical color="#1989fa" text-color="#ffffff">加载中...
        </van-loading>
      </van-popup>
    </baidu-map>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getMapHouse } from '@/api'
import MyMapCpn from '@/components/MyMapCpn'

export default {
  components: {
    MyMapCpn
  },
  name: 'Map',
  data() {
    return {
      show: false,
      active: false,
      mapHouse: []
    }
  },
  created() {
    this.getMapHouse(this.currentCity.value)
  },
  methods: {
    click(index) {
      console.log(this.mapHouse[index].value)
      console.log(this.mapHouse[index].label)
      // this.currentCity.label = this.mapHouse[index].label
      this.getMapHouse(this.mapHouse[index].value)
    },
    goHome() {
      this.$router.push('/home')
    },
    async getMapHouse(val) {
      this.show = true
      const res = await getMapHouse(val)
      res.data.body.forEach(item => {
        item.coord.lat = item.coord.latitude
        item.coord.lng = item.coord.longitude
      })
      console.log(res.data.body)
      this.mapHouse = res.data.body
      this.show = false
    }
  },
  computed: {
    ...mapState(['currentCity'])
  }
}
</script>

<style lang="less" scoped>
#map {
  .vt-circle {
    z-index: 99999;
  }

  overflow: hidden;
  padding-top: 90px;

  .title {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 90px;
    line-height: 90px;
    color: #fff;
    background-color: #21b97a;
    font-size: 36px;
    text-align: center;

    /deep/ .van-icon {
      position: absolute;
      left: 30px;
      top: 28px;
    }
  }

  .map {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 90px);
  }

  /deep/ .vt-popup {
    background-color: transparent;
  }

  /deep/ .vt-loading {
    width: 150px;
    height: 170px;
    border-radius: 20px;
    padding-top: 30px;
    font-size: 14px;
    background-color: rgba(58, 58, 58, 0.9);
  }
}
</style>
