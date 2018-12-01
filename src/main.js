import Vue from 'vue'
import store from './vuex'

import App from './App'
import VueRouter from 'vue-router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  VueRouter,
  render: h => h(App)
})
