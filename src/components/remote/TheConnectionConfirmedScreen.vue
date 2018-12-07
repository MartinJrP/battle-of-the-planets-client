<template>
    <div id="the-connection-confirmed-screen">
        <div class="container">
            <h1>You're In!</h1>

            <mobile-player-card
                v-bind:player="currentPlayer"></mobile-player-card>
            
            <div class="loading-message">
                
                <!-- Loading Icon Animation -->
                <div class="lds-css ng-scope">
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>

                <h2>You look great up there!</h2>

                <p>Just sit tight while we wait for the rest of the class to join. The moderator will start the game when we're ready!</p>


            </div>
            
        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import MobilePlayerCard from './MobilePlayerCard.vue';

import { RemoteStore } from '@/RemoteStore'

export default Vue.extend({
    name:"TheConnectionConfirmedScreen",
    components: { MobilePlayerCard },
    props: ["player"],
    computed: {
        currentPlayer: function () {
            return RemoteStore.$data.currentPlayer
        }
    }
})
</script>

<style lang="scss">

.loading-message {
    margin-top:40px;
    text-align: center;
}

.loading-message h2 {
    margin-top:16px;
    font-family:"Poppins", sans-serif;
    font-size:20px;
}  

@keyframes lds-spinner {
    0% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    }
}
@-webkit-keyframes lds-spinner {
    0% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    }
}
.lds-spinner {
    position: relative;
    margin:0 auto;
}

.lds-spinner div {
    left: 94px;
    top: 44px;
    position: absolute;
    -webkit-animation: lds-spinner linear 1s infinite;
    animation: lds-spinner linear 1s infinite;
    background: #AE97F4;
    width: 12px;
    height: 32px;
    border-radius: 24%;
    -webkit-transform-origin: 6px 56px;
    transform-origin: 6px 56px;
}

.lds-spinner div:nth-child(1) {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-animation-delay: -0.875s;
    animation-delay: -0.875s;
}

.lds-spinner div:nth-child(2) {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
}

.lds-spinner div:nth-child(3) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation-delay: -0.625s;
    animation-delay: -0.625s;
}

.lds-spinner div:nth-child(4) {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
}

.lds-spinner div:nth-child(5) {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation-delay: -0.375s;
    animation-delay: -0.375s;
}

.lds-spinner div:nth-child(6) {
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
    -webkit-animation-delay: -0.25s;
    animation-delay: -0.25s;
}
.lds-spinner div:nth-child(7) {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    -webkit-animation-delay: -0.125s;
    animation-delay: -0.125s;
}

.lds-spinner div:nth-child(8) {
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

.lds-spinner {
    width: 40px !important;
    height: 40px !important;
    -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
    transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
}

</style>
