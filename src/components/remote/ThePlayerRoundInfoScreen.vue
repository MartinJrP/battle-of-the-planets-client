<template>
    <div id="the-player-round-info-screen">
        <div class="container">
            <h1>Team #1</h1>

            <p>You're playing</p>

            <h1>Round #{{ roundNum }}</h1>

            <p>VS</p>

            <mobile-player-card></mobile-player-card>
        </div>
    </div>
    
</template>

<script>
import MobilePlayerCard from './MobilePlayerCard.vue'

export default {
    name:"ThePlayerRoundInfoScreen",
    components: { MobilePlayerCard },
    sockets: {
        ['teams-generated']: function(rounds) {
            // Get round info here
        }
    },
    data: function(){
        return {
            roundNum: '',
        }
    }
}
</script>

<style lang="scss">

</style>
