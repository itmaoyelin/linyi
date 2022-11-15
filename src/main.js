import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'
import './assets/css/base.less'

// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入echarts
import * as echarts from 'echarts'
import '@/assets/font/font_5nedi4wkbcq/iconfont.css'

Vue.use(Vant)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
