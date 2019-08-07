import axios from 'axios'

export const state = () => ({
    list: []
})
  
export const mutations = {
    set(state, utskotten) {
        state.list = utskotten
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'utskott')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        }).catch((error) => {
          console.log(error)
        })
    }
}