<template>
    <div class="containter">
        <div class="plain-background">
            <h3>{{ cur_page.title.rendered }}</h3>
        </div>

        <div class="content-wrapper">
            
            <div class="plain container--full">     
                <div class="plain-text col-12">
                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                    <div v-else class="post-title">
                    
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
import {store} from '../store/index.js'

export default {
    methods: {
        current_url:function(){
            var url = (this.$route.path.split("/"));
            return url[url.length - 1];
        },
        current_page:function(pagesArr, url){
            for(var i = 0; i < pagesArr.length; i++){
                if(pagesArr[i].title.rendered.toLowerCase() == url){
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
