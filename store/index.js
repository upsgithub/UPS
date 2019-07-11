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
    english: false,
    loading: false
})

export const mutations = {
    loading(state, loading) {
        state.loading = loading;
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
        context.commit('loading', true)
        await axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/slides').then((response) => {
            context.commit('slideShow', response.data)
            context.commit('loading', false)
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