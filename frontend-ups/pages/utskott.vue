<template>
    <div class="container">
        <Header />
        <div class="utskott-background">
            <h3>Utbildningsrådet</h3>
        </div>
        <div class="content-wrapper">
            <div class="utskott container--full">
                <div class="utskott-text col-12">
                    <div class="post-title">
                        <h1> Vad gör vi? </h1>
                    </div>
                    <div class="post-text">
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ex sit amet justo feugiat viverra. Pellentesque sit amet velit tempor, euismod augue viverra, laoreet mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel ipsum vitae mi maximus rhoncus eu nec ex. In sollicitudin ut elit semper elementum. Praesent vitae magna non arcu imperdiet tempor id quis libero. Nunc id tempus neque. Pellentesque ac leo sapien.
                            Curabitur gravida vulputate sapien, et semper odio sagittis eu. 
                        </p>
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
                    <h5>Viktoria Pirainen</h5>
                    <button>Kontakta Utbildningsrådet</button>
                </div>
                
            </div>
            <Sponsor />
            <Instagram />
        </div>
        <MobileMenu />
        <Footer />
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
import Header from '~/components/Header.vue'
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'
import MobileMenu from '~/components/Mobile_menu.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        Sponsor,
        Instagram,
        MobileMenu,
        Footer
    }
}
</script>

