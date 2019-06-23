<template>
    <div class="instagram">
        <a href="https://www.instagram.com/uppsalapolitices/"><div class="title"><img src="../assets/img/insta.png" /><h4>Uppsalapolitices</h4></div></a>
        <div id="curator-feed"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
    </div>
</template>

<style lang="scss">

    .instagram {
        margin: 0 -20px;
        background: rgba(242, 241, 239, 1); 
        margin-top: 40px;
        margin-bottom: -20px;
    }

    .title{
        height: 20px;
        padding: 8px;

        img{
            width: 20px;
            margin-right: 8px;
            float: left;
        }

        h4{
            color: black;
        }
    }

    #curator-feed{
        padding: 20px;
    }

    @media only screen and (min-width: 800px) {

        .title{
            text-align: left;
        }

    }
    
</style>

<script>
export default{

    methods: {   
        hello:function(){

        var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
i.src = "https://cdn.curator.io/published/b1ed652f-4931-4247-9ac6-038a105b8f1f.js";
e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
           
        }
    },
    mounted:function(){
        this.hello();
    }
}
</script>