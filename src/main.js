import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import {
  ValidationProvider, ValidationObserver, extend, localize,
} from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import store from './store';

import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);

Vue.component('Loading', Loading);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

localize('zh_TW', TW);
extend('email', email);
extend('required', { // 這邊可以改寫我們 email 告知使用者是必填欄位的提示文字
  ...required,
  message: 'This  {_field_} is required',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
