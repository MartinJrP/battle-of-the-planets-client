<template>
    <div id="the-player-round-info-screen">
        <div class="container">
            <h1>Team #1</h1>

            <p>You're playing</p>

            <h1 class="round-number-text">Round #{{ roundNum }}</h1>

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

#the-player-round-info-screen p {
    font-family: "Poppins", sans-serif;
    font-size:20px;
    font-weight: 600;
    margin-top:40px;
}

#the-player-round-info-screen p:nth-of-type(2) {
    font-family: "Poppins", sans-serif;
    font-size:28px;
    font-weight:800;
    text-transform: uppercase;
    margin-top:32px;
    color:#AE97F4;
}

#the-player-round-info-screen h1:nth-of-type(2) {
    margin-top:24px;
}




</style>
