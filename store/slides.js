import axios from 'axios'

export const state = () => ({
    list: [],
    slide: {}
})
  
export const mutations = {
    set(state, slides) {
        state.list = slides
    }
}

export const actions = {
    async get({commit}) {
      console.log("here")
      await axios.get(process.env.API_BASE_URL + 'slides')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        })
    },
    async set({commit}, slide) {
      await commit('set', slide)
    }
}