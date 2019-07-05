<template>
    <div class="containter">
        <div class="plain-background">
            <h3>{{ cur_page.title.rendered }}</h3>
        </div>

        <div class="content-wrapper">
            
            <div class="plain container--full">     
                <div class="plain-text col-12">
                <sync-loader v-if="loading" class="vue-spinner" :loading="true" :color="color"></sync-loader>
                    <div v-else class="post-title">
                    
                        <h1> {{ cur_page.title.rendered }} </h1>
                        
                    </div>
                    <div class="post-text" v-html="cur_page.content.rendered">
                        
                     {{ cur_page.content.rendered }}
                        
                    </div>
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
    components: {
        Sponsor,
        Instagram,
        KommandeEvent,
        SyncLoader
    },
    methods:{
        get_current_page(pageArr, id){
            for(var i = 0; i < pageArr.length; i++){
                if(pageArr[i][0] == id){
                    return pageArr[i][1];
                }
            }
        },
        get_url(){
            return (this.$route.path.match(/\d+$/))[0];
        }
    },
    computed: {
        cur_page(){
            return this.get_current_page(this.$store.state.allPages, this.get_url());
        }
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
