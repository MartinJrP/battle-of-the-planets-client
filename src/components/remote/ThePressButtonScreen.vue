<template>
    <div id="the-press-button-screen">

        <div class="container">

            <player-avatar
                v-bind:player="currentPlayer"/>

            <h1>PRESS THE BUTTON</h1>

            <h2>Before your opponent does!</h2>

            <p>Once the question is done loading, press the button below to answer. </p>

            <button class="mobile-main-button" 
                    v-on:click="requestToAnswerQuestion"
                    v-bind:disabled="butttonDisabled">
                {{ buttonText }}
            </button>

        </div>

    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import PlayerAvatar from './PlayerAvatar.vue';

import { RemoteStore } from '@/RemoteStore';

export default Vue.extend({
    name: "ThePressButtonScreen",
    props:['player'],
    sockets: {
        ['allow-answers']: function () {
            this.butttonDisabled = false
        }
    },
    data: function () {
        return {
            butttonDisabled: true
        }
    },
    components: { PlayerAvatar },
    computed: {
        currentPlayer: function () {
            return RemoteStore.$data.currentPlayer
        },
        buttonText: function () {
            return this.butttonDisabled ? 'Ready. Set...' : 'GO!'
        }
    },
    methods: {
        requestToAnswerQuestion: function () {
            if (this.butttonDisabled) return

            this.$socket.emit('request-to-answer', {
                sessionId: RemoteStore.sessionId, 
                playerNum: RemoteStore.currentPlayer.num, 
                timestamp: (new Date).getTime()
            })
        }
    }
    
})

</script>

<style lang="scss">

#the-press-button-screen h1 {
    margin-top:24px;
    width:288px;
}

#the-press-button-screen h2 {
    margin-top:24px;
    font-family: "Poppins", sans-serif;
    font-size:20px;
    font-weight:600;
    margin-bottom: 0;
}

#the-press-button-screen p {
    margin-top:16px;
    margin-bottom:80px;
}

.mobile-main-button:disabled {
    background-color: #333;
    opacity: 0.4;
}


</style>
