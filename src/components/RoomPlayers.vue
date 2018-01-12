<template>
  <div class="row">
    <ul>
      <li v-for="room in rooms" :key="room">{{ room.nameRoom }} <router-link :to="{ name: 'Player', params: { id: room.id }}">data</router-link></li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'rooms',
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'getRooms',
      'CheckLogin'
    ])
  },
  created () {
    this.CheckLogin()
    if (!this.isLogin) {
      this.$router.push('/')
    } else {
      this.getRooms()
    }
  }
}
</script>
