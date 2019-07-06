<template>
<div class="noShow-mobile">
        <div :style="display" class="menu mobile container--full" >
            <div  class="flex-mobile">
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/">Start</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link to="/utbildning">Utbildning</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link to="/student">Student</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/event">Event</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/foreningen">Föreningen</nuxt-link></h2></div>
            </div>
        </div>
        <div class="burger" @click="showMenu()">
            <!-- <img src="../assets/img/menu-button.png" /> -->
            <div class="burger-h">
                <div class="burger__menu-icon" @click="toggleClose()" v-bind:class="menuClose">
                    <div class="burger__menu-icon__middle"></div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default{
    data: function() {
        return {
            display: "display: none",
            menuClose: ""
        }
    },
    methods: {
       showMenu() {
           if(this.display === "display: none") {
               this.display = "";
           } else {
               this.display = "display: none";
           }
           
       },
       toggleClose(){
           if(this.menuClose){
               this.menuClose = "";
            }
            else{
                this.menuClose = "burger__menu-icon--close-x";
            }
       }
    }
}
</script>
        
<style lang="scss">

    .item {
        width: 100%;
        padding: 12px 0;
    }

    .flex-mobile {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
    }

    .mobile{
        z-index: 3;
        //display: block;
        position: fixed;
        height: 100%;
        bottom: 0;
        opacity: 0.95;

        h2 {
            color: #eb5e43;
        }
    }

    .burger {
        background-color: #30242e;
        z-index: 5;
        text-align: right;
        position: fixed;
        height: 60px;
        bottom: 0;
        width: 100%;

        &-h{
            position: absolute;
            width: 25px;
            height: 19px;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
        }

        &__menu-icon {
            width: 25px;
            height: 19px;
            position: absolute;
            z-index: 6;
            

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 25px;
                height: 3px;
                background-color: #eb5e43;
                transform-origin: 0 0;
                transition: transform .3s ease-out;
            }
            &__middle {
                position: absolute;
                top: 8px;
                left: 0;
                width: 25px;
                height: 3px;
                background-color: #eb5e43;
                transition: all .3s ease-out;
                transform-origin: 0 50%;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 25px;
                height: 3px;
                background-color: #eb5e43;
                transform-origin: 0 100%;
                transition: transform .3s ease-out;
            }

            &--close-x{
                &::before {
                    transform: rotate(45deg) scaleX(1.15) translateY(-1.5px);
                }
                
                .burger__menu-icon__middle {
                    opacity: 0;
                    transform: scaleX(0);
                }

                &::after {
                    transform: rotate(-45deg) scaleX(1.15) translateY(3px);
                }
            }
        }

        img{
            margin: 5px 15px;
            width: 50px;
        }
    }

    @media only screen and (min-width: 800px) {
        .noShow-mobile{
            display: none;
        }
    }
    
    #slide {
        position: absolute;
        left: -100px;
        width: 100px;
        height: 100px;
        background: blue;
        transition: 1s;
    }

    .burger:hover #slide {
        transition: 1s;
        left: 0;
    }
    
</style>
