<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-center">
        <v-btn color="success" id="btn-touch">Touch Here</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    background-color: #f2ca27;
  }
</style>
