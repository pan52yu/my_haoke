<template>
  <div>
    <router-view :selectCurrentCity="selectCurrentCity"></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'

export default {
  components: { Tabbar },
  props: {
    selectCurrentCity: {
      type: Object
    }
  }
}
</script>

<style></style>
