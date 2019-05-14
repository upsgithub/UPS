<template>
    <div class="menu mobile container--full">
        <div class="mobile-item col-3">
            <div class="text">
                <h2><a href="#">Utbildning</a></h2>
            </div>
        </div> 
        <div class="mobile-item col-3">
            <div class="text">
                <h2><a href="#" class="dropdown-student">Student</a></h2>
            </div>
            <div class="dropdown" id="student">
                <div class="dropdown-item"><h3><a href="#">Option 1</a></h3></div>
                <div class="dropdown-item"><h3><a href="#">Option 2</a></h3></div>
                <div class="dropdown-item"><h3><a href="#">Option 3</a></h3></div>
                <div class="dropdown-item"><h3><a href="#">Option 4</a></h3></div>
            </div>
        </div>
        <div class="mobile-item col-3">
            <div class="text">
                <h2><a href="#">Event</a></h2>
            </div>
        </div> 
        <div class="mobile-item col-3">
            <div class="text">
                <h2><a href="#">Föreningen</a></h2>
            </div>
        </div>
    </div>
</template>
        
<style lang="scss">

    .mobile{
        display: block;
        position: fixed;
        bottom: 0;

        &-item{
            display: block;
            position: relative;
            text-align: center;
            padding: 0 10px;
            float:left;
            &::after{
                clear: both;
            }

            img{
                width: 30%;
                height: auto;
            }
        }
    }

    .mobile h2{
        font-size: 15px;
    }
    
    @media only screen and (min-width: 800px) {
        .mobile{
            display: none;
        }
    }
    
    
</style>
