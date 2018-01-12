<template>
  <div>
    <v-content id="done" v-show="startPlay">
      <v-layout>
        <v-flex xs12 class="text-xs-center" style="color:white">
          <div class="centered">
            <h2>Ready In ...</h2>
            <h1 >{{countDown}}</h1>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
    <v-content id="done" v-show="hide" >
      <v-layout>
        <v-flex xs12 class="text-xs-center" style="color:white">
          <div class="centered">
            <h2>{{numClick}}</h2>
            <h1>Play Again</h1>
            <div class="text-xs-center">
              <v-btn fab dark large color="primary" @click="logout">
                <v-icon dark>remove</v-icon>
              </v-btn>
              <v-btn fab dark large color="pink" @click="next">
                <v-icon dark>favorite</v-icon>
              </v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
    <v-content v-show="show" class="background">
      <v-layout row wrap color="blue" style="position: fixed; bottom: 15%; width: 100%;">
        <v-flex xs4 offset-xs4 sm2 offset-sm5 class="text-xs-center" v-for="i in numClick" :key="i">
          <div :id="i">
            <div style="background-color:blue; height:7px;">
            </div>
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center" id="fixed" >
            <v-btn v-show="btnStart" color="orange" id="btn-start" dark @click="start"><h1>Start</h1></v-btn>
            <v-btn :color="newColor" light id="btn-touch" @click="countClick" v-show="touch"><h3>Touch Here</h3></v-btn>
            <h2> You have <b>{{ time }}</b> secs left </h2>
          </div>
        </v-flex>
        <v-flex xs6 class="text-xs-left">
          <div id="fixed" style="padding: 0 10px;">
            <p>Name: {{name}}</p>
          </div>
        </v-flex>
        <v-flex xs6 class="text-xs-right">
          <div id="fixed" style="padding: 0 10px;">
            <p>Test: </p>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      active: false,
      numClick: 0,
      time: 30,
      colors: ['info', 'warning', 'purple', 'indigo', 'teal', 'cyan', 'green', 'orange', 'red', 'deep-orange'],
      newColor: '',
      show: true,
      hide: false,
      startPlay: false,
      btnStart: true,
      touch: false,
      countDown: 3,
      name: JSON.parse(localStorage.getItem('firebase')).name,
      setData: {
        id: JSON.parse(localStorage.getItem('firebase')).id,
        key: this.$route.params.id
      },
      player: {}
    }
  },
  mounted () {
    let self = this
    setInterval(function () {
      if (self.active === true) {
        self.time--
        if (self.time === 0) {
          self.active = false
          self.show = false
          self.hide = true
        }
      }
    }, 1000)
  },
  // watch: {
  //   player: function () {
  //     this.getPlayers(this.setData)
  //     this.players.forEach(player => {
  //       if (player.id == this.setData.id) {
  //         this.player = player
  //       }
  //     });
  //   }
  // },
  methods: {
    ...mapActions([
      'CheckLogin',
      'addTouch',
      'getPlayers'
    ]),
    start () {
      let self = this
      self.startPlay = true
      setInterval(function () {
        self.countDown--
        if (self.countDown === 0) {
          self.startPlay = false
          self.btnStart = false
          self.touch = true
          self.active = true
        }
      }, 1000)
    },
    countClick () {
      // this.addTouch(this.setData)
      // this.players.forEach(player => {
      //   if (player.id == this.setData.id) {
      //     this.player = player
      //   }
      // })
      // this.numClick = this.player.touch 
      // console.log(this.numClick)
      if (this.active === false){
        this.active = true
      }
      let color = this.colors[Math.round(Math.random() * (this.colors.length - 1))]
      this.newColor = color
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')

    },
    next () {
      this.$router.push('/rooms')
    }
  },
  computed: {
    ...mapState([
      'dataLogin',
      'isLogin',
      'players'
    ])
  },
  created () {

    this.CheckLogin()
    if (!this.isLogin) {
      this.$router.push('/')
    }
    else {
      this.getPlayers(this.setData)
      this.players.forEach(player => {
        if (player.id == this.setData.id) {
          this.player = player
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background {
    background: #3a6186;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #89253e, #3a6186);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #89253e, #3a6186); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  #fixed{
    position: relative;
    top: 100px;
  }
  #done {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgb(34, 34, 34);
  }
  #btn-touch {
    border: none;
    color: #fff;
    width: 200px;
    height: 200px;
    transition: 0.3s;
    border-radius: 50%;
    background-color: #2778f2;
  }
  #btn-start {
    border: none;
    color: #fff;
    width: 200px;
    height: 200px;
    transition: 0.3s;
    border-radius: 50%;
  }
  .flex-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .flex-container>div {
    /* background-color: #75ff05; */
    margin: 0px;
    text-align: center;
    line-height: 9px;
    font-size: 9px;
  }
  .centered {
    /* give it dimensions */
    padding-top: 30vh;
  }
  .centered>h1 {
    font-size:50px;
  }
</style>
