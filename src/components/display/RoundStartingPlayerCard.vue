<template>

    <div id="round-starting-player-card" class="player-card">
        <img
            v-bind:src="path" 
            alt="Planet Avatar" 
            class="planet-avatar">

        <p> {{ player.username }}</p>

        <p
        v-bind:class="{'ready-green-text':ready}"> {{ response }} </p>
    </div>

</template>

<script>
export default {
name: "RoundStartingPlayerCard",
props: ['player', 'ready'],
computed: {
    baseUrl: function () {
        return process.env.BASE_URL
    },
    path: function () {
        // https://battle-of-the-planets.firebaseapp.com/://https://battle-of-the-planets.firebaseapp.com/img/planet-1.png
        let isProduction = process.env.NODE_ENV === 'production'
        let baseUrl = isProduction ? this.baseUrl : window.location.host + '/'
        let protocol = isProduction ? '' : 'http'
        let path;
        if (isProduction) {
            path = `${baseUrl}img/planet-${ this.player.num }.png`
        } else {
            path = `http://${baseUrl}img/planet-${ this.player.num }.png`
        }
        return path
    },
    response: function () {
        return this.ready ? "READY TO PLAY" : "Waiting for response..."
    }
  }
}
</script>

<style lang="scss">

#round-starting-player-card {
    display: inline-block;
    vertical-align: middle;
    padding:0;
    width:390px;
}

#round-starting-player-card img {
    width:200px;
}

#round-starting-player-card p {
    font-family: "Open Sans", sans-serif;
    font-size:24px;
    display:block;
}

#round-starting-player-card p:nth-of-type(2) {
    font-family: "Poppins", sans-serif;
    font-weight:600;
    font-size:20px;
    margin-top:32px;
}

.ready-green-text {
    text-transform: uppercase;
    color:#57D785;
}
</style>

