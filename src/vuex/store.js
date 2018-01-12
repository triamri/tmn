import Vue from 'vue'
import Vuex from 'vuex'
// import VueFire from 'vuefire'
import firebase from 'firebase'

// const database = firebase.database()

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rooms: [],
    players: [],
    demage: 50,
    player: '',
    dataLogin: {},
    isLogin: false
  },
  mutations: {
    saveRoom (state, payload) {
      state.rooms.push(payload)
    },
    getRooms (state, payload) {
      state.rooms = payload
    },
    setPlayers (state, payload) {
      state.players = payload
    },
    getDemage (state) {
      state.demage += 1
    },
    getLogin (state, payload) {
      state.dataLogin = payload
    },
    setLogin (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    getRooms ({ commit }, payload) {
      let starCountRef = firebase.database().ref('rooms')
      let returnArr = []
      starCountRef.on('value', (snapshot) => {
        let arr = 0
        for (var item in snapshot.val()) {
          returnArr.push()
          let getData = snapshot.val()[item]
          let newData = {
            id: item,
            nameRoom: getData.nameRoom
          }
          returnArr[arr] = newData
          arr++
        }
        commit('getRooms', returnArr)
      })
    },
    getPlayers ({ commit }, payload) {
      let starCountRef = firebase.database().ref('rooms/' + payload.key + '/user')
      let returnArr = []
      starCountRef.on('value', (snapshot) => {
        for (var item in snapshot.val()) {
          returnArr.push()
          let getData = snapshot.val()[item]
          returnArr.push(getData)
        }
        console.log(returnArr)
        commit('setPlayers', returnArr)
        returnArr = []
      })
    },
    submitRoom ({ commit }, payload) {
      firebase.database().ref('rooms/').push(payload)
      .then((respone) => {
        const getUserLocal = JSON.parse(localStorage.getItem('firebase'))
        getUserLocal.touch = 50
        getUserLocal.player = 'ts'
        firebase.database().ref('rooms/' + respone.key + '/user').child(getUserLocal.id).set(getUserLocal)
      })
      .catch(err => console.log(err)
      )
    },
    addPlayer ({ commit }, payload) {
      const getUserLocal = JSON.parse(localStorage.getItem('firebase'))
      getUserLocal.touch = 50
      getUserLocal.player = 'ps'
      firebase.database().ref('rooms/' + payload + '/user').child(getUserLocal.id).set(getUserLocal)
    },
    addTouch ({ commit, state }, payload) {
      const getUserLocal = JSON.parse(localStorage.getItem('firebase'))
      getUserLocal.touch = state.demage + 1
      getUserLocal.player = 'ps'
      firebase.database().ref('rooms/' + payload.key + '/user/' + payload.id).update(getUserLocal)
      commit('getDemage')
    },
    loginPlayer ({ commit }) {
      return new Promise((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')
        firebase.auth().signInWithPopup(provider)
        .then((resultData) => {
          const dataUser = {
            id: resultData.user.uid,
            name: resultData.user.displayName,
            image: resultData.user.photoURL
          }
          const jsonString = JSON.stringify(dataUser)
          localStorage.setItem('firebase', jsonString)
          commit('getLogin', dataUser)
          resolve()
        })
        .catch(err => console.log(err))
      })
    },
    CheckLogin ({ commit }) {
      if (localStorage.getItem('firebase')) {
        commit('setLogin', true)
      }
    }
  }
})

export default store
