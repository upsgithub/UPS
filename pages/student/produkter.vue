<template>
        <div class="containter">
        <div v-if="cur_page" class="plain-background">
            <h3>{{ cur_page.title.rendered }}</h3>
        </div>
        <div class="content-wrapper">
            
            <div class="plain container--full">     
                <div class="plain-text col-12">
                
                    <div v-if="cur_page" class="post-title">
                    
                        <h1> {{ cur_page.title.rendered }} </h1>
                        
                    </div>
                    <div v-if="cur_page" class="post-text" v-html="cur_page.content.rendered"></div>
                    
                </div>
            </div>
            
            <produkter />
            <KommandeEvent />
            <Sponsor />
            
        </div>
        <Instagram />
    </div>                
</template>

<style lang="scss" scoped>


</style>

<script>
import axios from 'axios'
import produkter from '~/components/produkter.vue'
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'
import KommandeEvent from '~/components/kommandeEvent.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
    data() {
        return {
            loading: true,
            color: "#eb5e43"
        }
    },
    methods: {
        current_url:function(){
            var url = (this.$route.path.split("/"));
            return url[url.length - 1];
        },
        current_page:function(pagesArr, url){
            for(var i = 0; i < pagesArr.length; i++){
                if(pagesArr[i].slug == url){
                    return pagesArr[i];
                }
            }
        }
    },
    computed:{
        cur_page(){
            return this.current_page(this.$store.state.pages, this.current_url());
        },
        loading(){
            return this.cur_page == undefined;
        }
    },
    components: {
        produkter,
        Sponsor,
        Instagram,
        KommandeEvent,
        SyncLoader
    },
    fetch({ store }){
        return axios.all([
            axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=30'),
            axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/produkter')    
        ]).then(axios.spread((pageRes, produktRes) => {
            store.commit('allPages', pageRes.data),
            store.commit('produkter', produktRes.data)
            this.loading = false;
        })).catch((error) => {
            console.log(error)
        })
    }
}                
</script>

