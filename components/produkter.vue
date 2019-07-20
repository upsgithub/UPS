<template>
    <div class="content-wrapper">
        <div class="produkt-flex">
            <div class="item" v-for="produkt in produkter" :key="produkt.id">
                <img v-if="produkt.better_featured_image" 
                        :data-srcset="produkt.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                        produkt.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                        produkt.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                        produkt.better_featured_image.source_url + ' 1920w'"
                        data-sizes="auto"
                        :data-src="produkt.better_featured_image.source_url + '?lqip'"  
                        :alt="produkt.better_featured_image.alt_text" 
                        class="lazyload" >
                <div v-if="english && produkt.acf.namnen"> {{ produkt.acf.namnen }} </div>
                <div v-else> {{ produkt.acf.namn }} </div>
                <div> {{ produkt.acf.pris }} </div>
            </div>
        </div>
    </div>        
</template>

<style lang="scss" scoped>
    .produkt-flex {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    img {
        width: 200px;
        min-height: 200px;     
    }
    
    .content-wrapper {
        background-color: #EFEFEF;
    }

    .item {
        text-align: center;
        width: 100%;
        font-size: 15px;
        font-weight: 500;
        object-fit: cover;
        padding-top: 30px;
    }

    @media screen and (min-width: 500px) {
    
    .content-wrapper {
        background-color: #FFF;
    }

        img {
            width: 130px;
            height: 130px;
        }
        .item {
            width: 50%;
            background-color: #EFEFEF;
        }
    }

    @media only screen and (min-width: 800px) {
        img {
            width: 200px;
            height: 70%;     
        }

        .content-wrapper {
        background-color: #FFF;
        }

        .item {
        text-align: center;
        width: 33%;
        font-weight: 500;
        object-fit: cover;
        font-size: 15px;
        }
    }

</style>

<script>
import axios from 'axios'

export default {
    computed: {
        english() {
            return this.$store.state.english;
        },
        produkter() {
            return this.$store.state.produkter;
        }
    }         
}
           
</script>

