import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/index'
import Vuelidate from 'vuelidate';

import '@/assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
