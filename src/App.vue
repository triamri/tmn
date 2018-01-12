<template>
  <v-app id="app">
    <div id="loading" v-show="show">
      <loading-page></loading-page>
    </div>
    <div id="content" transition="slide-y-transition">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import LoadingPage from './components/LoadingPage'
export default {
  name: 'app',
  data () {
    return {
      show: true,
      time: 3
    }
  },
  components: {
    'loading-page': LoadingPage
  },
  created () {
    let self = this
    setInterval(function () {
      if (self.show === true) {
        console.log(self.time)
        self.time--
        if (self.time === 0) {
          console.log('HAPPY NEW YEAR!!')
          self.show = false
        }
      }
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: 'Dosis', sans-serif;
  font-weight: normal;
  font-size: 16px;
}
#loading {
  padding-top: 30vh;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #3a6186;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #89253e, #3a6186);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #89253e, #3a6186); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
