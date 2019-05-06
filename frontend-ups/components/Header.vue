<template>
    <div class="menu">
        <div class="menu item sixth">
            <div class="menu item-img">
                <img src="../assets/img/book.png" />
            </div>
            <div class="menu item-text">
                <h2>Utbildning</h2>
            </div>
        </div> 
        <div class="menu item sixth">
            <div class="menu item-img">
                <img src="../assets/img/profile.png" />
            </div>
            <div class="menu item-text">
                <h2>Student</h2>
            </div>
        </div> 
        <div class="menu logo">
            <img src="../assets/img/logo_bred_placeholder.png" />
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

<style>
    .menu{
        width: 100%;
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
        
        .logo{
            height: 90px;
            width: 33.3%;
            float: left;
            padding: 0;
        }

        .logo img{
            height: 120%;
        }

            .sixth{
                width: calc(2 / 12);
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

        .sixth {
            display: none;
        }

        .logo {
            width: 100%;
        }

        .logo img{
            height: 100%;
        }
    }
</style>