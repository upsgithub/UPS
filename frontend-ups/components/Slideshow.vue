<template>
    <div class="slideshow">
        <div class="slideshow arrow left"><img @click="switchslide(-1)" src="../assets/img/arrow_left.png" /></div>
        <div class="slideshow image hidden"><img :src="getImgUrl(currentImg - 1)" v-bind:alt="currentImg" /></div>
        <div class="slideshow image current"><img :src="getImgUrl(currentImg)" v-bind:alt="currentImg" /></div>
        <div class="slideshow image hidden"><img :src="getImgUrl(currentImg + 1)" v-bind:alt="currentImg" /></div>
        <div class="slideshow arrow right"><img @click="switchslide(1)" src="../assets/img/arrow_right.png" /></div>
            {{ currentImg }}
    </div>
</template>

<style>
    .slideshow{
        width: 1000px;
        height: 350px;
        text-align: center;
        overflow: hidden;
        position: relative;
    }

        .arrow{
            width: 60px;
            height: 100px;
            position: absolute;
            margin-top: -50px;
            opacity: 0.5;
            z-index: 2;
        }

            .left{
                top: 50%;
                left: 3%;
                margin-left: -30px; 
            }

            .right{
                top: 50%;
                right: 3%;
                margin-right: -30px; 
            }

        .slideshow img{
            height: 100%;
            max-width: 100%;
        }

            .hidden{
                display: none;
            }

</style>

<script>
export default {
    data() {
        return {
            maxImg: 3,
            currentImg: 2
        }
    },
    methods: {
        switchslide(diff) {
            // animate maybbbee
            this.currentImg += diff;
            if (this.currentImg > this.maxImg){
                this.currentImg = 1;
            }
            if (this.currentImg < 1){
                this.currentImg = this.maxImg;
            }
        },
        getImgUrl(currentImg) {
            if(currentImg < 1) {
                currentImg = this.maxImg;
            }
            if(currentImg > this.maxImg) {
                currentImg = 1;
            }
            return require('../assets/img/slider/slide'+currentImg+'.jpg')
        }
    }
}
</script>

