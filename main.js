import Vue from 'vue'
import App from './App'
import store from "@/store"
import utils from "@/common/utils/utils.js"
import {staticURL, uploadURL } from "@/common/utils/config.js"
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$utils = utils
Vue.prototype.$url = {staticURL, uploadURL }

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
