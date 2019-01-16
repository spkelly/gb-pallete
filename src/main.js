import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import storeTemplate from './store/index';
Vue.use(Vuex);
let store = new Vuex.Store(storeTemplate);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


