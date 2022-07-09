<template>
  <div id="city">
    <div class="title">
      <van-icon name="arrow-left" @click="goBack"/>
      <p>城市列表</p>
    </div>
    <van-loading v-if="isShowLoading" color="#1989fa" vertical>加载中</van-loading>
    <van-index-bar
      v-else
      :highlight-color="'#21b97a'"
      :index-list="cIndexList"
      class="vt-indexBar"
    >
      <div v-for="(item, index) in cIndexList" :key="index">
        <van-index-anchor index="1">{{ cIndexLists[index] }}</van-index-anchor>
        <van-cell
          :title="item.label"
          v-for="(item, index) in getAllCityList[cIndexLists[index]]"
          :key="index"
          @click="getsCurrentCity(item)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotList } from '@/api'

export default {
  props: {
    selectCurrentCity: {
      type: Object
    }
  },
  name: 'city',
  data() {
    return {
      isShowLoading: true,
      // 请求回来的城市列表
      CityList: [],
      // 请求回来的热门城市列表
      hotList: []
    }
  },
  created() {
    this.getCityList()
    this.getHotList()
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    async getCityList() {
      const { data } = await getCityList(1)
      this.CityList = data.body
      this.isShowLoading = false
    },
    async getHotList() {
      const { data } = await getHotList()
      this.hotList = data.body
    },
    getsCurrentCity(item) {
      // 点击的时候把APP 里面的 selectCurrentCity 进行更改，且不能直接更改源数据，对象可以修改里面的值
      this.selectCurrentCity.label = item.label
      this.selectCurrentCity.pinyin = item.pinyin
      this.selectCurrentCity.short = item.short
      this.selectCurrentCity.value = item.value
      this.$store.commit('setCurrentCity', item)
      // 返回上次的路由
      this.$router.back()
    }
  },
  computed: {
    // 处理所有的城市列表 并以对象形式返回
    getAllCityList() {
      const azList = []
      for (let i = 65; i < 91; i++) {
        azList.push(String.fromCharCode(i))
      }
      const cityList = this.CityList.map((item) => {
        item._key = item.pinyin.slice(0, 1).toLocaleUpperCase()
        return item
      })
      const cityObj = {} // 按对象方式进行存储城市列表
      cityObj['当前城市'] = [this.selectCurrentCity]
      cityObj['热门城市'] = this.hotList
      for (let i = 0; i < azList.length; i++) {
        cityObj[azList[i]] = []
        for (let j = 0; j < cityList.length; j++) {
          if (cityList[j]._key === azList[i]) {
            cityObj[azList[i]].push(cityList[j])
          }
        }
        if (!cityObj[azList[i]].length) {
          cityObj[azList[i]] = [{ label: '暂无此城市' }]
        }
      }
      return cityObj
    },
    // 左侧导航数据
    cIndexList() {
      const arrGenerate = []
      for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i)
        arrGenerate.push(letter)
      }
      return ['#', '热', ...new Set(arrGenerate)]
    },
    // 标题头数据
    cIndexLists() {
      const arrGenerate = []
      for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i)
        arrGenerate.push(letter)
      }
      return ['当前城市', '热门城市', ...new Set(arrGenerate)]
    }
  }
}
</script>

<style lang="less" scoped>
#city {
  padding-top: 90px;

  .title {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    p {
      text-align: center;
      margin: 0;
      height: 90px;
      line-height: 90px;
      font-size: 36px;
      background-color: #21b97a;
      color: #fff;
    }

    .van-icon-arrow-left {
      position: absolute;
      font-size: 36px;
      left: 30px;
      top: 28px;
      color: #fff;
    }
  }

  .vt-indexBar {
    /deep/ .van-index-anchor {
      color: #b3b3b3;
    }

    /deep/ .van-cell {
      font-size: 32px;
      border-bottom: 1px solid #b3b3b3;
    }
  }
}
</style>
