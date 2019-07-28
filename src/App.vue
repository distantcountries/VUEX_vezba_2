<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ counter }}</h1>
    <!-- <h1>{{ counterB }}</h1> -->

    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'app',

  computed: {
    // ...spreading
    ...mapGetters('ModuleA',{
      counter: 'getCountText'
    }),

    // ...mapGetters('ModuleB',{ //kada imamo gettere za vise modula
    //   counterB: 'getCountText'
    // }),

    // counter() {
    //   // return this.$store.state.counter;
    //   return this.$store.getters.getCountText //for getters
    // } //ovo bi pregazilo ...mapGetters da ga nismo zakomentarisali
  },

  methods: {
    ...mapActions('ModuleA', {
      increment:'incrementAfterTwoSeconds'
    }),

    // increment() {
    //   // this.$store.commit('increment'); //for mutation
    //   this.$store.dispatch('incrementAfterTwoSeconds'); //for action
    // } //ovo bi pregazilo  ...mapActions da ga nismo zakomentarisali
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
