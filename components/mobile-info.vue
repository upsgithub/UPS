<template>
    <div class="mobile-menu__contact">
        <div class="contact__item contact__item--toggle" :class="displayIcons" @click="toggleContactIcons()">
            <div class="toggler">
                <div class="toggler-closed">?</div>
            </div>
        </div>
        <div class="contact__item contact__item--left" :class="displayIcons">
            <a href="mailto:sekreterare@uppsalapolitices.se">
                <img class="lazyload contact__item__icon" src="../assets/img/mail.png"/>
            </a>
        </div>
        <div class="contact__item contact__item--middle" :class="displayIcons">
            <a href="https://www.facebook.com/uppsalapolitices/" target="_blank">
                <img class="lazyload contact__item__icon" src="../assets/img/facebook.png"/>
            </a>
        </div>
        <div class="contact__item contact__item--top" :class="displayIcons">
            <a href="https://www.instagram.com/uppsalapolitices/?hl=sv" target="_blank">
                <img class="lazyload contact__item__icon" src="../assets/img/insta.png"/>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            displayIcons: ""
        }
    },
    methods: {
        toggleContactIcons() {
            if(this.displayIcons){
                this.displayIcons = "";
            }
            else{
                this.displayIcons = "open"
            }
        }
    }
}
</script>

<style lang="scss">
.mobile-menu__contact{
    position: fixed;
    bottom: 80px;
    right: 62.5px;
}

.toggler{
    width: 55px;
    height: 55px;
    &::before {
        content: "";
        position: absolute;
        top: 23px;
        left: 19px;
        width: 25px;
        height: 3px;
        background-color: #eb5e43;
        transform-origin: center;
        transition: transform .3s ease-out;
        opacity: 0;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 22px;
        left: 19px;
        width: 25px;
        height: 3px;
        background-color: #eb5e43;
        transform-origin: center;
        transition: transform .3s ease-out;
        opacity: 0; 
    }

    .toggler-closed{
        opacity: 1;
        transition: transform .3s ease-out;
    }
}

.open .toggler{
    &::before {
        opacity: 1;
        transform: rotate(45deg) scaleX(1.15) translateY(5px);
    }
    
    .toggler-closed {
        opacity: 0;
        transform: scale(0);
    }

    &::after {
        opacity: 1;
        transform: rotate(-45deg) scaleX(1.15) translateY(-5px);
    }
}

@media only screen and (min-width: 900px) {
    .mobile-menu__contact{
        display: none;
    }
}
</style>
