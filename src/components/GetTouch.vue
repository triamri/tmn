<template>
<div>
  <div class="row">
    Touch Player
    <ul>
      <li v-for="p in players" :key="p">{{ p.name }} - {{ p.touch }}</li>
    </ul>
  </div>
  <div>
      {{ name }} <v-btn @click="addTouch(setData)">Touch</v-btn>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      name: JSON.parse(localStorage.getItem('firebase')).name,
      setData: {
        id: JSON.parse(localStorage.getItem('firebase')).id,
        key: this.$route.params.id
      }
    }
  },
  computed: {
    ...mapState([
      'players'
    ])
  },
  methods: {
    ...mapActions([
      'addTouch',
      'getPlayers'
    ])
  },
  created () {
    this.getPlayers(this.setData)
  }
}
</script>
