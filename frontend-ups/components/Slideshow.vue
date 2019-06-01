<template>
    <div class="slider-wrapper">
        <div id="jssor_1">
            <!-- Loading Screen -->
            <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
                <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="../assets/slider/img/spin.svg" />
            </div>
            <div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:984px;height:380px;overflow:hidden;">
                <div>
                    <img data-u="image" src="../assets/slider/img/001.jpg" />
                </div>
                <div>
                    <img data-u="image" src="../assets/slider/img/002.jpg" />
                </div>
                <div>
                    <img data-u="image" src="../assets/slider/img/003.jpg" />
                </div>
                <div>
                    <img data-u="image" src="../assets/slider/img/004.jpg" />
                </div>
                <div>
                    <img data-u="image" src="../assets/slider/img/005.jpg" />
                </div>
            </div>
            <!-- Bullet Navigator -->
            <div data-u="navigator" class="jssorb051" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
                <div data-u="prototype" class="i" style="width:16px;height:16px;">
                    <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                        <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                    </svg>
                </div>
            </div>
            <!-- Arrow Navigator -->
            <div data-u="arrowleft" class="jssora051" style="width:55px;height:55px;top:0px;left:25px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
                </svg>
            </div>
            <div data-u="arrowright" class="jssora051" style="width:55px;height:55px;top:0px;right:25px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        script: [
            { 
                src: 'https://code.jquery.com/jquery-1.12.4.js',
                type: 'text/javascript'
            },
            { 
                src: '/jssor.slider-27.5.0.min.js',
                type: 'text/javascript'
            }             
        ]
    },
    mounted:function(){
        this.runSlider()
    },
    methods: {   
        runSlider:function(){

            var jssor_1_SlideshowTransitions = [{$Duration:800,$Opacity:2}];

            var jssor_1_options = {
                $AutoPlay: 1,
                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: jssor_1_SlideshowTransitions,
                    $TransitionsOrder: 1
                },
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$
                }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            /*#region responsive code begin*/

            var MAX_WIDTH = 1024;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        }
    }
}
</script>

<style lang="scss">

#jssor_1{
    margin: 0;
    position:relative;
    top:0px;
    left:0px;
    width:984px;
    height:280px;
    overflow:hidden;
    visibility:hidden;
}

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
</style>
