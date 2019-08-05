import createCache from 'vuex-cache';

export const plugins = [ createCache() ]

export const actions = {
    async nuxtServerInit({ commit, dispatch}) {
        await dispatch('slides/get')
        await dispatch('posts/get')
        await dispatch('pages/get')
        await dispatch('policies/get')
        await dispatch('utskotten/get')
        await dispatch('samarbeten/get')
        await dispatch('ordforanden/get')
        await dispatch('produkter/get')
    }
}
