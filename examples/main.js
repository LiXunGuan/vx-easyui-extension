import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'

import '@/themes/default/icon.css'
import '@/themes/default/tag.css'
import '@/themes/default/row.css'
import '@/themes/default/col.css'
import '@/themes/default/iconpicker.css'
import '@/themes/default/msgbox.css'


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