<template>
<div class="noShow-mobile">
        <div :style="display" class="menu mobile container--full" >
            <div  class="flex-mobile">
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/">Start</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/pages/78">Utbildning</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/pages/97">Student</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/event">Event</nuxt-link></h2></div>
                <div class="item" ><h2 @click="showMenu()"><nuxt-link  to="/forening">Föreningen</nuxt-link></h2></div>
            </div>
        </div>
        <div class="burger" @click="showMenu()">
            <img src="../assets/img/menu-button.png" />
        </div>
    </div>
    
</template>

<script>
export default{
    data: function() {
        return {
            display: "display: none"
        }
    },
    methods: {
       showMenu() {
           if(this.display === "display: none") {
               this.display = "";
           } else {
               this.display = "display: none";
           }
           
       }
    }
}
</script>
        
<style lang="scss">

    .item {
        width: 100%;
        bottom: 100px;

    }

    .flex-mobile {
        width: 100%;
        display: flex;
        flex-flow:row wrap;
        justify-content: center;
        height: 50%;
        margin-top: 70%;
        position: fixed;


   
    }

    .mobile{
        z-index: 1;
        //display: block;
        position: fixed;
        height: 100%;
        bottom: 0;

        h2 {
            color: #eb5e43;
        }
    }

.burger {
    background-color: #30242e;
    z-index: 2;
    text-align: right;
    position: fixed;
    
    bottom: 0;
    width: 100%;

    img{
        margin: 5px 15px;
        width: 50px;
    }
}

    .noShow-mobile {

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
