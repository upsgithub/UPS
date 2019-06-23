<template>
    <div class="menu mobile container--full">
        <div class="content">
            <div class="mobile-items" ref="utbildning">
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/utbildning">Utbildning</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/kandidat">Kandidat</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/master">Master</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/skugga">Skugga en student</nuxt-link></h2></div>
            </div>
            <div class="mobile-items" ref="student">
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/student">Student</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/medlem">Medlem</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/produkter">Produkter</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/alumn">Alumn</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/stipendier">Stipendier</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/projektpotten">Projektpotten</nuxt-link></h2></div>
            </div>
            <div class="mobile-items" ref="event">
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/event">Event</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/event">Inlägg</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/event">Kalender</nuxt-link></h2></div>
            </div>
            <div class="mobile-items" ref="forening">
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/forening">Föreningen</nuxt-link></h2></div>
                <div class="mobile-item" @click="show('utskotten')"><h2>Utskotten</h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/fristaende">Fristående ämbeten</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/policy">Policys</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/protokoll">Mötesprotokoll</nuxt-link></h2></div>
            </div>
            <div class="mobile-items" ref="utskotten">
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/utskott">Utbildningsrådet</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/utskott">Utskott2</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/utskott">Utskott3</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/utskott">Utskott4</nuxt-link></h2></div>
                <div class="mobile-item" @click="showhide()"><h2><nuxt-link to="/utskott">Utskott5</nuxt-link></h2></div>
            </div>
            <div class="mobile-main" ref="main">
                <div class="mobile-item" @click="show('utbildning')"><h2>Utbildning</h2></div>
                <div class="mobile-item" @click="show('student')"><h2>Student</h2></div>
                <div class="mobile-item" @click="show('event')"><h2>Event</h2></div>
                <div class="mobile-item" @click="show('forening')"><h2>Föreningen</h2></div>
            </div>
            <div class="burger" @click="showhide()">
                <img src="../assets/img/menu-button.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data: function() {
        return {
            menus: [
                {name: "main", active: false, height: 190},
                {name: "utbildning", active: false, height: 190},
                {name: "student", active: false, height: 290},
                {name: "event", active: false, height: 140},
                {name: "forening", active: false, height: 240},
                {name: "utskotten", active: false, height: 240}
            ]
        }
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
        show: function(input){

            // hittar rätt meny och sätter active 
            for(var i = 1; i < this.menus.length; i++){
                if(this.menus[i].name == input){
                    this.menus[i].active = true;
                }
            }

            if(input == "utskotten"){
                this.menus[4].active = false;
            }

            // "stänger av" mainmenu för att rita upp den aktiva och sätter sen på den igen, så att nästa tryck på hamburgaren stänger allt. 
            this.menus[0].active = false;
            this.showhideHelp();
            this.menus[0].active = true;
        },
        showhide: function() {

            // on/off på mainmenu, samt stänger alla inre menyer
            this.menus[0].active = !this.menus[0].active;
            for(var i = 1; i < this.menus.length; i++){
                this.menus[i].active = false;
            }
            this.showhideHelp();
        },
        // "ritar" den aktiva menyn
        showhideHelp: function() {
            for(var i = 0; i < this.menus.length; i++){
                var current = this.menus[i].name;
                var height = this.menus[i].height;
                if(this.menus[i].active){
                    if(current != "main"){
                        $(this.$refs[current]).delay(200).fadeIn(0).animate({height: height}, 200);
                    } else {
                        $(this.$refs[current]).fadeIn(0).animate({height: height}, 200);
                    }
                } else {
                    $(this.$refs[current]).animate({height: "0px"}, 200).fadeOut(0);
                }
            }
        }
    }
}
</script>
        
<style lang="scss">

    .mobile{
        z-index: 3;
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
