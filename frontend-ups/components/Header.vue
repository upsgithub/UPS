<template>
    <div class="menu container--full">
        <div class="wrapper">

            <div class="menu-item col-2" @mouseleave="hide('utbildning')">
                <div class="text" @mouseover="show('utbildning')" @click="hide('utbildning')">
                    <h2><nuxt-link to="/pages/78">Utbildning</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="utbildning">
                    <div class="desktop-item" @click="hide('utbildning')" v-for="page in utbildning">
                        <h3><nuxt-link v-bind:to="'/pages/'+ page[0] ">{{ page[1] }}</nuxt-link></h3>
                    </div>
                </div>
            </div> 

            <div class="menu-item col-2" @mouseleave="hide('student')">
                <div class="text" @mouseover="show('student')" @click="hide('student')">
                    <h2><nuxt-link to="/pages/97">Student</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="student">
                    <div class="desktop-item" @click="hide('student')" v-for="page in student">
                        <h3><nuxt-link v-bind:to="'/pages/'+ page[0] ">{{ page[1] }}</nuxt-link></h3>
                    </div>
                </div>
            </div> 

            <div class="logo col-4">
                <nuxt-link to="/">
                    <img src="~/../assets/img/logo_bred_placeholder.png" />
                </nuxt-link>
            </div>

            <div class="menu-item col-2" @mouseleave="hide('event')">
                <div class="text" @mouseover="show('event')" @click="hide('event')">
                    <h2><nuxt-link to="/event">Event</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="event">
                    <div class="desktop-item" @click="hide('event')"><h3><nuxt-link to="/blogg">Blogg</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('event')"><h3><nuxt-link to="/event">Kalender</nuxt-link></h3></div>
                </div>
            </div> 

            <div class="menu-item col-2" @mouseleave="hide('forening')">
                <div class="text" @mouseover="show('forening')" @click="hide('forening')">
                    <h2><nuxt-link to="/forening">Föreningen</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="forening">
                    <div class="desktop-item" @click="hide('forening')" v-for="page in forening">
                        <h3><nuxt-link v-bind:to="'/pages/'+ page[0] ">{{ page[1] }}</nuxt-link></h3>
                    </div>
                    <div class="desktop-item" @click="hide('forening')"><h3><a href="https://drive.google.com/drive/u/1/folders/0B4DkCw-cVaitcWlURFZrb2VmeDQ" target="blank">Mötesprotokoll</a></h3></div>
                    <div class="desktop-item inner" ref="inner" @mouseover="show('utskotten')" @mouseleave="hide('utskotten')"><h3>Utskotten</h3>
                        <div class="desktop-dropdown-inner" ref="utskotten">
                            <div class="desktop-item wide" @click="hide('utskotten')" v-for="page in utskott">
                                <h3><nuxt-link v-bind:to="'/utskott/'+ page[0] ">{{ page[1] }}</nuxt-link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
        <div class="menu item sixth">
            <div class="menu item-img">
                <img src="../assets/img/calendar.png" />
            </div>
            <div class="menu item-text">
                <h2>Event</h2>
            </div>
        </div> 
        <div class="menu item sixth">
            <div class="menu item-img">
                <img src="../assets/img/foreningen.png" />
            </div>
            <div class="menu item-text">
                <h2>Föreningen</h2>
            </div>
        </div> 

    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../store/index.js'

export default {
    methods: {
        show : function(menu){
            $(this.$refs[menu]).fadeIn(150);
        },
        hide : function(menu){
            $(this.$refs[menu]).fadeOut(50);
        }
    },
    computed: {
        utskott(){
            return this.$store.state.utskott
        },
        utbildning(){
            return this.$store.state.utbildning
        },
        student(){
            return this.$store.state.student
        },
        forening(){
            return this.$store.state.forening
        }
    }
}
</script>


<style lang="scss">
    .menu{
        width: 1000px;
        height: 140px;
        overflow: hidden;
        background: #30242e;
        padding: 20px 30px 0px 30px;
        text-align: center;
    }

        .item{
            height: 90px;
            float: left;
            text-align: center;
        }

            .item-img{
                width: 100%;
                height: 80%;
                padding: 0;
            }

            .item-text{
                width: 100%;
                height: 20%;
                padding: 0;
            }
        
            &-item{
                display: block;
                position: relative;
                text-align: center;
                max-width: 145px;
                margin-top:15px;
                float:left;
                &::after{
                    clear: both;
                }
               
                img{
                    width: 30%;
                    height: auto;
                }
            }

    .item img{
        max-width: 100%;
        height: 90%;
    }

    .menu h2{
        padding: 0;
        margin: 0;
        color: #eb5e43;
        font-size: 16px;
        font-weight: 100;
    }

    @media only screen and (max-width: 800px) {
        .menu{
            height: 160px;
            padding: 0;
        }

        .logo{
            width: 33.3%;
            min-width: 250px;
        }

        .logo img{
            height: 100%;
        }

        .desktop{
            &-dropdown{
                position: relative;
                z-index: 1000;
                margin-top: 36px;
                display: none;
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border: 14px solid transparent;
                    border-bottom-color: #EB5E43;
                    border-top: 0;
                    margin-left: -14px;
                    margin-top: -14px;
                }

                &-inner{
                    display: none;
                    position: relative;
                    top: -42px;
                    left: 100%;
                                    
                }
            }

            &-item{
                padding-top: 10px;
                background: #30242e;
                border-top: 1px solid grey;
                display: inline-block;
                width: 125px;
                position: relative;

                h3{
                    padding-bottom: 10px;
                    font-size: 16px;
                    color:#eb5e43;
                }

                
            }   
        }

        .inner{
            height: 40px;
        }

        .wide{
            width: 150px;
            word-break: break-word;
            padding-left: 0 5px;   
        }
    }
</style>