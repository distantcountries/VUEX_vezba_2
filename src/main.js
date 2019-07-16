import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 100
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  actions: {
    incrementAfterTwoSeconds(context) {
      setTimeout(()=> {
        context.commit('increment');
      }, 2000);
    }
  },
  getters: {
    getCountText(state) {
      return `Hello, ${state.counter}`;
    }
  }
});

// commit pri pozivu mutacije..mutacije se koriste sa sinhrone
// dispatch pri pozivu akcije...akcije se koriste za asinhrone funkcije

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
