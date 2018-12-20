import Vue from 'vue'

import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')