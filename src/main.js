import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import { Icon } from 'leaflet';
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LPopup,
} from 'vue2-leaflet';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/tailwind.css';
import '@/styles/app.scss';
import 'vue-toast-notification/dist/theme-default.css';
import 'leaflet/dist/leaflet.css';

// leaflet
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon);
Vue.component('l-popup', LPopup);
const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');
/* eslint no-underscore-dangle: 0 */
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

Vue.use(VueToast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
