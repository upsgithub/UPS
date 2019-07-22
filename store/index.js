//import createCache from 'vuex-cache';

//export const plugins = [ createCache() ]

export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        await dispatch('slides/get')
        await dispatch('posts/get')
    }
}
