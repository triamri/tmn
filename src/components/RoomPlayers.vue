<template>
  <div>
    <v-content>
      <v-layout>
        <v-container>
          <v-flex md2 xs4 class="text-xs-center" v-for="room in rooms" :key="room">
            <v-card color="grey">
              <v-card-actions id="btn-room">
                <router-link style="width:100%" :to="{ name: 'Player', params: { id: room.id }}">
                <v-btn light small>
                  <v-icon color="blue">folder</v-icon>
                  &nbsp; {{ room.nameRoom }}
                </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 class="text-xs-center" style="position: fixed; bottom: 15%; width: 100%;">
            <v-container>
              <v-btn color="red" dark id="btn-add-rooms" @click="addRooms">
                <v-icon>control_point</v-icon>
                Add Rooms
              </v-btn>
            </v-container>
          </v-flex>
        </v-container>
      </v-layout>
    </v-content>
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
    ]),
    addRooms () {
      this.$router.push('/add-rooms')
    }
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

<style>
  a {
    text-decoration: none
  }
  #btn-add-rooms {
    border: none;
    color: #fff;
    width: 100px;
    height: 100px;
    transition: 0.3s;
    border-radius: 50%;
  }
  /* Visibility */
  /* Desktop and bigger */
  @media (min-width: 960px) {
    .visible-small {
      display: none !important;
    }
    .visible-medium {
      display: none !important;
    }
    .hidden-large {
      display: none !important;
    }
  }
  /* Tablets portrait */
  @media (min-width: 768px) and (max-width: 959px) {
    .visible-small {
      display: none !important;
    }
    .visible-large {
      display: none !important ;
    }
    .hidden-medium {
      display: none !important;
    }
  }
  /* Phone landscape and smaller*/
  @media (max-width: 767px) {
    .visible-medium {
      display: none !important;
    }
    .visible-large {
      display: none !important;
    }
    .hidden-small {
      display: none !important;
    }
    #btn-room {
      font-size: 12;
    }
  }
</style>

