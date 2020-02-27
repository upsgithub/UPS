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
                            <span v-if="english" @click="showMenu(), toggleClose()" class="item__main">
                                <nuxt-link to="/utbildning">Education</nuxt-link>
                            </span>
                            <span v-else @click="showMenu(), toggleClose()" class="item__main">
                                <nuxt-link to="/utbildning">Utbildning</nuxt-link>
                            </span>
                        </h2>
                        <div class="arrow-holder" id="utblidning" ref="utblidning" @click="toggleDropMenu('utbildning')" :class="dropDownClose1">
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <ul id="utbildning-links" class="item item__sublinks" :class="subMenu1">
                        <template v-if="english">
                            <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')" v-for="page in utbildningEn" :key="page.id">
                                <nuxt-link v-bind:to="'/utbildning/'+ page.slug ">{{ page.title.rendered }}</nuxt-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')" v-for="page in utbildning" :key="page.id">
                                <nuxt-link v-bind:to="'/utbildning/'+ page.slug ">{{ page.title.rendered }}</nuxt-link>
                            </li>
                        </template>
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
                        <template v-if="english">
                            <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')" v-for="page in studentEn" :key="page.id">
                                <nuxt-link v-bind:to="'/student/'+ page.slug ">{{ page.title.rendered }}</nuxt-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')" v-for="page in student" :key="page.id">
                                <nuxt-link v-bind:to="'/student/'+ page.slug ">{{ page.title.rendered }}</nuxt-link>
                            </li>
                        </template>
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
                        <li v-if="english" class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('event')">
                            <nuxt-link to="/event/blogg">Blog</nuxt-link>
                        </li>
                        <li v-else class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('event')">
                            <nuxt-link to="/event/blogg">Blogg</nuxt-link>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('event')">
                            <a href="https://polkand.wordpress.com/" target="blank">
                                <span v-if="english">Praktik- och Utlandsblogg</span>
                                <span v-else>Praktik- och Utlandsblogg</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="item__main">
                        <h2>
                            <span v-if="english" @click="showMenu(), toggleClose()" >
                                <nuxt-link to="/foreningen">Association</nuxt-link>
                            </span>
                            <span v-else @click="showMenu(), toggleClose()" >
                                <nuxt-link to="/foreningen">Föreningen</nuxt-link>
                            </span>
                        </h2>
                        <div class="arrow-holder" @click="toggleDropMenu('foreningen')" :class="dropDownClose4">
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <ul id="foreningen-links" class="item item__sublinks" :class="subMenu4">
                        <template v-if="english">
                            <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')" v-for="page in foreningEn" :key="page.id">
                                <nuxt-link v-bind:to="'/foreningen/'+ page.slug ">{{ page.title.rendered }}</nuxt-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('utbildning')" v-for="page in forening" :key="page.id">
                                <nuxt-link v-bind:to="'/foreningen/'+ page.slug ">{{ page.title.rendered }}</nuxt-link>
                            </li>
                        </template>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <a href="https://drive.google.com/drive/u/1/folders/0B4DkCw-cVaitcWlURFZrb2VmeDQ" target="blank">
                                <span v-if="english">Meeting minutes</span>
                                <span v-else>Mötesprotokoll</span>
                            </a>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <a href="https://api.uppsalapolitices.se/wp-content/uploads/2019/11/UPS-stadgar-fastslagna-2019-05-14-1.pdf" target="blank">
                                <span v-if="english">Statutes</span>
                                <span v-else>Stadgar</span>
                            </a>
                        </li>
                        <li class="item__sublinks__link" @click="showMenu(), toggleClose(), toggleDropMenu('foreningen')">
                            <nuxt-link v-if="english" to="/foreningen">Committees</nuxt-link>
                            <nuxt-link v-else to="/foreningen">Utskotten</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="burger">
            <div v-if="showLangButton" class="lang lang--bottom-l">
                <img v-if="english" src="../assets/img/SV.png" @click="setLang()" />
                <img v-else src="../assets/img/UK.png" @click="setLang()" />
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
import { mapState, mapMutations } from 'vuex'

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
       ...mapMutations({
            setLang: 'pages/setLang'
       }),
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
       }
    },
    computed: {
        ...mapState({
            forening: state => state.pages.forening_list,
            foreningEn: state => state.pages.forening_en_list,
            utbildning: state => state.pages.utbildning_list,
            utbildningEn: state => state.pages.utbildning_en_list,
            student: state => state.pages.student_list,
            studentEn: state => state.pages.student_en_list,
            english: state => state.pages.english,
            utskott: state => state.utskotten.list
        })
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
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        max-height: 100vh;
        padding-bottom: 60px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &::-webkit-scrollbar { 
            display: none; 
        }
    }

    .mobile{
        z-index: 5;
        position: fixed;
        top: 0%;
        bottom: 0%;
        opacity: 0.95;
        width: 100%;
        flex: 1;
        display: flex;

        h2 {
            color: #eb5e43;
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
    
</style>
