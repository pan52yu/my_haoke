import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from '@/plugins/vant'
import 'amfe-flexible'
// 引入百度地图插件
import BaiduMap, { BmlMarkerClusterer } from 'vue-baidu-map'
import store from './store'

Vue.use(vant)

Vue.component('bml-marker-cluster', BmlMarkerClusterer)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'AjBU4Q9SR2tgon0qkLECdb81Zld7mvLHG'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
