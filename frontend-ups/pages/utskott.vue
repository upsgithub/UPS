<template>
    <div class="container">
        <div class="utskott-background">
            <h3>{{ utskottsnamn }}</h3>
        </div>
        <div class="content-wrapper">
            <div class="utskott container--full">
                <div class="utskott-text col-12">
                    <div class="post-title">
                        <h1> Vad gör vi? </h1>
                    </div>
                    <div class="post-text" v-html="utskottstext">
                            {{ utskottstext }}
                    </div>
                </div>
                <div class="utskott-kontakt col-12">
                    <div class="post-title">
                        <h1>Kontakt</h1>
                    </div>
                    <div class="utskott-picture">
                        <img src="../assets/img/profile.png" />
                    </div>
                    <h4>Ordförande</h4>
                    <h5>{{ utskott_ordfarande }}</h5>
                    <button>Kontakta {{ utskottsnamn }}</button>
                </div>
                
            </div>
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
        background-image: url("../assets/img/utbildning.png");
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
        img{
            width:60%;
            max-width: 230px;
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
import axios from 'axios'

export default {
    data:function() {
        return {
            utskottsnamn: "",
            utskottstext: "",
            utskott_ordfarande: "",
            kontaktlank: "",
            bannertext: ""
        }
    },
    created: function(){
        this.get_utskott();
    },
    methods: {
        get_utskott: function() {

            this.utskottsnamn = "Loading...";
            this.utskottstext = "Loading...";
            this.utskott_ordfarande = "Loading...";
            this.kontaktlank = "Loading...";
            this.bannertext = "Loading...";

            var currentUrl = this.$route.path;

            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2' + currentUrl).then((response) => {
                this.utskottsnamn = response.data.title.rendered;
                this.utskottstext = response.data.content.rendered;
                this.utskott_ordfarande = currentUrl;
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch:{
        $route(to, from){
            this.get_utskott();
        }
    },
    components: {
        Sponsor,
        Instagram
    }
}
</script>

