export const state = () => ({
    token: ''
})
  
export const mutations = {
    set(state, token){
        state.token = token;
    }
}

export const actions = {
    get({commit}){
        commit('set', '1441523367.1677ed0.84515ba1c1de4a7ba69b2df1f8e21e4a')
    }
}