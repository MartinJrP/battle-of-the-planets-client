<template>
    <div id="the-won-round-screen">
        <h1>CORRECT!</h1>

        <p class="text">Congratulations! You just got your team 1 point.</p>

        <mobile-player-card
            v-bind:player="currentPlayer"></mobile-player-card>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import MobilePlayerCard from './MobilePlayerCard.vue';

import { RemoteStore } from '@/RemoteStore'

export default Vue.extend({
    name: "TheWonRoundScreen",
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

    #the-won-round-screen {
        text-align: center;
    }

    #the-won-round-screen h1 {
        font-size:48px;
        color:#57D785;
        margin-top:64px;
        width:265px;
    }

    #the-won-round-screen .text {
        font-family: "Open Sans", sans-serif;
        font-size:16px;
        margin:16px auto 48px auto;
        width:288px;
    }

</style>
