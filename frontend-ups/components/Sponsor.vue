<template>
    <div class="samarbeten container--full">
        <div class="wrapper">
            <h4>Våra samarbetspartners</h4>
            <div class="samarbete-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
            <div class="samarbete-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
            <div class="samarbete-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
            <div class="samarbete-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .samarbeten{
        width: auto;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;   
        margin: 20px 0;
        padding: 25px 0;
        text-align: center;
    }

    .samarbete-logo{
        margin-top: 25px;
        padding: 0 5px;
        float: left;
        &::after{
            clear: both;
        }
    }

    .samarbete-logo img{
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        .samarbete-logo{
            width: 25%;
        }

        .samarbeteer wrapper{
            min-width: none;
        }
    }
</style>


