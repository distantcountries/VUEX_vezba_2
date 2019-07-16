<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ counter }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'app',

  computed: {
    counter() {
      // return this.$store.state.counter;
      return this.$store.getters.getCountText //for getters
    }
  },

  methods: {
    increment() {
      // this.$store.commit('increment'); //for mutation
      this.$store.dispatch('incrementAfterTwoSeconds'); //for action
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
