<template>
    <div class="instagram">
        <!-- Place <div> tag where you want the feed to appear -->
    <div id="curator-feed"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
    <!-- The Javascript can be moved to the end of the html page before the </body> tag -->

    </div>
</template>

<style lang="scss">

    @media only screen and (min-width: 800px) {

        .instagram {

            border-top: 1px solid lightgray;
            margin-top: 40px;
            margin-bottom: 20px;
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