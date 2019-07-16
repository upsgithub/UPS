<template>
    <div>
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
            <img v-if="cur_page.acf.banner_bild" :data-srcset="cur_page.acf.banner_bild.sizes.medium + ' 320w,' +
                    cur_page.acf.banner_bild.sizes.medium_large + ' 768w,' +
                    cur_page.acf.banner_bild.sizes.large + ' 1024w,' +
                    cur_page.acf.banner_bild.url + ' 1920w'"
                    data-sizes="auto"
                    :data-src="cur_page.acf.banner_bild.url + '?lqip'" class="lazyload" :alt="cur_page.acf.banner_bild.alt"/>
            <h3 v-if="cur_page.title" :style="cur_page.acf.bannertext">{{ cur_page.title.rendered }}</h3>
        </div>
        <div class="content-wrapper"> 
            <div class="plain container--full">            
                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>         
                <div v-else class="plain-text col-12 motherpage-text">
                    <div class="post-title">
                    
                        <h1> {{ cur_page.title.rendered }} </h1>
                        
                    </div>

                    <div class="post-text" v-html=" cur_page.content.rendered"></div>

                </div>

                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                <template v-else>
                    <template v-if="english">
                        <div class="motherpage-preview" v-for="page in summary_pages_en" :key="page.id">
                            <div class="post-title">
                                <h1>{{ page.title.rendered }}</h1>
                            </div>
                            <div class="post-text" v-html="page.excerpt.rendered"></div>
                            <nuxt-link :to="cur_page.slug + '/' + page.slug"><button class="a-button">Go to {{ page.title.rendered }}</button></nuxt-link>
                        </div>
                    </template>
                    <template v-else>
                        <div class="motherpage-preview" v-for="page in summary_pages_sv" :key="page.id">
                            <div class="post-title">
                                <h1>{{ page.title.rendered }}</h1>
                            </div>
                            <div class="post-text" v-html="page.excerpt.rendered"></div>
                            <nuxt-link :to="cur_page.slug + '/' + page.slug"><button class="a-button">Gå till {{ page.title.rendered }}</button></nuxt-link>
                        </div>
                    </template>
                </template>
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
    data() {
        return {
            color: '#eb5e43'
        }
    },
    async mounted() {
        await this.$store.cache.dispatch('get_allPages');
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

            var cur_page_new = this.current_page(this.$store.state.pages, this.current_url());
            
            if(cur_page_new != undefined){
                // om man går från svensk sida till englesk översättning
                if(this.english &&  cur_page_new.acf.lang[0] == "Svenska"){
                    var page = this.current_page(this.$store.state.pages,  cur_page_new.acf.translates);

                    if(page == undefined){
                        return this.$store.state.english_error_page;
                    } else {
                        return page;
                    }

                // om man går från engelsk sida till svensk översättning 
                } else if(!(this.english) &&  cur_page_new.acf.lang[0] == "Engelska") 
                    return this.current_page(this.$store.state.pages,  cur_page_new.acf.translates);

                // om man navigerar normalt
                else {
                    return  cur_page_new;
                }
            }
        },
        summary_pages_sv(){
            if(this.cur_page != undefined){
                if(this.cur_page.id == 78) { 
                    return this.$store.getters.headerPagesUtbildning_swe; 
                }
                if(this.cur_page.id == 97) { 
                    return this.$store.getters.headerPagesStudent_swe; 
                }
            }
        },
        summary_pages_en(){
            if(this.cur_page != undefined){
                if(this.cur_page.id == 463) { 
                    return this.$store.getters.headerPagesUtbildning_eng; 
                }
                if(this.cur_page.id == 458) { 
                    return this.$store.getters.headerPagesStudent_eng; 
                }
            }
        },
        loading(){
            return this.cur_page == undefined;
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

.motherpage{
    
    &-preview{
    float: left;
    width: 100%;
    margin-bottom: 20px;
    }

    &-text{
        text-align:center;
    }
}


@media only screen and (min-width: 800px) {
    .motherpage{
    
        &-preview{
        width: 50%;
        min-height: 253px;
        float: left;
        }
    }

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
        background-image: url("../assets/img/plain_placeholder.jpg");
    }
}
</style>
