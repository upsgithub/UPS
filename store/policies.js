import axios from 'axios'

export const state = () => ({
    list: []
})
  
export const mutations = {
    set(state, policies) {
        state.list = policies
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'policy')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        })
    }
}
export const getters = {
    
}