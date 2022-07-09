<template>
  <div id="list">
    <van-icon name="arrow-left" @click="goHome" class="vt-icon"/>
    <Search class="search" :selectCurrentCity="selectCurrentCity"></Search>
    <!-- 四个导航列表 -->
    <div class="tabList">
      <div class="menu">
        <div
          v-for="(item, index) in menuList"
          :key="index"
          class="item"
          :class="{
            currentIndex: currentIndex === index,
            'item-selected': show,
          }"
          @click="item.isShow(index)"
        >
          {{ item.text }}
          <van-icon name="arrow-down"/>
        </div>
      </div>
      <!-- 顶部弹出 -->
      <van-popup v-model="show" position="top" :style="{ height: '42%' }">
        <van-picker
          @confirm="onConfirm"
          @cancel="onCancel"
          show-toolbar
          toolbar-position="bottom"
          :columns="this.applyList[currentIndex]"
          ref="vt-picker"
        >
        </van-picker>

      </van-popup>
      <!--   右侧弹出   -->
      <van-popup
        v-model="show2"
        position="right"
        :style="{ height: '100%', width: '80%' }"
      >
        占位
      </van-popup>
    </div>
    <!-- 内容列表 -->
    <main>
      <!--      <van-loading v-show="isShowLoading" color="#1989fa" vertical>加载中</van-loading>-->
      <van-popup class="vt-popup" v-model="isShowLoading" :overlay="false">
        <van-loading class="vt-loading" size="24px" vertical color="#1989fa" text-color="#ffffff">加载中...
        </van-loading>
      </van-popup>
      <div class="mainList" v-for="(item,index) in houseList" :key="item.houseCode">
        <div class="img">
          <!-- <van-image :src="require('./image.png')" /> -->
          <img :src="`http://liufusong.top:8080${item.houseImg}`" alt=""/>
        </div>
        <div class="right" @click="getHousing(index)">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <span>{{ item.tags[0] }}</span>
          <h3>{{ item.price }} 元/月</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Search from '@/components/Search'
import { communityInformation, queryHouses, queryBuilder } from '@/api'
import { areaList } from '@vant/area-data'

export default {
  props: {
    selectCurrentCity: {
      type: Object
    }
  },
  name: 'List',
  components: { Search },
  data() {
    return {
      isShowLoading: true,
      currentIndex: 0,
      houseList: [],
      houseBuild: {},
      areaList,
      menuList: [
        {
          text: '区域',
          isShow: this.showPopup
        },
        {
          text: '方式',
          isShow: this.showPopup
        },
        {
          text: '租金',
          isShow: this.showPopup
        },
        {
          text: '筛选',
          isShow: this.showPopup2
        }
      ],
      applyList: ['area', 'rentType', 'housePrice'],
      show: false,
      show2: false,
      housesQuery: {
        cityId: '',
        area: 'null',
        subway: '',
        rentType: '',
        price: '',
        more: '',
        roomType: '',
        oriented: '',
        characteristic: '',
        floor: '',
        start: '1',
        end: '20'
      }
    }
  },
  created() {
    this.communityInformation()
    this.queryHouses()
    this.queryBuilder()
  },
  watch: {
    housesQuery: {
      deep: true,
      immediate: true,
      handler() {
        this.queryHouses()
      }
    }
  },
  methods: {
    async onConfirm() {
      const houseValue = this.$refs['vt-picker'].getValues().pop().value
      if (this.currentIndex === 0) {
        this.$refs['vt-picker'].getValues()[0].value === 'area' ? this.$set(this.housesQuery, 'area', houseValue) : this.$set(this.housesQuery, 'subway', houseValue)
      } else if (this.currentIndex === 1) {
        this.$set(this.housesQuery, 'rentType', houseValue)
      } else if (this.currentIndex === 2) {
        this.$set(this.housesQuery, 'price', houseValue)
      }
      this.show = false
    },
    onCancel() {
      this.show = false
    },
    getHousing(index) {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.houseList[index].houseCode
        }
      })
      // console.log(this.houseList[index].houseCode)
    },
    // 使用关键词查询小区信息
    async communityInformation() {
      const { data } = await communityInformation(
        '北京',
        'AREA|88cff55c-aaa4-e2e0'
      )
      console.log(data)
    },
    // 待渲染的房屋列表
    async queryHouses() {
      this.isShowLoading = true
      this.housesQuery.cityId = this.selectCurrentCity.value
      const { data } = await queryHouses(this.housesQuery)
      this.houseList = data.body.list
      this.isShowLoading = false
    },
    // 处理拿回来的数据
    manageHouseList(data) {
      for (let i = 0; i < data.length; i++) {
        if (!data[i].children) {
          data[i].children = []
        }
        for (const j in data[i]) {
          if (j === 'label') {
            data[i].text = data[i].label
          }
          if (j === 'children') {
            this.manageHouseList(data[i].children)
          }
        }
      }
    },
    // 获取房屋查询条件
    async queryBuilder() {
      const { data } = await queryBuilder(this.selectCurrentCity.value)
      this.houseBuild = data.body
      // 区域area
      // 处理地区
      this.manageHouseList([data.body.area])
      // 处理地铁
      this.manageHouseList([data.body.subway])
      // 处理价格
      this.applyList[2] = data.body.price
      this.applyList[2].forEach(item => item.text = item.label)
      // 处理是不是整租
      this.applyList[1] = data.body.rentType
      this.applyList[1].forEach(item => item.text = item.label)
      this.applyList[0] = [...[data.body.area], ...[data.body.subway]]
      this.applyList[0][0].children[0].children = [{
        text: '',
        label: '不限',
        value: 'null'
      }]
      this.applyList[0][1].children[0].children = [{
        text: '',
        label: '不限',
        value: 'null'
      }]
    },
    showPopup(index) {
      this.currentIndex = index
      this.show = true
      this.show2 = false
    },
    showPopup2(index) {
      this.currentIndex = index
      this.show = false
      this.show2 = true
    },
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
#list {
  background-color: #fff;

  .vt-icon {
    position: absolute;
    left: 10px;
    top: 30px;
    color: #fff;
  }

  .search {
    /deep/ .van-search__content {
      margin-left: 80px !important;
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 80px;

    .currentIndex {
      color: #4fc08d;
    }

    .item {
      flex: 1;
      background-color: #fff;
      font-size: 30px;
      line-height: 80px;
    }

    .item-selected {
      z-index: 3001 !important;
    }
  }

  .van-popup--top {
    top: 172px;
  }

  .mainList {
    display: flex;
    border-bottom: 1px solid #eee;
    width: 100%;
    height: 280px;

    .img {
      flex: 1;
      position: relative;

      img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 200px;
        height: 150px;
      }
    }

    .right {
      flex: 2;

      h4 {
        font-size: 28px;
        margin: 50px 0 0 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        margin: 10px 0 -5px;
        font-size: 24px;
      }

      span {
        padding: 5px;
        margin: 0;
        background-color: #e1f5f8;
        color: #49c3d1;
        font-size: 24px;
      }

      h3 {
        margin: 3px 0 30px 0;
        font-size: 30px;
        color: red;
      }
    }
  }

  .vt-area {
    /deep/ .van-picker__toolbar {
      display: none !important;
    }

  }

  .btn {
    display: flex;

    .cancel {
      flex: 1;
    }

    .confirm {
      flex: 2;
    }
  }

  /deep/ .van-popup--right {
    z-index: 9999 !important;
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
