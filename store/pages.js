import axios from 'axios'

export const state = () => ({
    list: [],
    page: {},
    pageEn: {},
    forening_list: [],
    forening_en_list: [],
    forening_main: [],
    forening_en_main: [],
    utbildning_list: [],
    utbildning_en_list: [],
    student_list: [],
    student_en_list: [],
    english: false
})
  
export const mutations = {
    set(state, pages) {
        state.list = pages
    },
    pages(state, pages){
      let tempForeningMain = [];
      let tempForeningMainEn = [];
      let tempForening = [];
      let tempForeningEn = [];
      let tempUtb = [];
      let tempUtbEn = [];
      let tempStudent = [];
      let tempStudentEn = [];
      pages.forEach(function(element) {
        if(element.slug == 'foreningen'){
          tempForeningMain.push(element);
        }
        if(element.slug == 'association'){
          tempForeningMainEn.push(element);
        }
        if(element.parent == 78 && element.acf.lang[0] === 'Svenska'){
          tempUtb.push(element);
        }
        if(element.parent == 78 && element.acf.lang[0] === 'Engelska'){
          tempUtbEn.push(element);
        }
        if(element.parent == 97 && element.acf.lang[0] === 'Svenska'){
          tempStudent.push(element);
        }
        if(element.parent == 97 && element.acf.lang[0] === 'Engelska'){
          tempStudentEn.push(element);
        }
        if(element.parent == 138 && element.acf.lang[0] === 'Svenska'){
          tempForening.push(element);
        }
        if(element.parent == 138 && element.acf.lang[0] === 'Engelska'){
          tempForeningEn.push(element);
        }
      });
      state.forening_main = tempForeningMain;
      state.forening_en_main = tempForeningMainEn;
      state.forening_list = tempForening;
      state.forening_en_list = tempForeningEn;
      state.utbildning_list = tempUtb;
      state.utbildning_en_list = tempUtbEn;
      state.student_list = tempStudent;
      state.student_en_list = tempStudentEn;
    },
    firstForeningPage(state){
      state.page = state.forening_main[0];
    },
    firstForeningPageEn(state){
      state.pageEn = state.forening_en_main[0];
    },
    setLang(state){
      if(state.english){
        state.english = false;
      }
      else{
        state.english = true;
      }
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'pages?per_page=50')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
            commit('pages', res.data)
            commit('firstForeningPage')
            commit('firstForeningPageEn')
          }
        }).catch((error) => {
          console.log(error)
        })
    }
}
export const getters = {
  english_error_page: state => {
    return state.list.filter(list => list.slug === 'not-in-english')
  }
}