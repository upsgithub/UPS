<template>
    <div class="menu container--full">
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
</template>

<style lang="scss">
    .menu{
        height: 140px;
        background: #30242e;
        padding: 20px 0px;
        text-align: center;
        position: absolute;
        top: 0;

        &-item{
            position: relative;
            height: 90px;
            text-align: center;
            float:left;
            &::after{
                clear: both;
            }

            img {
                width: 80%;
                height: auto;
            }
        }
    }
    .text{
        width: 100%;
        height: 20%;
        padding: 0;
    }
    .img{
        padding: 0;
    }

    .logo{
        height: 90px;
        width: 33.3%;
        padding: 0;
        float: left;
        &::after{
            clear: both;
        }
    }
    .logo img{
        width: 100%;
        height: auto;
    }

    .text h2{
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

        .menu-item{
            display: none;
        }

        .menu-logo {
            width: 100%;
        }

        .logo img{
            height: 100%;
        }
    }
</style>