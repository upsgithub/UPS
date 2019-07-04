<template>
    <div class="slideshow">
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <nuxt-link to="/utskotten">
                        <img srcset="~assets/img/globe_new@320w.jpeg 320w,
                        ~assets/img/globe_new@480w.jpeg 480w,
                        ~assets/img/globe_new@768w.jpeg 768w,
                        ~assets/img/globe_new@1024w.jpeg 1024w,
                        ~assets/img/globe_new@1376w.jpeg 1376w,
                        ~assets/img/globe_new@1920w.jpeg 1920w"
                        sizes="auto"
                        src="~assets/img/globe_new@1920w.jpeg" class="lazyload" alt="globe"/>
                    </nuxt-link>
                </div>
                <div class="swiper-slide">
                    <nuxt-link to="/forening">
                        <img srcset="~assets/img/globe_new@320w.jpeg 320w,
                        ~assets/img/globe_new@480w.jpeg 480w,
                        ~assets/img/globe_new@768w.jpeg 768w,
                        ~assets/img/globe_new@1024w.jpeg 1024w,
                        ~assets/img/globe_new@1376w.jpeg 1376w,
                        ~assets/img/globe_new@1920w.jpeg 1920w"
                        sizes="auto"
                        src="~assets/img/globe_new@1920w.jpeg" class="lazyload" alt="globe"/>
                    </nuxt-link>
                </div>
                <div class="swiper-slide">
                    <nuxt-link to="/student">
                        <!-- 
                            We can use the following on pictures which are not a part of the slider.
                            <picture>
                            <source data-srcset="~assets/img/globe_new@480w.jpeg?webp"
                            sizes="auto"  type="image/webp" media="(max-width: 480px)" alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@480w.jpeg"
                            sizes="auto" type="image/jpeg" media="(max-width: 480px)" alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@768w.jpeg?webp"
                            sizes="auto" type="image/webp" media="(max-width: 768px)" alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@768w.jpeg"
                            sizes="auto" type="image/jpeg" media="(max-width: 768px)" alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@1376w.jpeg?webp"
                            sizes="auto" type="image/webp" media="(max-width: 1376px)" alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@1376w.jpeg"
                            sizes="auto" type="image/jpeg" media="(max-width: 1376px)" alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@1920w.jpeg?webp"
                            sizes="auto" type="image/webp"  alt="globe"/>
                            <source data-srcset="~assets/img/globe_new@1920w.jpeg"
                            sizes="auto" type="image/jpeg" alt="globe"/>
                            <img data-src="~assets/img/globe_new@1920w.jpeg" class="lazyload" alt="globe"/>
                        </picture>
                        <noscript>
                            <img src="~assets/img/globe_new@1920w.jpeg" alt="globe"/>
                        </noscript> -->
                        <img srcset="~assets/img/globe_new@320w.jpeg 320w,
                        ~assets/img/globe_new@480w.jpeg 480w,
                        ~assets/img/globe_new@768w.jpeg 768w,
                        ~assets/img/globe_new@1024w.jpeg 1024w,
                        ~assets/img/globe_new@1376w.jpeg 1376w,
                        ~assets/img/globe_new@1920w.jpeg 1920w"
                        sizes="auto"
                        src="~assets/img/globe_new@1920w.jpeg" class="lazyload" alt="globe"/>
                    </nuxt-link>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
    
export default{
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            speed: 800,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            loop: true,
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

</script>

<style lang="scss">
.slideshow{
    height: 200px;
    width: 100%;
}
.swiper-container{
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
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
}
.swiper-button-prev {
    left: 20px;
}
.swiper-button-next{
    right: 20px;
}
@media only screen and (min-width: 768px) {
    .swiper-button-prev {
        left: 40px;
    }
    .swiper-button-next{
        right: 40px;
    }
    .slideshow{
        height: 380px;
    }
}
</style>
