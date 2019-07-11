<template>
    <div>
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else class="utskott-background">
            <h3 v-if="english" :style="utskott.acf.bannertext">{{ utskott.acf.english_title }}</h3>
            <h3 v-else :style="utskott.acf.bannertext">{{ utskott.title.rendered }}</h3>
            <img v-if="!utskott.better_featured_image && loaded" data-srcset="/img/people_books@320w.jpg 320w,
           /img/people_books@480w.jpg  480w, 
            /img/people_books@768w.jpg 768w,
            /img/people_books@1024w.jpg  1024w, 
            /img/people_books@1376w.jpg  1376w, 
            /img/people_books@1920w.jpg  1920w"
                    sizes="auto"
                    data-src="/img/people_books@1920w.jpg" class="lazyload" alt="people"/>
            <img v-if="utskott.better_featured_image && loaded" :srcset="utskott.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                    utskott.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                    utskott.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                    utskott.better_featured_image.source_url + ' 1920w'"
                    sizes="auto"
                    :src="utskott.better_featured_image.source_url + '?lqip'" class="lazyload" :alt="utskott.better_featured_image.alt_text"/>
            
        </div>
        
        <div class="content-wrapper">
            <div class="utskott container--full">
                <div class="utskott-text col-12">
                    <div v-if="english" class="post-title">
                        <h1> What do we do? </h1>
                    </div>
                    <div v-else class="post-title">
                        <h1> Vad gör vi? </h1>
                    </div>

                    <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                    <template v-else>
                        <div v-if="utskott && english" class="post-text" v-html="utskott.acf.engelsk_text"></div>
                        <div v-elseif="utskott" class="post-text" v-html="utskott.content.rendered"></div>
                    </template>     
                </div>

                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                <div v-else class="utskott-kontakt col-12">
                    <div v-if="english" class="post-title">
                        <h1>Contact</h1>
                    </div>
                    <div v-else class="post-title">
                        <h1>Kontakt</h1>
                    </div>
                    
                    <div class="utskott-picture">
                        <picture v-if="utskott.acf.ordforande_bild.url && loaded">
                            <source v-bind:data-srcset="utskott.acf.ordforande_bild.url + '?webp'" type="image/webp">
                            <source v-bind:data-srcset="utskott.acf.ordforande_bild.url" type="image/jpeg">
                            <img v-bind:data-src="utskott.acf.ordforande_bild.url" class="lazyload" />
                        </picture>
                    </div>
                    <template v-if="utskott && english">
                        <h4>President</h4>
                        <h5>{{ utskott.acf.ordforande_namn }}</h5>
                        <button>Contact {{ utskott.acf.english_title }}</button>
                    </template>
                    <template v-elseif="utskott">
                        <h4>Ordförande</h4>
                        <h5>{{ utskott.acf.ordforande_namn }}</h5>
                        <button else>Kontakta {{ utskott.title.rendered }}</button>
                    </template>
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

export default {
    data:function(){
        return {
            color: "#eb5e43"
        }
    },
    created() {
        return axios.get(
            'https://api.uppsalapolitices.se/wp-json/wp/v2/utskott'
        ).then((response) => {
            this.$store.commit('allUtskott', response.data)
        }).catch((error) => {
            console.log(error)
        })
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
        },
        loaded(){
            return this.utskott != undefined;
        },
        english(){
            return this.$store.state.english;
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

