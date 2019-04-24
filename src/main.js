import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
// Setting global http-address
Vue.http.options.root = "https://vue-http-add0e.firebaseio.com/data.json";
new Vue({
  el: '#app',
  render: h => h(App)
})
