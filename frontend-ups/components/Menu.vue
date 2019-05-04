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
        <div class="menu item logo">
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
        width: 1000px;
        height: 120px;
        overflow: hidden;
        background: #30242e;
        padding: 10px 30px;
        text-align: center;
    }

        .item{
            height: 90px;
            float: left;
        }

            .item-img{
                width: 100%;
                height: 80%;
                padding: 0;
            }

            .item-text{
                width: 100%;
                height: 20%;
                text-align: center;
                padding: 0;
            }

            .logo{
                width: 33.3%;
                padding: 0;
                text-align: center;
            }

                .logo img{
                    height: 110%;
                }

            .sixth{
                width: 16.6%;
            }

        img{
            max-width: 100%;
            height: 90%;
        }

        h2{
            padding: 0;
            margin: 0;
            color: #eb5e43;
            font-family: Minion Pro;
            font-size: 16px;
            font-weight: 100;
        }
</style>