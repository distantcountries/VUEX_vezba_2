export const ModuleB = {
    namespaced: true,
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
};