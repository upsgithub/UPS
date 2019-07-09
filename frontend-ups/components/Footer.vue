<template>
    <div class="footer">
        <div class="content-wrapper">
            
            <div class="footer-item col-4">
                <div v-if="this.english" class="text">
                    <h4>Contact us</h4>
                </div>
                <div v-else class="text">
                    <h4>Kontakt oss</h4>
                </div>
                <div class="img">
                    <img src="../assets/img/mail.png" />
                </div>
            </div>
            <div class="footer-item col-4">
                <div v-if="this.english" class="text">
                    <h4>Social medias</h4>
                </div>
                <div v-else class="text">
                    <h4>Sociala medier</h4>
                </div>
                <div class="img">
                    <a class="a-button" href="https://www.facebook.com/uppsalapolitices/"><img src="../assets/img/facebook.png" /></a>
                    <a class="a-button" href="https://www.instagram.com/uppsalapolitices/?hl=sv"><img src="../assets/img/insta.png" /></a>
                    <a class="a-button" href="https://soundcloud.com/studentradion98-9/sets/sen-lunch-med-pk"><img src="../assets/img/soundcloud.png" /></a>
                </div>
            </div>
            <div class="footer-item col-4">
                <div v-if="this.english" class="text">
                    <h4>Address</h4>
                </div>
                <div v-else class="text">
                    <h4>Adress</h4>
                </div>
                <div class="img">
                    <p>Uppsala Politicesstuderande Box 514, <br>c/o Statsvetenskapliga institutionen 751 20 Uppsala</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer{
    display:none;
}

    @media only screen and (min-width: 800px) {
        .footer{
            display:block;
            width: 100%;
            height: 120px;
            overflow: hidden;
            background: #30242e;
            padding: 10px 30px;
            text-align: center;

            &-item{
                float:left;
                &::after{
                    clear: both;
                }

                .text{
                    height: 50%;
                }

                .img{
                    margin-top: 15px;
                    height: 50%;
                }

                .img img {
                    width: 7%;
                    margin: 0 7px;
                }
            }
        }
         
        .text h4{
            color: #ffffff;
            font-weight: bold;
        }

        .img p{
            color: #ffffff;
            font-size: 10px;
        }
    }
</style>

<script>
export default{
    computed: {
        english(){
            return this.$store.state.english;
        }
    }
}
</script>