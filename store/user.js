export const state = () => ({
    user:[]
}) 

export const actions = {
    // setUser({commit},payload) {    
    //      commit('setUser',payload)
    //      }
}

export const getters = {

}

export const mutations = {
   setUser(state,payload){
        state.user.push(payload)
   }
}
