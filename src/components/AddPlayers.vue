<template>
  <div class="row">
    {{ $route.params.id }}
    <fieldset>
      <button type="submit" class="btn btn-primary" @click="addPlayer($route.params.id)">Submit</button>
    </fieldset>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        nameRoom: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addPlayer'
    ])
  }
}
</script>
