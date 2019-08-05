import axios from 'axios'

export const state = () => ({
    kalender: [],
    loading: false
})
 
function checkDate(event) {
  if (event.start.date) {
      if (new Date(event.start.date) > new Date()) {
          event.start.realDate = event.start.date;
          return true;
      }
  }
  else if (event.start.dateTime) {
      if (new Date(event.start.dateTime) > new Date()) {
          event.start.realDate = event.start.dateTime;
          return true;
      }
  }
  
}

export const mutations = {
  loading(state, loading) {
      state.loading = loading;
  },
  kalender(state, kalender) {
    let temp = []
    for (let i = 0; i < kalender.items.length; i++) {
        if (kalender.items[i].start) {
            if (checkDate(kalender.items[i])) {       
                temp.push(kalender.items[i])
            }
        }
    }
    temp.sort((a, b) => (a.start.realDate > b.start.realDate) ? 1 : -1);
    state.kalender = temp;
  }
}

export const actions = {
    async get({commit}) {
      commit('loading', true)
      await axios.get('https://www.googleapis.com/calendar/v3/calendars/kalendern@uppsalapolitices.se/events?key=AIzaSyBHdD_5zD9F8YgfqeVa2xxL5hOoMFmdiZY')
        .then((res) => {
          if (res.status === 200) {
            commit('kalender', res.data)
            commit('loading', false)
          }
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const getters = {
  kalenderGetter: state => {
    return state.kalender.slice(0,4);
  }
}