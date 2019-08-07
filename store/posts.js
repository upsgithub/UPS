import axios from 'axios'

export const state = () => ({
    list: [],
    listEn: []
})
  
export const mutations = {
    set(state, posts) {
        let tempPosts = [];
        let tempPostsEn = [];
        posts.forEach(element => {
          if(element.categories[0] == 1){
            tempPostsEn.push(element);
          }
          else{
            tempPosts.push(element);
          }
        });

        state.list = tempPosts;
        state.listEn = tempPostsEn;
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'posts')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        }).catch((error) => {
          console.log(error)
        })
    }
}
export const getters = {
  threePosts: state => {
    return state.list.slice(0,3);
  },
  threePostsEn: state => {
    return state.listEn.slice(0,3);
  }
}