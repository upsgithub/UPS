import axios from 'axios'

export const state = () => ({
    list: [],
    page: {},
    pageEn: {},
    forening_list: [],
    forening_en_list: []
})
  
export const mutations = {
    set(state, pages) {
        state.list = pages
    },
    foreningPages(state, pages){
      let tempForening = [];
      let tempForeningEn = [];
      pages.forEach(function(element) {
        if(element.slug == 'foreningen'){
          tempForening.push(element);
        }
        else if(element.slug == 'association'){
          tempForeningEn.push(element);
        }
      });
      state.forening_list = tempForening;
      state.forening_en_list = tempForeningEn;
    },
    firstForeningPage(state){
      state.page = state.forening_list[0];
    },
    firstForeningPageEn(state){
      state.pageEn = state.forening_en_list[0];
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'pages?per_page=50')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
            commit('foreningPages', res.data)
            commit('firstForeningPage')
            commit('firstForeningPageEn')
          }
        })
    }
}
export const getters = {
    
}