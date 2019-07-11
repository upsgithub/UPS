<template>
    <div>
        <div class="ordfaranderiet">
            <h3>Ordföranderiet</h3>
            <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            <div v-else class="ordfaranderiet-pictures">
                <template v-for="ordforande in ordforanden">
                    <div class="picture-holder" :key="ordforande.id">
                        <div class="ordfaranderiet-picture col-6">
                            <picture v-if="ordforande.better_featured_image.source_url && !loading">
                                <source v-bind:data-srcset="ordforande.better_featured_image.source_url + '?webp'" type="image/webp">
                                <source v-bind:data-srcset="ordforande.better_featured_image.source_url" type="image/jpeg">
                                <img v-bind:data-src="ordforande.better_featured_image.source_url" class="lazyload" />
                            </picture>
                        </div> 
                        <div class="ordfaranderiet-title">
                            <h4 v-if="ordforande && english">{{ ordforande.acf.titelen }}</h4>
                            <h4 v-else> {{ ordforande.acf.titel }} </h4>
                            <h5 v-if="ordforande">{{ ordforande.acf.namn }}</h5>
                        </div> 
                    </div>
                </template>
            </div>
        </div>
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else class="utskotten" >
            <h3 v-if="content[0]">{{ content[0].title.rendered }}</h3>
            <div v-if="content[0]" class="utskotten-text" v-html="content[0].content.rendered">
        </div>
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else class="utskotten-pictures">
            <div class="utskotten-picture" v-for="utskott in utskotten" :key="utskott.id">
                <div class="utskotten-picture__inner">
                    <nuxt-link :to="'/foreningen/utskotten/' + utskott.slug">
                        <picture v-if="utskott.acf.foreningssida_utskottsbild.url && !loading">
                            <source v-bind:data-srcset="utskott.acf.foreningssida_utskottsbild.url + '?webp'" type="image/webp">
                            <source v-bind:data-srcset="utskott.acf.foreningssida_utskottsbild.url" type="image/jpeg">
                            <img v-bind:data-src="utskott.acf.foreningssida_utskottsbild.url" class="lazyload img-banner" />
                        </picture>
                        <h3>{{ utskott.title.rendered }}</h3>
                    </nuxt-link>
                </div>
            </div> 
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
    data() {
        return {
            color: "#eb5e43"
        }
    },
    created() {
        this.$store.dispatch('get_ordforande');
        this.$store.dispatch('get_allUtskott');
        //this.$store.dispatch('get_allPages');
    },
    components: {
        SyncLoader
    },
    methods: {

    },
    computed: {
        english() {
            return this.$store.state.english;
        },
        content() {
            if(this.english) {
                return this.$store.getters.foreningPage_eng;
            } else {
                return this.$store.getters.foreningPage;
            }
        },
        utskotten(){
            return this.$store.state.utskott;
        },
        ordforanden(){
            return this.$store.state.ordforande;
        },
        loading(){
            return (this.utskott || this.ordforanden || this.content) == undefined;
        },
        loaded(){
            return (this.utskott || this.ordforanden || this.content) != undefined;
        }
    }
}                
</script>

<style lang="scss">


.picture-holder{
    width: 50%;
    margin-bottom: 20px;
}

.ordfaranderiet{
    text-align: center;
    width: 100%;

    &-pictures{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    &-picture{
        border-radius: 50%;
		overflow: hidden;
		width: 120px;
		height: 120px;
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

.utskotten{
    text-align: center;
    display: block;
    margin-top: 10px;
    // text-align: left;
    // display: inline-block;

    h3{
        text-align: center;
    }

    &-text{
        padding: 10px;
        margin-bottom: 10px;
    }

    &-pictures{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    &-picture{
        float: left;
        padding: 0px;
        width: 100%;
        a{
            display: block;
            padding: 10px;
        }

        &::after{
            content: "";
            clear: both;
            display: table;
        }

        h3 {
            text-align: center;
            margin: 10px;
            color: black;
        }
    }
}

.img-banner {
    object-fit: cover;
    width: 100%;
    height: 160px;
}

@media only screen and (min-width: 480px) {
    .ordfaranderiet{
        &-picture{
            width: 160px;
		    height: 160px;
        }
    }
}



@media only screen and (min-width: 768px) {
    .img-banner {
        object-fit: cover;
        width: 100%;
        height: 280px;
    }

    .picture-holder{
        width: 25%;
        margin-bottom: 0px;
    }


    .ordfaranderiet{
    margin: 10px 0 0px 0;

        &-picture{
            margin-top: 10px;
        }

        &-title{
            width: 100%;
            text-align: center;
        }
    }

    .utskotten{
        margin-top: 30px;
        &-picture{
            width: 50%;
        }
    }
}
    
</style>