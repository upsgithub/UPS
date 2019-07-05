<template>
    <div  class="container">
        <div class="utskott-background" v-bind:style="{ backgroundImage: 'url(' + utskott + ')' }">
            <h3>{{ utskott.title.rendered }}</h3>
            
        </div>
        <!-- <sync-loader class="vue-spinner" :loading="loading" :color="color"></sync-loader> -->
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
                            <!-- This is not completed. We need to make sure that we store images from API call locally so we can use webPloader and lazyloading properly. -->
                            <source v-if="loaded" v-bind:data-srcset="utskott.acf.ordforande_bild.url + '?webp'" type="image/webp">
                            <source v-if="loaded" v-bind:data-srcset="utskott.acf.ordforande_bild.url" type="image/jpeg">
                            <img v-if="loaded" v-bind:data-src="utskott_acf.ordforande_bild.url" class="lazyload" />
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
        height: 100px;
        background-image: url("../../../assets/img/utbildning.png");
        background-position: center;
        background-size: cover;
        text-align: center;
        font-size: 20px;
        color: white;
        padding-top: 40px;
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
            height: 250px;
            padding-top: 115px;
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
import {store} from '../../../store/index.js'

export default {
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

