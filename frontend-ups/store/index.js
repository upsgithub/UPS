export const state = () => ({
    posts: [],
    welcomeMessage: [],
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
            state.utskott.push([utskottData[i].id, utskottData[i].title.rendered]);
        }
    },
    headerPages(state, pages){
        for(var i = 0; i < pages.length; i++){
            if(pages[i].parent == 78){
                state.utbildning.push([pages[i].id, pages[i].title.rendered]);
            }
            if(pages[i].parent == 97){
                state.student.push([pages[i].id, pages[i].title.rendered]);
            }
            if(pages[i].parent == 138){
                state.forening.push([pages[i].id, pages[i].title.rendered]);
            }
        }
    },
    allPages(state, pages){
        for(var i = 0; i < pages.length; i++){
            state.pages.push([pages[i].id, pages[i]]);
        }
    },
    slideShow(state, slides){
        state.slides = slides;
    }
}