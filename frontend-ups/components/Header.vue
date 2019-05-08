<template>
    <div class="menu container--full">
        <div class="wrapper">
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/book.png" />
                </div> -->
                <div class="text">
                    <h2><a href="#">Utbildning</a></h2>
                </div>
            </div> 
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/profile.png" />
                </div> -->
                <div class="text">
                    <h2><a href="#">Student</a></h2>
                </div>
            </div> 
            <div class="logo col-4">
                <img src="../assets/img/logo_bred_placeholder.png" />
            </div>
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/calendar.png" />
                </div> -->
                <div class="text">
                    <h2><a href="#">Event</a></h2>
                </div>
            </div> 
            <div class="menu-item col-2">
                <!-- <div class="img">
                    <img src="../assets/img/foreningen.png" />
                </div> -->
                <div class="text">
                    <h2><a href="#">Föreningen</a></h2>
                </div>
            </div> 
        </div>
    </div>
</template>

<style lang="scss">
    .menu{
        background: #30242e;
        text-align: center;
        position: relative;

        &-item{
            display: none;
        }
    }
    
    .wrapper{
        min-width: 800px;
        display: inline-block;
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
        }

        .logo img{
            width: auto;
            max-height: 90px;
        }

        .text h2{
            padding: 0;
            margin: 20px 0;
            color: #eb5e43;
            font-size: 20px;
            font-weight: 100;
        }

        .text a{
            color:#eb5e43;

            &:hover{
                border-bottom: 1px solid #eb5e43;
            }
        }
    }
</style>