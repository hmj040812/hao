// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import routes from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
    // 去掉url中#
    // mode: 'history',
    routes: routes
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
}).$mount('#app')
