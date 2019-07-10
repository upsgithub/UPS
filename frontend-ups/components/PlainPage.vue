<template>
    <div class="containter">
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else class="plain-background">
            <h3>{{ cur_page.title.rendered }}</h3>
        </div>

        <div class="content-wrapper">
            
            <div class="plain container--full">
                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>     
                <div v-else class="plain-text col-12">
                    <div  class="post-title">

                        <h1> {{ cur_page.title.rendered }} </h1>
                        
                    </div>
                    <div class="post-text" v-html="cur_page.content.rendered"></div>
                </div>
            </div>
            
            <KommandeEvent />
            <Sponsor />
        </div>
        <Instagram />
    </div>        
</template>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'
import KommandeEvent from '~/components/kommandeEvent.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import axios from 'axios'

export default {
    data:function(){
        return {
            color: "#eb5e43"
        }
    },
    created() {
        return axios.get(
            'http://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=30'
        ).then((response) => {
            this.$store.commit('allPages', response.data)
        }).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        current_url:function(){
            var url = (this.$route.path.split("/"));
            return url[url.length - 1];
        },
        getslug(pagesArr, title){
            for(var i = 0; i < pagesArr.length; i++){
                if(pagesArr[i].title.rendered == title){
                    return pagesArr[i].slug;
                }
            }
            // return 'freestanding-positions'
        },
        current_page:function(pagesArr, url){
            for(var i = 0; i < pagesArr.length; i++){
                if(pagesArr[i].slug == url){
                    return pagesArr[i];
                }
            }
        },
    },
    computed:{
        cur_page(){
            
            var cur_page = this.current_page(this.$store.state.pages, this.current_url());

            // om man går från svensk sida till englesk översättning
            if(this.english && cur_page.acf.lang[0] == "Svenska"){
                return this.current_page(this.$store.state.pages, cur_page.acf.translates);

            // om man går från engelsk sida till svensk översättning 
            } else if(!(this.english) && cur_page.acf.lang[0] == "Engelska") 
                return this.current_page(this.$store.state.pages, cur_page.acf.translates);

            // om man navigerar normalt
            else {
                return cur_page;
            }

        },
        loading(){
            return this.cur_page == undefined;
        },
        english(){
            return this.$store.state.english;
        }
    },
    components: {
        Sponsor,
        Instagram,
        KommandeEvent,
        SyncLoader
    }
}
</script>

<style lang="scss">
.plain{
    &-background{
        background-image: url("../assets/img/plain_placeholder.jpg");
    }
}
</style>
