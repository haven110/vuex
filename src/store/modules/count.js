const state = {
    count: 0,
    
}

const getters = {
    count : state => {
        return state.count;
    }
}

const mutations = {
    incrementCount(state){
        state.count++
    },
    decrementCount(state,ploy){
        state.count -= ploy.count;
    }

}
const actions = {}


export default {
    state,
    getters,
    mutations,
    actions
}