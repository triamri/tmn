// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import('vuetify/dist/vuetify.min.css')

var config = {
  apiKey: 'AIzaSyAcTUpkJVXFHocsc_9iTDz49O8a0-DLJCs',
  authDomain: 'api-project-737873303348.firebaseapp.com',
  databaseURL: 'https://api-project-737873303348.firebaseio.com',
  projectId: 'api-project-737873303348',
  storageBucket: 'api-project-737873303348.appspot.com',
  messagingSenderId: '737873303348'
}

firebase.initializeApp(config)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
