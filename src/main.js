import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/antd.css'
import './index.less'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
