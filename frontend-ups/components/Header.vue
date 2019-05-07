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
            <div class="logo col-4">
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

        &-item{
            display: none;
        }
    }
    
    .wrapper{
        display: inline-block;
    }

    .logo{
        padding: 0;
        width: auto;
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
        height: 120px;
        
            &-item{
                display: block;
                position: relative;
                text-align: center;
                max-width: 145px;
                margin-top: 20px;
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
            margin-top: 10px;
            width: 33.3%;
        }

        .logo img{
            width: auto;
            max-height: 90px;
        }

        .text h2{
            padding: 0;
            margin: 0;
            color: #eb5e43;
            font-size: 16px;
            font-weight: 100;
        }
    }

    // .menu{
    //     background: #30242e;
    //     padding: 15px 0px;
    //     text-align: center;
    //     position: absolute;
    //     top: 0;

    //     &-item{
    //         position: relative;
    //         text-align: center;
    //         max-width: 135px;
    //         margin-top: 20px;
    //         float:left;
    //         &::after{
    //             clear: both;
    //         }

    //         img{
    //             width: 30%;
    //             height: auto;
    //         }
    //     }
    // }

    // .wrapper{
    //     display: inline-block;
    // }

    // .logo{
    //     padding: 0;
    //     max-width: 270px;
    //     float: left;
    //     &::after{
    //         clear: both;
    //     }
    // }
    
    // .logo img{
    //     width: 100%;
    // }

    // .text h2{
    //     padding: 0;
    //     margin: 0;
    //     color: #eb5e43;
    //     font-size: 16px;
    //     font-weight: 100;
    // }

    // @media only screen and (max-width: 800px) {
    //     .menu{
    //         height: 100px;
    //         padding: 0;
    //     }

    //     .logo{
    //         width: auto; 
    //         height: 150px;
    //     }

    //     .logo img{
    //         max-width: 270px;
    //     }

    //     .menu-item{
    //         display: none;
    //     }
    // }
</style>