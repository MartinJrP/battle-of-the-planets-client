<template>
    <div id="the-player-round-info-screen">
        <div class="container">
            <h1>Team #{{ teamNumber }}</h1>

            <p>You're playing</p>

            <h1 class="round-number-text">Round #{{ roundNumber }}</h1>

            <p>VS</p>

            <mobile-player-card :player="opponentOne"></mobile-player-card>

            <p v-if="opponentTwo">
                You'll also battle {{ opponentTwo.username }} in the final, bonus round.
            </p>
        </div>
    </div>
    
</template>

<script>
import MobilePlayerCard from './MobilePlayerCard.vue'

import { RemoteStore } from '@/RemoteStore'

export default {
    name:"ThePlayerRoundInfoScreen",
    components: { MobilePlayerCard },
    computed: {
        opponentOne: function () {
            return RemoteStore.opponentOne
        }, 
        opponentTwo: function () {
            return RemoteStore.opponentTwo
        },
        teamNumber: function () {
            return RemoteStore.teamNumber
        },
        roundNumber: function () {
            return RemoteStore.rounds[0].num
        },
        round: function () {
            return RemoteStore.rounds[0]
        },
        players: function () {
            return RemoteStore.players
        }
    }
}
</script>

<style lang="scss">

#the-player-round-info-screen p:first-of-type {
    font-family: "Poppins", sans-serif;
    font-size:20px;
    font-weight: 600;
}

#the-player-round-info-screen p:nth-of-type(2) {
    font-family: "Poppins", sans-serif;
    font-size:28px;
    font-weight:800;
    text-transform: uppercase;
    margin-top:32px;
    margin-bottom:16px;
    color:#AE97F4;
}

#the-player-round-info-screen h1:nth-of-type(1) {
    margin-bottom:40px;
}

#the-player-round-info-screen h1:nth-of-type(2) {
    margin-top:24px;
}




</style>
