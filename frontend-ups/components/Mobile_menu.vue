<template>
<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>

<div class="row">
  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ddd;">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>
    <div>
        <div :style="display" class="menu mobile container--full" >
            <div  class="flex-mobile">
                <div class="item" ><h2>Utbildning</h2></div>
                <div class="item" ><h2>Student</h2></div>
                <div class="item" ><h2>Event</h2></div>
                <div class="item" ><h2>Föreningen</h2></div>
            </div>
        </div>
        <div class="burger" @click="showMenu()">
            <img src="../assets/img/menu-button.png" />
        </div>
    </div>
</template>

<script>
export default{
    data: function() {
        return {
            display: "display: none"
        }
    },
    methods: {
       showMenu() {
           if(this.display === "display: none") {
               this.display = "";
           } else {
               this.display = "display: none";
           }
           
       }
    }
}
</script>
        
<style lang="scss">

    .item {
        width: calc(100% * (1/2) - 10px);
        border-bottom: 1px solid grey;
        border-right: 1px solid grey;
        &:last-child {
            border-right: 0px solid grey;
        }
        
    }

    .flex-mobile {
        display: flex;
        flex-flow:row wrap;
        justify-content: center;
        height: 100%;
        margin-top: 20px;
    }

    .mobile{
        z-index: 1;
        //display: block;
        position: fixed;
        bottom: 0;
        height: 40%;
        

        &-main{
            width: 100%;
        }

        &-item{
           // height: 100%;
            
            margin-top: 12px;
            border: 1px solid grey;
            
            
        }

        h2 {
            color: #eb5e43;
        }
    }

.burger {
    background-color: #30242e;
    z-index: 2;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    img{
        margin: 5px 15px;
        width: 50px;
    }
}
    
    @media only screen and (min-width: 800px) {
        .mobile{
            display: none;
        }
    }
    
    
</style>
