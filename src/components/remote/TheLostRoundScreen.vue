<template>
    <div id="the-lost-round-screen">
        <h1>INCORRECT</h1>

        <p class="text">But don’t worry, cheer on your team members and your team can still win!</p>

        <mobile-player-card
            v-bind:player="currentPlayer"></mobile-player-card>

    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import MobilePlayerCard from './MobilePlayerCard.vue';

import { RemoteStore } from '@/RemoteStore'

export default Vue.extend({
    name: "TheLostRoundScreen",
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

    #the-lost-round-screen {
        text-align: center;
    }

    #the-lost-round-screen h1 {
        font-size:48px;
        color:#F54359;
        margin-top:64px;
        width:265px;
    }

    #the-lost-round-screen .text {
        font-family: "Open Sans", sans-serif;
        font-size:16px;
        margin:16px auto 48px auto;
        width:288px;
    }

</style>
