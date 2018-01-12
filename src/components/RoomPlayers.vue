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
      'rooms'
    ])
  },
  methods: {
    ...mapActions([
      'getRooms'
    ])
  },
  created () {
    this.getRooms()
  }
}
</script>
