import createCache from 'vuex-cache';

export const plugins = [ createCache() ]

export const state = () => ({
    posts: [],
    welcomeMessage: [],
    utskottHeader: [],
    utskott: [],
    utbildning: [],
    student: [],
    forening: [],
    pages: [],
    slides: [],
    samarbeten: [],
    produkter: [],
    ordforande: [],
    postsEN: [],
    postsSV: [],
    kalender: [],
    english: false,
    loading: false,
    loadingSlide: false
})

function checkDate(event_start) {
    return (new Date(event_start.dateTime) > new Date()); 
}

export const mutations = {
    kalender(state, kalender) {
        let temp = []
        for (let i = 0; i < kalender.items.length; i++) {
            if (checkDate(kalender.items[i].start)) {
                temp.push(kalender.items[i])
            }
        }
        temp.sort((a, b) => (a.start.dateTime > b.start.dateTime) ? 1 : -1);
        state.kalender = temp;
    },
    loading(state, loading) {
        state.loading = loading;
    },
    loadingSlide(state, loadingSlide) {
        state.loadingSlide = loadingSlide;
    },
    ordforande(state, ordforande){
        state.ordforande = ordforande;
    },
    produkter(state, produkter){
        state.produkter = produkter;
    },
    Posts(state, posts){
        state.postsSV = [];
        state.postsEN = [];
        for(var i = 0; i < posts.length; i++){
            if(posts[i].categories[0] == 1){
                state.postsEN.push(posts[i]);
            } else {
                state.postsSV.push(posts[i]);
            }
        }

    },
    frontPageWelcome(state, welcomeMessage){
        state.welcomeMessage = welcomeMessage;
    },
    headerUtskott(state, utskottData){
        state.utskottHeader = utskottData;
        /* for(var i = 0; i < utskottData.length; i++ ){
            state.utskottHeader.push(utskottData[i].title.rendered);
        } */
    },
    headerPages(state, pages){
        for(var i = 0; i < pages.length; i++){
            if(pages[i].parent == 78){
                state.utbildning.push(pages[i]);
            }
            if(pages[i].parent == 97){
                state.student.push(pages[i]);
            }
            if(pages[i].parent == 138){
                state.forening.push(pages[i]);
            }
        }
    },
    allPages(state, pages){
        state.pages = pages;
    },
    allUtskott(state, utskott){
        state.utskott = utskott;
    },
    slideShow(state, slides){
        state.slides = slides;
    },
    samarbeten(state, partners){
        state.samarbeten = partners;
    },
    change_language(state, new_setting){
        state.english = new_setting;
    }
}
import axios from 'axios'

export const actions = {
    async get_kalender (context) {
        context.commit('loading', true)
        await axios.get('https://www.googleapis.com/calendar/v3/calendars/lucas.bornegrim@gmail.com/events?key=AIzaSyCBdwd1xviBKSzFDHm3WHwh6QvSyrX9tGo').then((response) => {
            context.commit('kalender', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_produkter (context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/produkter').then((response) => {
            context.commit('produkter', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_headerUtskott (context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/utskott').then((response) => {
            context.commit('headerUtskott', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_headerPages (context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=50').then((response) => {
            context.commit('headerPages', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_slideShow (context) {
        context.commit('loadingSlide', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/slides').then((response) => {
            context.commit('slideShow', response.data)
            context.commit('loadingSlide', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_samarbeten (context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/partner').then((response) => {
            context.commit('samarbeten', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_Posts (context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/posts?per_page=50').then((response) => {
            context.commit('Posts', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_allPages (context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=50').then((response) => {
            context.commit('allPages', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_ordforande(context) {
        context.commit('loading', true)
            await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/ordforande').then((response) => {
            context.commit('ordforande', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    async get_allUtskott(context) {
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/utskott').then((response) => {
            context.commit('allUtskott', response.data)
            context.commit('loading', false)
        }).catch((error) => {
            console.log(error)
        })
    },
    change_language(context, new_setting) {
        context.commit('english', new_setting)
    }
}

export const getters = {
    kalender: state => {
        return state.kalender;
    },
    foreningPage: state => {
        return state.pages.filter(pages => pages.slug === 'foreningen')
    },
    foreningPage_eng: state => {
        return state.pages.filter(pages => pages.slug === 'association')
    },
    headerPagesUtbildning_swe: state => {
        return state.utbildning.filter(utbildning => utbildning.acf.lang[0] === 'Svenska')
    },
    headerPagesUtbildning_eng: state => {
        return state.utbildning.filter(utbildning => utbildning.acf.lang[0] === 'Engelska')
    },
    headerPagesStudent_swe: state => {
        return state.student.filter(student => student.acf.lang[0] === 'Svenska')
    },
    headerPagesStudent_eng: state => {
        return state.student.filter(student => student.acf.lang[0] === 'Engelska')
    },
    headerPagesForening_swe: state => {
        return state.forening.filter(forening => forening.acf.lang[0] === 'Svenska')
    },
    headerPagesForening_eng: state => {
        return state.forening.filter(forening => forening.acf.lang[0] === 'Engelska')
    },
    english_error_page: state => {
        return state.pages.filter(pages => pages.slug === 'not-in-english')
    }
}