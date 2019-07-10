<template>
    <div class="menu container--full">
        <div class="wrapper">

            <div class="menu-item col-2" @mouseleave="hide('utbildning')">
                <div class="text" @mouseover="show('utbildning')" @click="hide('utbildning')">
                    <h2><nuxt-link to="/utbildning">Utbildning</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="utbildning">
                    <div class="desktop-item" @click="hide('utbildning')" v-for="page in utbildning">
                        <h3><nuxt-link v-bind:to="'/utbildning/'+ page.slug ">{{ page.title.rendered }}</nuxt-link></h3>
                    </div>
                </div>
            </div> 

            <div class="menu-item col-2" @mouseleave="hide('student')">
                <div class="text" @mouseover="show('student')" @click="hide('student')">
                    <h2><nuxt-link to="/student">Student</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="student">
                    <div class="desktop-item" @click="hide('student')" v-for="page in student">
                        <h3><nuxt-link v-bind:to="'/student/'+ page.slug ">{{ page.title.rendered }}</nuxt-link></h3>
                    </div>
                </div>
            </div> 

            <div class="logo col-4">
                <nuxt-link to="/">
                    <img src="../assets/img/logo_bred_placeholder.png" />
                </nuxt-link>
            </div>

            <div class="menu-item col-2" @mouseleave="hide('event')">
                <div class="text" @mouseover="show('event')" @click="hide('event')">
                    <h2><nuxt-link to="/event">Event</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="event">
                    <div class="desktop-item" @click="hide('event')"><h3><nuxt-link to="/event/blogg">Blogg</nuxt-link></h3></div>
                </div>
            </div> 

            <div class="menu-item col-2" @mouseleave="hide('forening')">
                <div class="text" @mouseover="show('forening')" @click="hide('forening')">
                    <h2><nuxt-link to="/foreningen">Föreningen</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="forening">
                    <div class="desktop-item" @click="hide('forening')" v-for="page in forening">
                        <h3><nuxt-link v-bind:to="'/foreningen/'+ page.slug ">{{ page.title.rendered }}</nuxt-link></h3>
                    </div>
                    <div class="desktop-item" @click="hide('forening')"><h3><nuxt-link to="/foreningen/policy">Policies</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('forening')"><h3><a href="https://drive.google.com/drive/u/1/folders/0B4DkCw-cVaitcWlURFZrb2VmeDQ" target="blank">Mötesprotokoll</a></h3></div>
                    <div class="desktop-item inner" ref="inner" @mouseover="show('utskotten')" @mouseleave="hide('utskotten')"><h3><nuxt-link to="/foreningen">Utskotten</nuxt-link></h3>
                        <div class="desktop-dropdown-inner" ref="utskotten">
                            <div class="desktop-item wide" @click="hide('utskotten')" v-for="page in utskott">
                                <h3><nuxt-link v-bind:to="'/foreningen/utskotten/'+ page.slug ">{{ page.title.rendered }}</nuxt-link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>

        <div v-if="showLangButton" class="lang_fixed">
            <img v-if="english" src="../assets/img/SV.png" @click="change_language()" />
            <img v-else src="../assets/img/UK.png" @click="change_language()" />
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
    data:function() {
        return {
            showLangButton: true,
            lastScrollPosition: 0
        }
    },
    created() {
        return axios.all([
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=30'),
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/utskott')
        ]).then(axios.spread((pages, utskott) => {
            this.$store.commit('headerPages', pages.data),
            this.$store.commit('headerUtskott', utskott.data)    
        })).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        show : function(menu){
            $(this.$refs[menu]).fadeIn(150);
        },
        hide : function(menu){
            $(this.$refs[menu]).fadeOut(50);
        },
        change_language:function() {
            var current = this.$store.state.english;
            this.$store.commit('change_language', !current);
        },
        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) { return }
            this.showLangButton = currentScrollPosition == 0
        }
    },
    computed: {
        utskott(){
            return this.$store.state.utskottHeader
        },
        utbildning(){
            return this.$store.state.utbildning
        },
        student(){
            return this.$store.state.student
        },
        forening(){
            return this.$store.state.forening
        },
        english(){
            return this.$store.state.english;
        },
        current_width(){
            return window.innerWidth;
        }
    },
    mounted () {
        window.addEventListener('scroll', 
        this.onScroll);
        
    },
    beforeDestroy () {
        window.removeEventListener('scroll', 
        this.onScroll);
    }
}
</script>


<style lang="scss">

    .lang_fixed{
        display: none;
    }

    .menu{
        background: #30242e;
        text-align: center;
        position: relative;

        &-item{
            display: none;
        }
    }

    .logo{
        padding: 0;
        width: 100%;
        float: left;
        &::after{
            clear: both;
        }

        a{
            display: block;
            margin-top: 10px;
        }
    }

    .logo img{
        width: auto;
        max-height: 90px;
    }

    @media only screen and (min-width: 900px) {

        .lang_fixed{
            display: block;
            width: 30px;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 40px;

            img{
                width: 30px;
                height: 30px;
            }
        }

        .menu{
        padding: 7.5px 0px;
        height: 100px;
        
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
        }

        .logo{
            width: 33.3%;
            min-width: 250px;

            a{
                margin-top: -2.5px;
            }
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
    @media only screen and (min-width: 1200px) {
        .lang_fixed{
            right: 10%;
        }
    }
</style>

