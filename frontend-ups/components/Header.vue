<template>
    <div class="menu container--full">
        <div class="wrapper">
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/book.png" />
                </div> -->
                <div class="text">
                    <h2><router-link to="/utbildning">Utbildning</router-link></h2>
                </div>
            </div> 
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/profile.png" />
                </div> -->
                <div class="text">
                    <h2><nuxt-link to="/student">Student</nuxt-link></h2>
                </div>
                <div class="dropdown" id="student">
                    <div class="dropdown-item"><h3><a href="#">Option 1</a></h3></div>
                    <div class="dropdown-item"><h3><a href="#">Option 2</a></h3></div>
                    <div class="dropdown-item"><h3><a href="#">Option 3</a></h3></div>
                    <div class="dropdown-item"><h3><a href="#">Option 4</a></h3></div>
                </div>
            </div> 
            <div class="logo col-4">
                <nuxt-link to="/">
                    <img src="../assets/img/logo_bred_placeholder.png" />
                </nuxt-link>
            </div>
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/calendar.png" />
                </div> -->
                <div class="text">
                    <h2><nuxt-link to="/event">Event</nuxt-link></h2>
                </div>
            </div> 
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/foreningen.png" />
                </div> -->
                <div class="text">
                    <h2><nuxt-link to="/forening">Föreningen</nuxt-link></h2>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        menu_hover : function(opt){
            // alert("This is not working, please help.");
            // current = this.$els.opt;
            // if(current.style.display === "none"){
            //     current.style.display = "block";
            // } else {
            //     current.style.display = "none";
            // }
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
                margin-top: 10px;
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
    }
</style>

