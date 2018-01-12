import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import AddPlayers from '@/components/AddPlayers'
import RoomPlayers from '@/components/RoomPlayers'
import GetTouch from '@/components/GetTouch'
import AddRooms from '@/components/AddRooms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/add-rooms',
      name: 'AddRooms',
      component: AddRooms
    }
  ]
})
