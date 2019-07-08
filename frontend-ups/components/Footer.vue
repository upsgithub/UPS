<template>
    <div class="footer">
        <div class="content-wrapper">
            <div class="footer-item col-4">
                <div class="text">
                    <h4>Kontakt oss</h4>
                </div>
                <button @click="change_language()">{{ current }}</button>
                <div class="img">
                    <img src="../assets/img/mail.png" />
                </div>
            </div>
            <div class="footer-item col-4">
                <div class="text">
                    <h4>Sociala medier</h4>
                </div>
                <div class="img">
                    <a class="a-button" href="https://www.facebook.com/uppsalapolitices/"><img src="../assets/img/facebook.png" /></a>
                    <a class="a-button" href="https://www.instagram.com/uppsalapolitices/?hl=sv"><img src="../assets/img/insta.png" /></a>
                    <a class="a-button" href="https://soundcloud.com/studentradion98-9/sets/sen-lunch-med-pk"><img src="../assets/img/soundcloud.png" /></a>
                </div>
            </div>
            <div class="footer-item col-4">
                <div class="text">
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
        methods: {
            change_language:function() {
                var current = this.$store.state.english;
                this.$store.commit('change_language', !current);
            }
        },
        computed: {
            english(){
                return this.$store.state.english;
            },
            current(){
                if(this.english){
                    return "This is english";
                } else {
                    return "Det här är svenska";
                }
            }
        }
    }
</script>