<template>
    <div class="footer">
        <div class="footer holder">
            <div class="footer item third">
                <div class="footer item-top">
                    <h4>Kontakt oss</h4>
                </div>
                <div class="footer item-bottom">
                    <img src="../assets/img/mail.png" />
                </div>
            </div>
            <div class="footer item third">
                <div class="footer item-top">
                    <h4>Sociala medier</h4>
                </div>
                <div class="footer item-bottom">
                    <img src="../assets/img/facebook.png" />
                    <img src="../assets/img/insta.png" />
                    <img src="../assets/img/soundcloud.png" />
                </div>
            </div>
            <div class="footer item third">
                <div class="footer item-top">
                    <h4>Adress</h4>
                </div>
                <div class="footer item-bottom">
                    <p>Uppsala Politicesstuderande Box 514, c/o Statsvetenskapliga institutionen 751 20</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .footer{
        width: 100%;
        height: 120px;
        overflow: hidden;
        background: #30242e;
        padding: 10px 30px;
        text-align: center;
    }

    .holder{
        width: 800px;
        margin: 0 auto;
    }

        .item{
            height: 90px;
            float: left;
        }

        .item-top{
            height: 50%;
            width: 100%;
        }

        .item-bottom{
            height: 50%;
            width: 100%;
            padding: 7px;
        }

        .third{
            width: 33.3%;
        }
    
    h4{
        color: #ffffff;
        font-weight: bold;
    }

    p{
        color: #ffffff;
        font-size: 10px;
    }

    img{
        margin: 0 7px;
    }
</style>