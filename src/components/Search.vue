<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入小区或地址"
      class="vt-search"
      background="#4fc08d"
    >
      <template #label>
        <span class="goCity" @click="$router.push('/city')"
        >{{ selectCurrentCity.label }}<i>▼</i></span
        >
      </template>
      <template #action>
        <div>
          <van-icon name="location-o" class="v-icon" @click="$router.push('/map')"/>
        </div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  props: {
    selectCurrentCity: {
      type: Object
    }
  },
  name: 'Search',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.vt-search {
  .van-icon-arrow-left {
    color: #fff;
    font-size: 24px;
    padding-right: 10px;
  }

  text-align: center;

  .van-search__content {
    padding-left: 2px;
    margin-left: 20px;
    padding-right: 40px;

    /deep/ .van-field__control::placeholder {
      font-size: 12px;
    }

    select {
      border: none;
    }
  }

  /deep/ .v-icon {
    font-size: 44px;
    margin-top: 5px;
    color: #fff;
  }

  .goCity {
    i {
      margin-left: 6px;
      font-size: 10px;
      color: #7f7f80;
    }
  }
}
</style>
