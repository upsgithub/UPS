<template>
    <div class="content-wrapper">
        <div class="ordfaranderiet">
            <h3>Ordföranderiet</h3>
            <div class="ordfaranderiet-pictures">
                <div class="ordfaranderiet-picture col-6">
                    <img src="../assets/img/profile.png" />
                    <h4>Ordförande</h4>
                    <h5>Viktoria Pirainen</h5>
                </div>  
                <div class="ordfaranderiet-picture col-6">
                    <img src="../assets/img/profile.png" />
                    <h4>Ordförande</h4>
                    <h5>Viktoria Pirainen</h5>
                </div>      
                <div class="ordfaranderiet-picture col-6">
                    <img src="../assets/img/profile.png" />
                    <h4>Ordförande</h4>
                    <h5>Viktoria Pirainen</h5>
                </div>      
                <div class="ordfaranderiet-picture col-6">
                    <img src="../assets/img/profile.png" />
                    <h4>Ordförande</h4>
                    <h5>Viktoria Pirainen</h5>
                </div>
            </div>        
        </div>
        <div class="utskotten">
            <h3>Utskotten</h3>
            <div class="utskotten-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ex sit amet justo feugiat viverra. Pellentesque sit amet velit tempor, euismod augue viverra, laoreet mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel ipsum vitae mi maximus rhoncus eu nec ex. In sollicitudin ut elit semper elementum. Praesent vitae magna non arcu imperdiet tempor id quis libero. Nunc id tempus neque. Pellentesque ac leo sapien.
                Curabitur gravida vulputate sapien, et semper odio sagittis eu. </p>
            </div>
            <div class="utskotten-pictures">
                <div class="utskotten-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Kommunikationsutskottet</h3></div>  
                <div class="utskotten-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Sportutskottet</h3></div>      
                <div class="utskotten-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Kulturutskottet</h3></div>      
                <div class="utskotten-picture col-12"><img src="../assets/img/placeholder_img.png" /><h3>Utbildningsutskottet</h3></div>
            </div>
        </div>
        <Instagram />
        <Sponsor />
    </div>
</template>

<style lang="scss">


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

@media only screen and (min-width: 600px) {
    .ordfaranderiet{
        margin: 10px 0 40px 0;

        &-picture{
            margin-top: 10px;
            width: 25%;
            max-width: 167px;
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
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'

export default {
    components: {
        Sponsor,
        Instagram
    }
}
</script>

