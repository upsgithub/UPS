import axios from 'axios'

export const state = () => ({
    kalender: {}
})
  
export const mutations = {
    set(state, kalender) {
        state.kalender = kalender
    }
}

export const actions = {
    async get({commit}) {
      await axios.get('https://www.googleapis.com/calendar/v3/calendars/kalendern@uppsalapolitices.se/events?key=AIzaSyBHdD_5zD9F8YgfqeVa2xxL5hOoMFmdiZY')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        })
    }
}
export const getters = {
    
}