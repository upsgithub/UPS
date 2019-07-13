<template>
        <div v-if="cur_page" class="container">
        <sync-loader v-if="this.$store.state.loading" class="vue-spinner" :loading="this.$store.state.loading" :color="color"></sync-loader>
        <div v-else-if="cur_page"  class="banner-background">
            <img v-if="!cur_page.acf.banner_bild" data-srcset="/img/people_books@320w.jpg 320w,
           /img/people_books@480w.jpg  480w, 
            /img/people_books@768w.jpg 768w,
            /img/people_books@1024w.jpg  1024w, 
            /img/people_books@1376w.jpg  1376w, 
            /img/people_books@1920w.jpg  1920w"
                    data-sizes="auto"
                    data-src="/img/people_books@1920w.jpg" class="lazyload" alt="people"/>
            <img v-if="cur_page.acf.banner_bild" :srcset="cur_page.acf.banner_bild.sizes.medium + ' 320w,' +
                    cur_page.acf.banner_bild.sizes.medium_large + ' 768w,' +
                    cur_page.acf.banner_bild.sizes.large + ' 1024w,' +
                    cur_page.acf.banner_bild.url + ' 1920w'"
                    data-sizes="auto"
                    :src="cur_page.acf.banner_bild.url + '?lqip'" class="lazyload" :alt="cur_page.acf.banner_bild.alt"/>
            <h3 v-if="cur_page.title" :style="cur_page.acf.bannertext">{{ cur_page.title.rendered }}</h3>
        </div>
        <div class="content-wrapper">
            
            <div class="plain container--full">     
                <div class="plain-text col-12">
                
                    <div class="post-title">
                    
                        <h1> {{ cur_page.title.rendered }} </h1>
                        
                    </div>
                    <div class="post-text" v-html="cur_page.content.rendered"></div>
                    
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
    async mounted() {
        await this.$store.cache.dispatch('get_allPages');
        await this.$store.cache.dispatch('get_produkter');
    }
}                
</script>

