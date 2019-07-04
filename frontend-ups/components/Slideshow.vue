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
                        src="~assets/img/globe_new@1920w.jpeg?lqip" class="lazyload" alt="globe"/>
                    </nuxt-link>
                    <div class="slideshow__bar">
                        <div class="slideshow__bar--w">
                            <h4 class="slideshow__bar-text col-8 col-8--smaller">Politices kandidatsprogram - Studierna inom programmet...</h4>
                            <div class="slideshow__bar-btn col-4 col-4--bigger">
                                <nuxt-link to="/kandidat" class="a-button">
                                    <button class="btn btn--default btn--small-h">Läs mer</button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
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
                        src="~assets/img/globe_new@1920w.jpeg?lqip" class="lazyload" alt="globe"/>
                    </nuxt-link>
                    <div class="slideshow__bar">
                        <div class="slideshow__bar--w">
                            <h4 class="slideshow__bar-text col-8 col-8--smaller">Politices kandidatsprogram - Studierna inom programmet...</h4>
                            <div class="slideshow__bar-btn col-4 col-4--bigger">
                                <nuxt-link to="/kandidat" class="a-button">
                                    <button class="btn btn--default btn--small-h">Läs mer</button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
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
                        src="~assets/img/globe_new@1920w.jpeg?lqip" class="lazyload" alt="globe"/>
                    </nuxt-link>
                    <div class="slideshow__bar">
                        <div class="slideshow__bar--w">
                            <h4 class="slideshow__bar-text col-8 col-8--smaller">Politices kandidatsprogram - Studierna inom programmet...</h4>
                            <div class="slideshow__bar-btn col-4 col-4--bigger">
                                <nuxt-link to="/kandidat" class="a-button btn--link">
                                    <button class="btn btn--default btn--small-h">Läs mer</button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
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
                delay: 4000,
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
<<<<<<< HEAD
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

      img{
          object-fit: cover;
          overflow: hidden;
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

    &-text{
        float: left;
        color: #eb5e43;
        word-wrap: break-word;
        overflow: hidden;
        font-size: 0.75rem;

        &::after{
            content: "";
            clear: both;
            display: table;
        }
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
@media only screen and (min-width: 768px) {
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
=======
.jssorl-009-spin img {
    animation-name: jssorl-009-spin;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes jssorl-009-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/*jssor slider bullet skin 051 css*/
.jssorb051 .i {position:absolute;cursor:pointer;}
.jssorb051 .i .b {fill:#fff;fill-opacity:0.5;}
.jssorb051 .i:hover .b {fill-opacity:.7;}
.jssorb051 .iav .b {fill-opacity: 1;}
.jssorb051 .i.idn {opacity:.3;}

/*jssor slider arrow skin 051 css*/
.jssora051 {display:block;position:absolute;cursor:pointer;}
.jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}
.jssora051:hover {opacity:.8;}
.jssora051.jssora051dn {opacity:.5;}
.jssora051.jssora051ds {opacity:.3;pointer-events:none;}
>>>>>>> 5bcf1f72b3bc909ef951396852eecd00dd61df6b
</style>
