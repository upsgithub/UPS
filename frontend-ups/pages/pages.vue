<template>
    <div class="containter">
        <div class="plain-background">
            <h3>{{ sida_namn }}</h3>
            
        </div>
        <div class="content-wrapper">
        
            <div class="plain container--full">
                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                <div  v-else class="plain-text col-12">
                    <div class="post-title">
                    
                        <h1> {{ sida_title }} </h1>
                        
                    </div>
                    <div class="post-text" v-html="sida_text">
                        
                     {{ sida_text }}
                        
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
import axios from 'axios'

export default {
    data:function() {
        return {
            loading: true,
            color: "#eb5e43", 
            sida_namn: "",
            sida_title: "",
            sida_text: "",
            sida_lank: ""
        }
    },
    created: function(){
        this.get_sida();
        

    },
    methods: {
        get_sida: function() {

            this.sida_namn = "";
            this.sida_title = "";
            this.sida_text = "";
            this.sida_lank = "";

            var currentUrl = this.$route.path;

            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2' + currentUrl).then((response) => {
                this.sida_namn = response.data.title.rendered;
                this.sida_title = response.data.title.rendered;
                this.sida_text = response.data.content.rendered;
                this.sida_lank = currentUrl;
                this.loading = false;
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch:{
        $route(to, from){
            this.get_sida();
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
