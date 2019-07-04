<template>
    <div class="samarbeten container--full">
        <h4>Våra samarbetspartners</h4>
        <div v-if="Sponsors_exist" class="samarbeten-wrapper">
            <div class="samarbete-logo col-6" v-for="sponsor in Samarbeten">
                <a class="a-button" v-bind:href="sponsor.acf.lank"><img v-bind:src="sponsor.acf.bild.url" /></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// Samarbeten[0].acf.bild.url
export default {
    data:function() {
        return {
            Samarbeten: [],
            Sponsors_exist: false,
            width_of_sponsor: 0
        }
    },
    created:function(){
        this.get_samarbeten();
    },
    methods: {
        get_samarbeten: function() {
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/partner').then((response) => {
                this.Samarbeten = response.data;
                this.Sponsors_exist = true;
                this.width_of_sponsor = 100 / response.data.length;
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss">
    .samarbeten{
        width: auto;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;   
        margin: 20px 0;
        padding: 20px 10px;
        text-align: center;
    }

    .samarbeten-wrapper{
        width: 100%;
        display: inline-block;
        margin-top: 50px;
    }   

    .samarbete-logo{
        height: 50px;
        margin: 15px 0;
        padding: 0 15px;
        float: left;
        &::after{
            clear: both;
        }
    }

    .samarbete-logo img{
        max-width:100%;
        max-height:100%;
    }

    @media only screen and (min-width: 600px) {
        .samarbete-logo{
            width: 25%;
            height: 120px;
            margin: 0;
            padding: 0 5px;
        }
    }
</style>



