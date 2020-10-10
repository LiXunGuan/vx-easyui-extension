import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import '../src/themes/default/index.css'

import './demo.css'

import Vue from 'vue'
import EasyUI from 'vx-easyui'
import EasyUiExtension from '../src/index.js'
import App from './App.vue'



Vue.use(EasyUI)
Vue.use(EasyUiExtension)



Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')