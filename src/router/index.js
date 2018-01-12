import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import AddPlayers from '@/components/AddPlayers'
import RoomPlayers from '@/components/RoomPlayers'
import GetTouch from '@/components/GetTouch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/play',
      name: 'Home',
      component: Home
    },
    {
      path: '/addplayer/:id',
      name: 'Player',
      component: AddPlayers
    },
    {
      path: '/touch/:id',
      name: 'Touch',
      component: GetTouch
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: RoomPlayers
    }
  ]
})
