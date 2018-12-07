<template>
    <div id="the-ready-confirmation-screen">

        <div class="container">

            <player-avatar/>

            <h1>Are you ready?</h1>

            <p>The question will appear once you are BOTH ready to play. Make sure you are watching the screen!</p>

            <button class="mobile-main-button"
                v-if="state == 'ready-notClicked'">Ready</button>

            <div class="waiting-container"
                v-if="state == 'ready-clicked'">
                <!-- Loading Icon Animation -->
                <div class="lds-css ng-scope">
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>

                <p>Waiting for other player</p>
            </div>

            

        </div>
    
    </div>
</template>

<script>

import PlayerAvatar from './PlayerAvatar.vue';

export default {
    name: "TheReadyConfirmationScreen",
    components: { PlayerAvatar },
    data: function() {
        return {
            state: 'ready-notClicked'
        }
    }
    
}
</script>

<style lang="scss">

#the-ready-confirmation-screen h1 {
    margin-top:24px;
    width:191px;
}

#the-ready-confirmation-screen p {
    margin-top:24px;
}

#the-ready-confirmation-screen button {
    margin-top:72px;
}

.waiting-container {
    text-align: center;
    margin-top:48px;
}

.waiting-container p {
    font-family: "Poppins", sans-serif;
    font-size:20px;
    font-weight:700;
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
