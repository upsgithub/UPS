import axios from 'axios'

export const state = () => ({
    list: []
})
  
export const mutations = {
    set(state, slides) {
        state.list = slides
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'slides')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        })
    }
}