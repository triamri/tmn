<template>
  <div>
    <v-content>
      <div id="login">
        <v-content>
          <v-layout>
            <v-flex xs12 class="text-xs-center" style="color:white">
              <v-btn id="btn-login" dark @click="loginBtn" >
                <h3>Click to Login</h3>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-content>
      </div>
    </v-content>
  </div>
</template>

<script>
import {  mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'loginPlayer',
      'CheckLogin'
    ]),
    loginBtn () {
      this.loginPlayer()
      .then(() => {
        this.$router.push({name: 'Rooms'})
      })
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  created () {
    this.CheckLogin()
    if (this.isLogin) {
      this.$router.push('/rooms')
    }
  }
}
</script>

<style>
  #login {
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
  #btn-login {
    border: none;
    color: #fff;
    width: 200px;
    height: 200px;
    transition: 0.3s;
    border-radius: 50%;
  }
</style>
