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
    ordforande: []
})

export const mutations = {
    ordforande(state, ordforande){
        state.ordforande = ordforande;
    },
    produkter(state, produkter){
        state.produkter = produkter;
    },
    Posts(state, posts){
        state.posts = posts;
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
    }
}