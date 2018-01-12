<template>
  <div>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 style="padding-top:30vh">
            <v-form>
              <v-text-field
                label="Name Rooms"
                v-model="nameRoom"
                required
              ></v-text-field>
              <v-btn
                @click="submitRoom(formData)"
              >
                Submit
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
      'submitRoom'
    ])
  }

}
</script>

<style>

</style>
