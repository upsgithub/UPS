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

    .text h2{
        padding: 0;
        margin: 14px 0;
        color: #eb5e43;
        font-size: 16px;
        font-weight: 100;
    }

    .dropdown{
        display: none;
        width: 100%;            
        margin: 0 auto;
        background: #30242e;
    }

    .dropdown-item{
        border-bottom: 1px solid #eb5e43;
    }

    .dropdown h3{
        padding: 0;
        color: #eb5e43;
        font-size: 14px;
        padding: 5px;
        font-weight: 100;
    }

    @media only screen and (min-width: 450px) {

    }
    
    @media only screen and (min-width: 800px) {
        .mobile{
            display: none;
        }
    }
    
    
</style>
