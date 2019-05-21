export const state = () => ({
    posts: [],
    welcomeMessage: []
})

export const mutations = {
    frontPagePosts(state, posts){
        state.posts = posts
    },
    frontPageWelcome(state, welcomeMessage){
        state.welcomeMessage = welcomeMessage
    }
}