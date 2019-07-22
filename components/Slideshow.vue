<template>
    <div class="slideshow">
        <!-- Slider main container -->
        <div v-if="slides" class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
                    <nuxt-link :to="slide.acf.slidelank">
                        <img :srcset="slide.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                        slide.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                        slide.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                        slide.better_featured_image.source_url + ' 1920w'"
                        sizes="auto"
                        :src="slide.better_featured_image.source_url + '?lqip'"  :alt="slide.better_featured_image.alt_text"/>
                    </nuxt-link>
                    <div class="slideshow__bar">
                        <div class="slideshow__bar--w">
                            <div class="slideshow__bar-intro col-8 col-8--smaller">
                                <div class="v-centered">
                                    <h4 v-if="english" class="slideshow__bar-text">{{ slide.acf.slide_introtexten }}</h4> 
                                    <h4 v-else class="slideshow__bar-text">{{ slide.acf.slide_introtext }}</h4>
                                </div>
                            </div>
                            <div class="slideshow__bar-btn col-4 col-4--bigger">
                                <nuxt-link :to="slide.acf.slidelank" class="a-button">
                                   <button v-if="english" class="btn btn--default btn--small-h">{{ slide.acf.knapptexten }}</button>
                                    <button v-else class="btn btn--default btn--small-h">{{ slide.acf.knapptext }}</button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev--shadow"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-next--shadow"></div>
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>    
</template>

<script>
import Swiper from 'swiper'
import { mapMutations, mapState } from 'vuex'

export default{
    data:function(){
        return {
            color: "#eb5e43"
        }
    },
    computed: {
        ...mapState({
            slides: state => state.slides.list,
            slide: state => state.slides.slide
        })
    },
    mounted(){
        this.initSwiper()
    },
    methods: {
        ...mapMutations({
            setSlides: 'slides/set'
        }),
        initSwiper: function(){
            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                speed: 800,
                slidesPerView: 1,
                centeredSlides: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: true,
                },
                loop: false,
                preloadImages: false,
                // If we need pagination
                pagination: {
                el: '.swiper-pagination',
                clickable: true
                },

                // Navigation arrows
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
            }) 
        }
    }
}

</script>

<style lang="scss">
.slideshow{
    height: 170px;
    width: 100%;
    position: relative;
}
.vue-spinner--centered{
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
}
.swiper-container{
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
.swiper-container-horizontal>.swiper-pagination-bullets{
    bottom: 75px;
}
.swiper-pagination{
    &-bullet{
        width: 10px;
        height: 10px;
        border: 1px solid #eee;
        background: #EB5E43;
    }
}
.swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 100%;

      picture, source, img{
          object-fit: cover;
          overflow: hidden;
          width: 100%;
      }

      > a{
          min-width: 100%;
      }
}
.swiper-button-next, .swiper-button-prev{
    display: none;
}
.slideshow__bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 58px;
    background: #30242e;
    margin: 0;
    padding: 0;

    a{
        height: 100%;
    }

    &--w{
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding: 14px 20px;
        // margin-bottom: 40px;
    }

    &-intro{
        position: relative;
        height: 100%;
        float: left;

        > .v-centered {
            width: 100%;
        }

        &::after{
            content: "";
            clear: both;
            display: table;
        }
    }

    &-text{
        color: #eb5e43;
        font-size: 0.75rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    &-btn{
        float: right;
        text-align: right;

        &::after{
            content: "";
            clear: both;
            display: table;
        }
    }
}
@media only screen and (min-width: 480px) {
    .swiper-slide {
        img{
            margin-top: calc(380px / 5);
        }
    }
}
@media only screen and (min-width: 768px) {
    .swiper-slide {
        img{
            margin-top: calc(380px / 3);
        }
    }
    .swiper-button-prev {
        left: 40px;
    }
    .swiper-button-next{
        right: 40px;
    }
    .swiper-button-next, .swiper-button-prev{
        top: 45%;
        display: block;
    }
    .swiper-button-prev--shadow{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 60px;
        width: 250px;
        z-index: 9;
        -webkit-box-shadow: inset 170px 0px 100px -80px rgba(0,0,0,0.7);
        -moz-box-shadow: inset 170px 0px 100px -80px rgba(0,0,0,0.7);
        box-shadow: inset 170px 0px 100px -80px rgba(0,0,0,0.7);
    }
    .swiper-button-next--shadow{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 60px;
        width: 250px;
        z-index: 9;
        -webkit-box-shadow: inset -170px 0px 100px -80px rgba(0,0,0,0.7);
        -moz-box-shadow: inset -170px 0px 100px -80px rgba(0,0,0,0.7);
        box-shadow: inset -170px 0px 100px -80px rgba(0,0,0,0.7);
    }
    .slideshow{
        height: 380px;
    }
    .slideshow__bar{
        height: 60px;

        &--w{
            padding: 15px 40px;
        }
        &-text{
            font-size: 0.875rem;
            line-height: 2;
        }
        .btn{
            margin-right: 0px;
        }
    }
}
@media only screen and (min-width: 1376px) {
    .swiper-slide {
        img{
            margin-top: calc(380px / 2);
        }
    }
}
</style>
