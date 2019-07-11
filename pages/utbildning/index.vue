<template>
    <div class="containter">
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else-if="cur_page" class="plain-background">
            <h3>{{ cur_page.title.rendered }}</h3>
        </div>
        <div class="content-wrapper"> 
            <div class="plain container--full">     
                <div class="plain-text col-12">
                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                    <div v-else-if="cur_page" class="post-title">
                    
                        <h1> {{ cur_page.title.rendered }} </h1>
                        
                    </div>
                    <div v-if="cur_page" class="post-text" v-html="cur_page.content.rendered"></div>
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
    fetch({ store }){
        return axios.get(
            'https://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=30'
        ).then((response) => {
            store.commit('allPages', response.data)
        }).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        current_url:function(){
            return "utbildning"
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
        background-image: url("../../assets/img/plain_placeholder.jpg");
    }
}
</style>
