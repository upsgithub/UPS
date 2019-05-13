<template>
    <div class="sponsorer container--full">
        <div class="wrapper">
            <h4>Våra samarbetspartners</h4>
            <div class="sponsor-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
            <div class="sponsor-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
            <div class="sponsor-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
            <div class="sponsor-logo col-6"><img src="../assets/img/logo_bred_placeholder.png" /></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .sponsorer{
        width: auto;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;   
        margin: 0 20px;
        padding: 25px 0;
        text-align: center;
    }

    .sponsor-logo{
        margin-top: 25px;
        padding: 0 5px;
        float: left;
        &::after{
            clear: both;
        }
    }

    .sponsor-logo img{
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        .sponsor-logo{
            width: 25%;
        }

        .sponsorer wrapper{
            min-width: none;
        }
    }
</style>


