import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

Vue.use(ElementUI)

Vue.prototype.$ajax = Axios;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
