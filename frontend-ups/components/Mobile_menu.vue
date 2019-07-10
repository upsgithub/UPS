<template>
<div class="mobile-menu">
        <div class="menu mobile container--full" :style="display">
            <div class="flex-mobile">
                <div class="item">
                    <h2 @click="showMenu(), toggleClose()">
                        <nuxt-link  to="/">Start</nuxt-link>
                    </h2>
                </div>
                <div class="item">
                    <div class="item__main">
                        <h2>
                            <span @click="showMenu(), toggleClose()" class="item__main">
                                <nuxt-link to="/utbildning">Utbildning</nuxt-link>
                            </span>
                        </h2>
                        <div class="arrow-holder" id="utblidning" ref="utblidning" @click="toggleDropMenu('utbildning')" :class="dropDownClose1">
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <ul id="utbildning-links" class="item item__sublinks" :class="subMenu1">
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')">
                            <nuxt-link to="/utbildning/master">Master</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')">
                            <nuxt-link to="/utbildning/kandidat">Kandidat</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')">
                            <nuxt-link to="/utbildning/skugga-en-student">Skugga en student</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="item__main">
                        <h2>
                            <span @click="showMenu(), toggleClose()">
                                <nuxt-link to="/student">Student</nuxt-link>
                            </span>
                         </h2>
                         <div class="arrow-holder" @click="toggleDropMenu('student')" :class="dropDownClose2">
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <ul id="student-links" class="item item__sublinks" :class="subMenu2">
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('student')">
                            <nuxt-link to="/student/alumn">Alumn</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('student')">
                            <nuxt-link to="/student/projektpotten">Projektpotten</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('student')">
                            <nuxt-link to="/student/stipendier">Stipendier</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('student')">
                            <nuxt-link to="/student/produkter">Produkter</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('student')">
                            <nuxt-link to="/student/medlemskap">Medlemskap</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="item__main">
                        <h2>
                            <span @click="showMenu(), toggleClose()" >
                                <nuxt-link  to="/event">Event</nuxt-link>
                            </span>
                        </h2>
                        <div class="arrow-holder" @click="toggleDropMenu('event')" :class="dropDownClose3">
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <ul id="event-links" class="item item__sublinks" :class="subMenu3">
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('event')">
                            <nuxt-link to="/event/blogg">Blogg</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="item__main">
                        <h2>
                            <span @click="showMenu(), toggleClose()" >
                                <nuxt-link to="/foreningen">Föreningen</nuxt-link>
                            </span>
                        </h2>
                        <div class="arrow-holder" @click="toggleDropMenu('foreningen')" :class="dropDownClose4">
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <ul id="foreningen-links" class="item item__sublinks" :class="subMenu4">
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <nuxt-link to="/foreningen/fristaende-ambeten">Fristående ämbeten</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <nuxt-link to="/foreningen/policy">Policies</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <a href="https://drive.google.com/drive/u/1/folders/0B4DkCw-cVaitcWlURFZrb2VmeDQ" target="blank">Mötesprotokoll</a>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <nuxt-link to="/foreningen">Utskotten</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="burger">
            <div v-if="showLangButton" class="lang lang--bottom-l">
                <img v-if="english" src="../assets/img/SV.png" @click="change_language()" />
                <img v-else src="../assets/img/UK.png" @click="change_language()" />
            </div>
            <div class="burger-h">
                <div class="burger__menu-icon" @click="showMenu(), toggleClose()" v-bind:class="menuClose">
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
            menuClose: "",
            dropDownClose1: "down",
            subMenu1: "",
            subMenu2: "",
            subMenu3: "",
            subMenu4: "",
            dropDownClose2: "down",
            dropDownClose3: "down",
            dropDownClose4: "down",
            showLangButton: true
        }
    },
    methods: {
       toggleClose(){
           if(this.menuClose){
               this.menuClose = "";
            }
            else{
                this.menuClose = "burger__menu-icon--close-x";
            }
       },
       showMenu() {
           if(this.display === "display: none") {
               this.display = "";
           } else {
               this.display = "display: none";
           }
           
       },
       toggleDropMenu(id) {
           switch (id){
               case 'utbildning':
                   if(this.dropDownClose1 === "down"){
                       this.dropDownClose1 = "up";
                       this.subMenu1 = "opened";
                   }
                   else{
                       this.dropDownClose1 = "down";
                       this.subMenu1 = "";
                   }
                   break;
                case 'student':
                   if(this.dropDownClose2 === "down"){
                       this.dropDownClose2 = "up";
                       this.subMenu2 = "opened";
                   }
                   else{
                       this.dropDownClose2 = "down";
                       this.subMenu2 = "";
                   }
                   break;
                case 'event':
                   if(this.dropDownClose3 === "down"){
                       this.dropDownClose3 = "up";
                       this.subMenu3 = "opened";
                   }
                   else{
                       this.dropDownClose3 = "down";
                       this.subMenu3 = "";
                   }
                   break;
                case 'foreningen':
                    if(this.dropDownClose4 === "down"){
                        this.dropDownClose4 = "up";
                        this.subMenu4 = "opened";
                    }
                    else{
                        this.dropDownClose4 = "down";
                        this.subMenu4 = "";
                    }
                    break;
                default:
                    return id;
           }
       },
       change_language:function() {
            var current = this.$store.state.english;
            this.$store.commit('change_language', !current);
        }
    },
    computed: {
        english(){
            return this.$store.state.english;
        }
    }
}
</script>
        
<style lang="scss">
    .lang{
        display: block;
        width: 35px;
        height: 35px;
        cursor: pointer;

        &--bottom-l{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
        }

        img{
            height: 35px;
            width: 35px;
        }
    }
    .item {
        width: 100%;
        padding: 12px 0;

        &__main{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        &__sublinks{
            list-style: none;
            display: none;

            &__link{
                font-size: 1rem;
                padding: 15px 0px;
            }
        }
    }

    .item__sublinks.opened{
        display: block;
    }
    
    .flex-mobile {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        display: flex;
        flex-direction: column;
    }

    .mobile{
        z-index: 5;
        position: fixed;
        min-height: 260px;
        height: 100%;
        bottom: 0;
        opacity: 0.95;
        overflow: auto;
        width: 100%;
        flex: 1;
        display: flex;

        h2 {
            color: #eb5e43;
        }

        &::-webkit-scrollbar { 
            display: none; 
        }
    }

    .burger {
        background-color: #30242e;
        z-index: 6;
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
    }

    @media only screen and (min-width: 900px) {
        .mobile-menu{
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
