<template>
    <div class="menu mobile container--full">
        <div class="dropdown" id="student">
            <div class="dropdown-item"><h3><nuxt-link to="/student">Student</nuxt-link></h3></div>
            <div class="dropdown-item"><h3><nuxt-link to="/student">Student</nuxt-link></h3></div>
            <div class="dropdown-item"><h3><nuxt-link to="/student">Student</nuxt-link></h3></div>
            <div class="dropdown-item"><h3><nuxt-link to="/student">Student</nuxt-link></h3></div>
        </div>
        <div class="content-wrapper">
            <div class="mobile-item col-3">
                <div class="text">
                    <h2><nuxt-link to="/utbildning">Utbildning</nuxt-link></h2>
                </div>
            </div> 
            <div class="mobile-item col-3">
                <div class="text">
                    <h2><nuxt-link to="/student">Student</nuxt-link></h2>
                </div>
            </div>
            <div class="mobile-item col-3">
                <div class="text">
                    <h2><nuxt-link to="/event">Event</nuxt-link></h2>
                </div>
            </div> 
            <div class="mobile-item col-3">
                <div class="text">
                    <h2><nuxt-link to="/forening">Föreningen</nuxt-link></h2>
                </div>
            </div>
        </div>
    </div>
</template>
        
<style lang="scss">

    .mobile{
        display: block;
        position: fixed;
        bottom: 0;

        &-item{
            display: block;
            position: relative;
            text-align: center;
            padding: 0 10px;
            float:left;
            &::after{
                clear: both;
            }
        }
    }

    

    @media only screen and (min-width: 450px) {

    }
    
    @media only screen and (min-width: 800px) {
        .mobile{
            display: none;
        }
    }
    
    
</style>
