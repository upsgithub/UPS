export const state = () => ({
    posts: [],
    welcomeMessage: [],
    utskottHeader: [],
    utskott: [],
    utbildning: [],
    student: [],
    forening: [],
    pages: [],
    slides: []
})

export const mutations = {
    frontPagePosts(state, posts){
        for(var i = 0; i < 3; i++){
            state.posts.push(posts[i])
        }
    },
    frontPageWelcome(state, welcomeMessage){
        state.welcomeMessage = welcomeMessage
    },
    headerUtskott(state, utskottData){
        for(var i = 0; i < utskottData.length; i++ ){
            state.utskottHeader.push(utskottData[i].title.rendered);
        }
    },
    headerPages(state, pages){
        for(var i = 0; i < pages.length; i++){
            if(pages[i].parent == 78){
                state.utbildning.push(pages[i].title.rendered);
            }
            if(pages[i].parent == 97){
                state.student.push(pages[i].title.rendered);
            }
            if(pages[i].parent == 138){
                state.forening.push(pages[i].title.rendered);
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
    }
}