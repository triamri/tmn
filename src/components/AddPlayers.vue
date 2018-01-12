<template>
  <div>
    <v-content>
      <v-layout>
        <v-flex xs12 class="text-xs-center">
          <div class="centered">     
            <h1>Play</h1>
            <h2 class="color:blue">{{ nameRoom }}</h2>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
    <v-content v-if="lengthUser < 2">
      <v-layout row wrap color="blue" style="position: fixed; bottom: 20%; width: 100%;">
        <v-flex xs12 v-if="!play">
          <div class="text-xs-center" id="fixed">
            <v-btn :color="newColor" light id="btn-touch" @click="addPlayer($route.params.id)" ><h3>Join Room</h3></v-btn>
          </div>
        </v-flex>
        <v-flex xs12 v-else>
          <div class="text-xs-center" id="fixed">
            <v-btn :color="newColor" light id="btn-touch" @click="getStarter" ><h3>Mulai Permainan</h3></v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
    <v-content v-else style="text-align: center;">
      Maaf Room Penuh
    </v-content>

  </div>
</template>
<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formData: {
        nameRoom: ''
      },
      setData: {
        id: JSON.parse(localStorage.getItem('firebase')).id,
        key: this.$route.params.id
      },
      lengthUser: 0,
      play: false
    }
  },
  methods: {
    ...mapActions ([
      'addPlayer',
      'getPlayers'
    ]),
    getDataUser () {
      // this.addPlayer(this.$route.params.id)
      this.getPlayers(this.setData)
    },
    getRoom () {
      let starCountRef = firebase.database().ref('rooms/' + this.$route.params.id)
      starCountRef.on('value', (snapshot) => {
        this.nameRoom = snapshot.val().nameRoom
      })
    },
    getStarter () {
      this.$router.push({ name: 'Home', params: { id: this.$route.params.id } })
    },
    onJoin () {
      this.play = true
    }
  },
  created () {
    this.getRoom()
    this.lengthUser = this.players.length + 1
  },
  computed: {
    ...mapState([
      'players'
    ])
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
  }
  #btn-touch {
    border: none;
    color: #fff;
    width: 150px;
    height: 150px;
    transition: 0.3s;
    border-radius: 50%;
    background-color: #2778f2;
  }
  .flex-container {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
