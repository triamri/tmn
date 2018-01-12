<template>
  <div class="row">
    {{ $route.params.id }}
    <fieldset>
      <button type="submit" class="btn btn-primary" @click="getDataUser">Submit</button>
    </fieldset>
  </div>
</template>
<script>
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
      teamBlue: [],
      teamRed : []
    }
  },
  methods: {
    ...mapActions([
      'addPlayer',
      'getPlayers'
    ]),
    getDataUser () {
      // this.addPlayer(this.$route.params.id)
      this.getPlayers(this.setData)
      let length = this.players.length + 1
      let random  = Math.floor(Math.random() * (length - 1) )

    }
  },
  computed: {
    ...mapState([
      'players'
    ])
  }

}
</script>
