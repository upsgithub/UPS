<template>
    <div  class="container">
        <div class="utskott-background">
            <h3 :style="utskott.acf.bannertext">{{ utskott.title.rendered }}</h3>
            <img v-if="!utskott.better_featured_image && loaded" data-srcset="~assets/img/people_books@320w.jpg 320w,
            ~assets/img/people_books@480w.jpg  480w, 
            ~assets/img/people_books@768w.jpg 768w,
            ~assets/img/people_books@1024w.jpg  1024w, 
            ~assets/img/people_books@1376w.jpg  1376w, 
            ~assets/img/people_books@1920w.jpg  1920w"
                    sizes="auto"
                    data-src="~assets/img/people_books@1920w.jpg" class="lazyload" alt="people"/>
            <img v-if="utskott.better_featured_image && loaded" :srcset="utskott.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                    utskott.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                    utskott.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                    utskott.better_featured_image.source_url + ' 1920w'"
                    sizes="auto"
                    :src="utskott.better_featured_image.source_url + '?lqip'" class="lazyload" :alt="utskott.better_featured_image.alt_text"/>
            
        </div>
        <sync-loader class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div class="content-wrapper">
            <div class="utskott container--full">
                <div class="utskott-text col-12">
                
                    <div class="post-title">
                        <h1> Vad gör vi? </h1>
                    </div>
                    <div class="post-text" v-html="utskott.content.rendered"></div>
                    
                </div>
                
                <div class="utskott-kontakt col-12">
                    <div class="post-title">
                        <h1>Kontakt</h1>
                    </div>
                    <div class="utskott-picture">
                        <picture>
                            <source v-if="utskott.acf.ordforande_bild.url && loaded" v-bind:data-srcset="utskott.acf.ordforande_bild.url + '?webp'" type="image/webp">
                            <source v-if="utskott.acf.ordforande_bild.url && loaded" v-bind:data-srcset="utskott.acf.ordforande_bild.url" type="image/jpeg">
                            <img v-if="utskott.acf.ordforande_bild.url && loaded" v-bind:data-src="utskott.acf.ordforande_bild.url" class="lazyload" />
                        </picture>
                    </div>
                    <h4>Ordförande</h4>
                    <h5>{{ utskott.acf.ordforande_namn }}</h5>
                    <button>Kontakta {{ utskott.title.rendered }}</button>
                </div>
                
            </div>
            <KommandeEvent />
            <Sponsor />    
        </div>
        <Instagram />
    </div>
</template>

<style lang="scss">
.utskott{
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

@media only screen and (min-width: 800px) {
    .utskott{
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

</style>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'
import KommandeEvent from '~/components/kommandeEvent.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import axios from 'axios'
import {store} from '../store/index.js'

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
                if(utskottArr[i].title.rendered.toLowerCase() == url){
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

