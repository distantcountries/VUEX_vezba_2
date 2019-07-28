import Vue from 'vue'
import Vuex from 'vuex';

import { ModuleA } from './module_a.store'
import { ModuleB } from './module_b.store'
 
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        ModuleA,
        ModuleB
    }
});
  
  // commit pri pozivu mutacije..mutacije se koriste sa sinhrone
  // dispatch pri pozivu akcije...akcije se koriste za asinhrone funkcije


