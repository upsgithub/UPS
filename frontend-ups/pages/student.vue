<template>
    <div class="containter">
        <div class="plain-background">
            <h3>Student</h3>
        </div>
        <div class="content-wrapper">
            <div class="plain container--full">
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Student </h1>
                    </div>
                    <div class="post-text">
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ex sit amet justo feugiat viverra. Pellentesque sit amet velit tempor, euismod augue viverra, laoreet mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel ipsum vitae mi maximus rhoncus eu nec ex. In sollicitudin ut elit semper elementum. Praesent vitae magna non arcu imperdiet tempor id quis libero. Nunc id tempus neque. Pellentesque ac leo sapien.
                            Curabitur gravida vulputate sapien, et semper odio sagittis eu. 
                        </p>
                    </div>
                </div>
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Medlem </h1>
                    </div>
                    <div class="post-text">
                        <p> Detta beskriver medlem </p>
                        <nuxt-link to="/medlem" class="a-button"><button>Medlem</button></nuxt-link>
                    </div>
                </div>
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Produkter </h1>
                    </div>
                    <div class="post-text">
                        <p> Detta beskriver Produkter </p>
                        <nuxt-link to="/produkter" class="a-button"><button>Produkter</button></nuxt-link>
                    </div>
                </div>
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Alumn </h1>
                    </div>
                    <div class="post-text">
                        <p> Detta beskriver Alumn </p>
                        <nuxt-link to="/alumn" class="a-button"><button>Alumn</button></nuxt-link>
                    </div>
                </div>
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Stipendier </h1>
                    </div>
                    <div class="post-text">
                        <p> Detta beskriver Stipendier </p>
                        <nuxt-link to="/stipendier" class="a-button"><button>Stipendier</button></nuxt-link>
                    </div>
                </div>
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Projektpotten </h1>
                    </div>
                    <div class="post-text">
                        <p> Detta beskriver Projektpotten </p>
                        <nuxt-link to="/projektpotten" class="a-button"><button>Projektpotten</button></nuxt-link>
                    </div>
                </div>
            </div>
            <Sponsor />
            <Instagram />
        </div>
    </div>        
</template>

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

<style lang="scss">
.plain{
    &-background{
        background-image: url("../assets/img/plain_placeholder.jpg");
    }
}
</style>

