<template>
    <div id="round-starting-screen">

        <div>
            <h1>ROUND #{{ currentRoundNum }}</h1>
            
            <h2>{{ currentQuestion.category }}</h2>
        </div>

        <div class="opponents-container">

            <round-starting-player-card
                v-bind:player="teamOnePlayer"
                v-bind:ready="playerOneReady"/>

            <p>VS</p>

            <round-starting-player-card
                v-bind:player="teamTwoPlayer"
                v-bind:ready="playerTwoReady"/>

        </div>

        <div class="test">

        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RoundStartingPlayerCard from './RoundStartingPlayerCard.vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
    name: "RoundStartingScreen",
    components: { RoundStartingPlayerCard },
    sockets: {
        ['player-ready']: function(num){
            this.ready = true;
            if (this.teamOnePlayer.num === num) this.playerOneReady = true
            if (this.teamTwoPlayer.num === num) this.playerTwoReady = true
        }
    },
    data: function () {
        return {
            playerOneReady: false,
            playerTwoReady: false
        }
    },
    computed: {
        ...mapState(['currentRoundNum', 'currentQuestion']),
        ...mapGetters(['teamOnePlayer', 'teamTwoPlayer'])
    }
})
</script>

<style lang="scss">

#round-starting-screen {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height:100vh;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin:0;
    padding:96px 0px 96px 0px;
}

#round-starting-screen h1 {
    font-size:72px;
}

#round-starting-screen h2 {
    font-size:28px;
    color:#AE97F4;
    margin-top:4px;
}

.opponents-container {
    margin-top:32px;
}

.opponents-container img {
    display: inline-block;
    vertical-align: middle;
    width:200px;
}

.opponents-container p {
    display:inline;
    vertical-align: middle;
    margin:0px 80px;
    font-family: "Luckiest Guy", sans-serif;
    font-size:64px;
    font-weight:700;
}

.test {
    height:118px;
}

</style>
