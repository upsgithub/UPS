<template>
    <div class="containter">
        <div class="plain-background">
            <h3>Fristående ämbeten</h3>
        </div>
        <div class="content-wrapper">
            <div class="plain container--full">
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1>Fristående ämbeten</h1>
                    </div>
                    <div class="post-text">
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ex sit amet justo feugiat viverra. Pellentesque sit amet velit tempor, euismod augue viverra, laoreet mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel ipsum vitae mi maximus rhoncus eu nec ex. In sollicitudin ut elit semper elementum. Praesent vitae magna non arcu imperdiet tempor id quis libero. Nunc id tempus neque. Pellentesque ac leo sapien.
                            Curabitur gravida vulputate sapien, et semper odio sagittis eu. 
                        </p>
                    </div>
                    <button>Läs mer!</button>
                </div>
            </div>
            <Sponsor />
            
        </div>
        <Instagram />
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