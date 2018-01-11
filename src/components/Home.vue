<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4 sm2 offset-sm5 class="text-xs-center">
      <v-card class="flex-container text-xs-center">
        <div color="info">{{numClick}}</div>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <div class="text-xs-center" style="position: fixed; bottom: 20%; width: 100%; padding-right:20px;">
        <v-btn :color="newColor" light id="btn-touch" @click="countClick">Touch Here</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      numClick: 0,
      time: 30,
      colors: ['info', 'warning', 'purple', 'indigo', 'teal', 'cyan', 'green', 'orange', 'red', 'deep-orange'],
      newColor: ''
    }
  },
  methods: {
    countClick () {
      this.numClick += 1
      let color = this.colors[Math.round(Math.random() * (this.colors.length - 1))]
      this.newColor = color
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #btn-touch {
    position: relative;
    top: 100px;
    border: none;
    color: #fff;
    width: 200px;
    height: 200px;
    transition: 0.3s;
    border-radius: 50%;
    background-color: #2778f2;
  }
  .flex-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .flex-container>div {
    /* background-color: #75ff05; */
    margin: 0px;
    text-align: center;
    line-height: 9px;
    font-size: 9px;
  }
</style>
