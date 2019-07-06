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

export default {
    data:function(){
        return {
            loaded: true
        }
    },
    methods: {
        current_url:function(){
            var url = (this.$route.path.split("/"));
            return url[url.length - 1];
        },
        current_utskott:function(utskottArr, url){
            for(var i = 0; i < utskottArr.length; i++){
                if(utskottArr[i].slug == url){
                    return utskottArr[i];
                }
            }
        }
    },
    computed:{
        utskott(){
            return this.current_utskott(this.$store.state.utskott, this.current_url());
        },
        loading(){
            return this.utskott == undefined;
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
