import axios from 'axios'

export const state = () => ({
    list: []
})
  
export const mutations = {
    set(state, pages) {
        state.list = pages
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'pages?per_page=50')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        })
    }
}
export const getters = {
    
}