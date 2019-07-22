import axios from 'axios'

export const state = () => ({
    list: [],
    post: {}
})
  
export const mutations = {
    set(state, posts) {
        state.list = posts
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'posts')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        })
    },
    async set({commit}, post) {
        await commit('set', post)
    }
}
export const getters = {
    postsEng: state => {
        return state.list.filter(post => post.categories[0] === 1)
    }
}