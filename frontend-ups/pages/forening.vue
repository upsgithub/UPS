<template>
    <div class="container">
        <Header />
        <div class="content-wrapper">
            <div class="ordfaranderiet">
                <h3>Ordföranderiet</h3>
                <div class="ordfaranderiet-pictures">
                    <div class="ordfaranderiet-picture col-6"><img src="../assets/img/profile.png" /></div>  
                    <div class="ordfaranderiet-picture col-6"><img src="../assets/img/profile.png" /></div>      
                    <div class="ordfaranderiet-picture col-6"><img src="../assets/img/profile.png" /></div>      
                    <div class="ordfaranderiet-picture col-6"><img src="../assets/img/profile.png" /></div>
                </div>        
            </div>
            <div class="utskott">
                <div class="utskott-text">
                <h3>Utskotten</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ex sit amet justo feugiat viverra. Pellentesque sit amet velit tempor, euismod augue viverra, laoreet mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel ipsum vitae mi maximus rhoncus eu nec ex. In sollicitudin ut elit semper elementum. Praesent vitae magna non arcu imperdiet tempor id quis libero. Nunc id tempus neque. Pellentesque ac leo sapien.
                   Curabitur gravida vulputate sapien, et semper odio sagittis eu. </p>
                </div>
                <div class="utskott-pictures">
                    <div class="utskott-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Kommunikationsutskottet</h3></div>  
                    <div class="utskott-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Sportutskottet</h3></div>      
                    <div class="utskott-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Kulturutskottet</h3></div>      
                    <div class="utskott-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Utbildningsutskottet</h3></div>
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
h3 {
    margin: 10px;
}

.ordfaranderiet{
    text-align: center;
    display: inline-block;
    width: 100%;

    &-pictures{
        display: inline-block;
    }

    &-picture{
        float: left;
        padding: 10px;

        img{
            width: 100%;
        }
    }
}

.utskott{
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

        img{
            width: 100%;
        }
    }
}

@media only screen and (min-width: 600px) {
    .ordfaranderiet{
            &-picture{
                width: 25%;
                max-width: 167px;
            }
        }
    

    .utskott{
        &-picture{
            width: 50%;
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

