<template>
    <div id="round-starting-screen">
        <h1>ROUND #1</h1>

        <h2>Multiplication</h2>

        <div class="opponents-container">

            <round-starting-player-card></round-starting-player-card>

            <p>VS</p>

            <round-starting-player-card></round-starting-player-card>

        </div>

    </div>
</template>

<script>
import RoundStartingPlayerCard from './RoundStartingPlayerCard.vue';

export default {
    name: "RoundStartingScreen",
    components: { RoundStartingPlayerCard }
}
</script>

<style lang="scss">

#round-starting-screen {
    text-align: center;
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
</style>
