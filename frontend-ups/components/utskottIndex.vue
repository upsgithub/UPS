<template>
    <div>
        <div class="ordfaranderiet">
            <h3>Ordföranderiet</h3>
            <div class="ordfaranderiet-pictures">
                <div v-for="ordforande in ordforanden" class="ordfaranderiet-picture col-6">
                    <img :src="ordforande.better_featured_image.source_url" />
                    <h4>{{ ordforande.acf.titel }}</h4>
                    <h5>{{ ordforande.acf.namn }}</h5>
                </div>  
            </div>        
        </div>
        <div class="utskotten" >
            <h3>{{ content[0].title.rendered }}</h3>
            <div class="utskotten-text" v-html="content[0].content.rendered">
            </div>
        <div class="utskotten-pictures">
            <div class="utskotten-picture col-12" v-for="utskott in utskotten" ><nuxt-link :to="'/foreningen/utskotten/' + utskott.slug"><img class="img-banner" :src="utskott.better_featured_image.source_url" /><h3>{{ utskott.title.rendered }}</h3></nuxt-link></div> 
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

    h3 {
        color: black;
    }

.ordfaranderiet{
    text-align: center;
    width: 100%;

    &-pictures{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    &-picture{
        
        width: 50%;
        padding: 20px;
        
        img {
            border-radius: 50%;
            //max-width: 100%;
            height: 125px;
            width: 125px;
            object-fit: cover;
            
        }
    }
}

.utskotten{
    text-align: center;
    display: inline-block;

    &-text{
        padding: 10px;
        margin-bottom: 10px;
    }

    &-pictures{
        display: inline-block;
    }

    &-picture{
        float: left;
        padding: 10px;
        width: 100%;

        h3 {
            margin: 10px;
        }
        img{
            width: 100%;
        }
    }
}

    .img-banner {
        object-fit: cover;
        width: 100%;
        height: 160px;
        }

   @media only screen and (min-width: 800px) {
        .img-banner {
        object-fit: cover;
        width: 100%;
        height: 280px;
        }

        .ordfaranderiet{
        margin: 10px 0 40px 0;

        &-picture{
            margin-top: 10px;
            width: 25%;
            max-width: 167px;

            img {
            height: 200px;
            width: 200px;
            }
        }
    }
    
    .utskotten{
        &-picture{
            width: 50%;
        }
    }
   }
    
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            utskotten: [],
            ordforanden: [],
            content: []
        }
    },
    created() {
        this.get_utskotten();
        this.get_ordforande();
        this.get_content();
    },
    methods: {
        get_utskotten() {
            for(let i = 0; i < this.$store.state.utskott.length; i++) {
                this.utskotten.push(this.$store.state.utskott[i]);
            }
        },
        get_ordforande() {
            for(let i = 0; i < this.$store.state.ordforande.length; i++) {
                this.ordforanden.push(this.$store.state.ordforande[i]);
            }
        },
        get_content() {
            for(let i = 0; i < this.$store.state.pages.length; i++) {
                if(this.$store.state.pages[i].slug === 'foreningen') {
                    this.content.push(this.$store.state.pages[i]);
                }
                
            }
        }
    }
}                
</script>
