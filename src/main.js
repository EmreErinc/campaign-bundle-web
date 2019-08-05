import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'

import VDateRange from 'vuetify-daterange-picker';
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css';

Vue.use(VDateRange);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
