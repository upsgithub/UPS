<template>
    <div class="menu container--full">
        <div class="wrapper">
            <div class="menu-item col-2">
                <div class="img">
                    <img src="../assets/img/book.png" />
                </div>
                <div class="text">
                    <h2>Utbildning</h2>
                </div>
            </div> 
            <div class="menu-item col-2">
                <div class="img">
                    <img src="../assets/img/profile.png" />
                </div>
                <div class="text">
                    <h2>Student</h2>
                </div>
            </div> 
            <div class="logo col-6">
                <img src="../assets/img/logo_bred_placeholder.png" />
            </div>
            <div class="menu-item col-2">
                <div class="img">
                    <img src="../assets/img/calendar.png" />
                </div>
                <div class="text">
                    <h2>Event</h2>
                </div>
            </div> 
            <div class="menu-item col-2">
                <div class="img">
                    <img src="../assets/img/foreningen.png" />
                </div>
                <div class="text">
                    <h2>Föreningen</h2>
                </div>
            </div> 
        </div>
    </div>
</template>

<style lang="scss">
    .menu{
        background: #30242e;
        text-align: center;
        position: absolute;
        top: 0;
        height: 135px;
        padding: 0;

        &-item{
            position: relative;
            text-align: center;
            max-width: 135px;
            margin-top: 20px;
            display: none;
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

    .wrapper{
        display: inline-block;
    }

    .logo{
        padding: 0;

        float: left;
        &::after{
            clear: both;
        }
    }
    
    .logo img{
        height: 135px;
    }

    .text h2{
        padding: 0;
        margin: 0;
        color: #eb5e43;
        font-size: 16px;
        font-weight: 100;
    }

    @media only screen and (min-width: 800px) {
        .menu{
            height: auto;
            padding: 15px 0px;
        }

        .logo{
            width: 33.3%;
        }

        .logo img{
            width: 100%;
        }

        .menu-item{
            display: block;
        }
    }
</style>