<template>
    <div id="the-answer-result-screen">
        <h1 class="correct">CORRECT!</h1>

        <p class="text">You are super smart!<br>You just got your team <strong>1 point.</strong></p>

        <mobile-player-card
            v-bind:player="currentPlayer"></mobile-player-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MobilePlayerCard from './MobilePlayerCard.vue';

import { RemoteStore } from '@/RemoteStore'

export default Vue.extend({
    name: "TheAnswerResultScreen",
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

    #the-answer-result-screen {
        text-align: center;
    }

    #the-answer-result-screen h1 {
        font-size:48px;
        margin-top:64px;
    }

    .correct {
        color:#57D785;
    }

    .incorrect {
        color:#F54359;
    }

    #the-answer-result-screen .text {
        font-family: "Open Sans", sans-serif;
        font-size:16px;
        margin:16px auto 48px auto;
        width:288px;
    }

</style>
