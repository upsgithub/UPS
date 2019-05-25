<template>
    <div class="menu mobile container--full">
        <div class="content">
            <!--
            <div class="mobile-items utbildning" ref="utbildning">
                <div class="mobile-item"><h2><nuxt-link to="/utbildning">Utbildning</nuxt-link></h2></div>
                <div class="mobile-item"><h2><nuxt-link to="/utbildning">Kandidat</nuxt-link></h2></div>
                <div class="mobile-item"><h2><nuxt-link to="/student">Master</nuxt-link></h2></div>
                <div class="mobile-item"><h2><nuxt-link to="/event">Skugga en student</nuxt-link></h2></div>
            </div>
            -->
            <div class="mobile-main" ref="main">
                <div class="mobile-item" @click="showhide('utbildning')"><h2>Utbildning</h2></div>
                <div class="mobile-item" @click="showhide('utbildning')"><h2>Student</h2></div>
                <div class="mobile-item" @click="showhide('utbildning')"><h2>Event</h2></div>
                <div class="mobile-item" @click="showhide('utbildning')"><h2>Föreningen</h2></div>
            </div>
            <div class="burger" @click="showhide('main')">
                <img src="../assets/img/burger.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data: {
        main: false,
        utbildning: false,
        student: false,
        event: false,
        forening: false
    },
    head: {
        script: [
            { 
                src: 'https://code.jquery.com/jquery-1.12.4.js',
                type: 'text/javascript'
            }
        ]
    },
    methods: {
        showhide: function(input) {
            this.input = !(this.input);
            if(this.input){
                this.$refs[input].style.display = "block";
                $(this.$refs[input]).animate({height: "190px"}, 500);
            } else {
                $(this.$refs[input]).delay(200).css("height", "0px");
                $(this.$refs[input]).delay(200).css("display", "none");
            }
        }
    }
}
</script>
        
<style lang="scss">

    .mobile{
        display: block;
        position: fixed;
        bottom: 0;

        // &-item{
        //     display: block;
        //     position: relative;
        //     text-align: center;
        //     padding: 0 10px;
        //     float:left;
        //     &::after{
        //         clear: both;
        //     }
        // }

        &-main{
            height: 0;
            display: none;
        }

        &-items{
            height: 0;
            display: none;
        }

        &-item{
            height: 38px;
            border-bottom: 1px solid grey;
            margin-top: 12px;
        }

        h2 {
            color: #eb5e43;
        }
    }

    .burger img{
        margin: 5px 15px;
        width: 50px;
    }
    
    

    @media only screen and (min-width: 450px) {

    }
    
    @media only screen and (min-width: 800px) {
        .mobile{
            display: none;
        }
    }
    
    
</style>
