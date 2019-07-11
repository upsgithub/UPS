<template>
    <div class="containter">
        <sync-loader v-if="this.$store.state.loading" class="vue-spinner" :loading="this.$store.state.loading" :color="color"></sync-loader>
        <div v-else-if="cur_page"  class="banner-background">
            <img v-if="cur_page.acf.banner_bild" :srcset="cur_page.acf.banner_bild.url "/>
            <img v-else src="../../assets/img/plain_placeholder.jpg"/>
            <h3 v-if="cur_page.title" :style="cur_page.acf.bannertext">{{ cur_page.title.rendered }}</h3>
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
import {store} from '../../store/index.js'
import axios from 'axios'

export default {
    data() {
        return {
            color: '#eb5e43'
        }
    },
    created() {
        this.$store.dispatch('get_allPages');
    },
    methods: {
        current_url:function(){
            return "student"
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
.banner{
    text-align: center;
    display: inline-block;

    &-background{
        height: 150px;
        text-align: center;
        font-size: 20px;
        position: relative;
        overflow: hidden;
        

        > h3, img{
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
        }
        h3{
            color: #fff;
            z-index: 2;
            text-shadow: 0px 0px 8px rgba(50, 50, 50, 0.9);
        }

        img{
            width: 100%;
        }
    }

    &-kontakt{
        margin-bottom: 15px;
        h4{
            margin: 10px 0;
        }
        h5{
            margin: 15px 0;
            font-weight: 50;
        }
    }

    &-picture{
        border-radius: 50%;
		overflow: hidden;
		width: 160px;
		height: 160px;
        position: relative;
        margin: 5px auto 20px auto;

        img{
            max-width: 100%;
            height: auto;

            &::after{
                content: "";
                clear: both;
                display: table;
            }
        }
    }
}
.wp-block-image{
    margin: 20px 0;
}

@media only screen and (min-width: 800px) {
    .banner{
        margin: 20px 0;

        &-background{
            height: 280px;
            padding-top: 0px;
        } 

        &-text{
            text-align: left;
            width: 75%;
            float: left;
        }

        &-kontakt{
            width: 25%;
            float: left;
        }
    }
}
.plain{
    &-background{
        background-image: url("../../assets/img/plain_placeholder.jpg");
    }
}
</style>
