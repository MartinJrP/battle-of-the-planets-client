<template>
    <div id="the-player-round-info-screen">
        <div class="container">
            <h1>Team #{{ teamNumber }}</h1>

            <p>You're playing</p>

            <h1>Round #{{ roundNumber }}</h1>

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
        }
    }
}
</script>

<style lang="scss">

</style>
