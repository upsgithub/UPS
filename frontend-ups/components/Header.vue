<template>
    <div class="menu container--full">
        <div class="wrapper">
            <div class="menu-item col-2" @mouseleave="hide('utbildning')">
                <div class="text" @mouseover="show('utbildning')" @click="hide('utbildning')">
                    <h2><nuxt-link to="/utbildning">Utbildning</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="utbildning">
                    <div class="desktop-item" @click="hide('utbildning')"><h3><nuxt-link to="/kandidat">Kandidat</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('utbildning')"><h3><nuxt-link to="/master">Master</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('utbildning')"><h3><nuxt-link to="/skugga">Skugga en student</nuxt-link></h3></div>
                </div>
            </div> 
            <div class="menu-item col-2" @mouseleave="hide('student')">
                <div class="text" @mouseover="show('student')" @click="hide('student')">
                    <h2><nuxt-link to="/student">Student</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="student">
                    <div class="desktop-item" @click="hide('student')"><h3><nuxt-link to="/medlem">Medlem</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('student')"><h3><nuxt-link to="/produkter">Produkter</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('student')"><h3><nuxt-link to="/alumn">Alumn</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('student')"><h3><nuxt-link to="/stipendier">Stipendier</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('student')"><h3><nuxt-link to="/projektpotten">Projektpotten</nuxt-link></h3></div>
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
                <div class="desktop-item" @click="hide('event')"><h3><nuxt-link to="/blogg">Inlägg</nuxt-link></h3></div>
                <div class="desktop-item" @click="hide('event')"><h3><nuxt-link to="/kalender">Kalender</nuxt-link></h3></div>
            </div>
            </div> 
            <div class="menu-item col-2" @mouseleave="hide('forening')">
                <div class="text" @mouseover="show('forening')" @click="hide('forening')">
                    <h2><nuxt-link to="/forening">Föreningen</nuxt-link></h2>
                </div>
                <div class="desktop-dropdown" ref="forening">
                    <div class="desktop-item" @click="hide('forening')"><h3><nuxt-link to="/fristaende">Fristående ämbeten</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('forening')"><h3><nuxt-link to="/policy">Policys</nuxt-link></h3></div>
                    <div class="desktop-item" @click="hide('forening')"><h3><nuxt-link to="/protokoll">Mötesprotokoll</nuxt-link></h3></div>
                    <div class="desktop-item inner" ref="inner" @mouseover="show('utskotten')" @mouseleave="hide('utskotten')"><h3>Utskotten</h3>
                        <div class="desktop-dropdown-inner" ref="utskotten">
                            <div class="desktop-item" @click="hide('utskotten')"><h3><nuxt-link to="/utskott">Utbildningsrådet</nuxt-link></h3></div>
                            <div class="desktop-item" @click="hide('utskotten')"><h3><nuxt-link to="/utskott">Utskott2</nuxt-link></h3></div>
                            <div class="desktop-item" @click="hide('utskotten')"><h3><nuxt-link to="/utskott">Utskott3</nuxt-link></h3></div>
                            <div class="desktop-item" @click="hide('utskotten')"><h3><nuxt-link to="/utskott">Utskott4</nuxt-link></h3></div>
                            <div class="desktop-item" @click="hide('utskotten')"><h3><nuxt-link to="/utskott">Utskott5</nuxt-link></h3></div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        show : function(menu){
            $(this.$refs[menu]).fadeIn(150);
        },
        hide : function(menu){
            $(this.$refs[menu]).fadeOut(50);
        }
    }
}
</script>


<style lang="scss">
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
    }

    .logo img{
        margin-bottom: -5px;
        width: 70%;
    }

    @media only screen and (min-width: 800px) {
        
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
        }

        .logo img{
            width: auto;
            max-height: 90px;
        }

        .desktop{
            &-dropdown{
                position: relative;
                z-index: 1000;
                margin-top: 40px;
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
                    top: -39px;
                    left: 100%;
                }
            }

            &-item{
                padding-top: 10px;
                background: #30242e;
                border-top: 1px solid grey;
                display: inline-block;
                min-width: 125px;
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
    }
</style>

