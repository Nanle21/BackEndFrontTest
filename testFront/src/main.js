/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';


import axios from 'axios';
import VueAxios from 'vue-axios';

// import VueCollapse from 'vue2-collapse'

// Loading the plugin into the Vue.

import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);
 
Vue.use(VueAxios, axios)
// Vue.use(VueCollapse)

Vue.config.productionTip = false;

Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
