<template>

    <div id="round-starting-player-card" class="player-card">
        <img
            v-bind:src="path" 
            alt="Planet Avatar" 
            class="planet-avatar">

        <p>Name</p>

        <p>Waiting for response...</p>
    </div>

</template>

<script>
export default {
name: "RoundStartingPlayerCard",
computed: {
    baseUrl: function () {
        return process.env.BASE_URL
    },
    path: function () {
        let isProduction = process.env.NODE_ENV === 'production'
        let baseUrl = isProduction ? this.baseUrl : window.location.host + '/'
        let protocol = isProduction ? 'https' : 'http'
        var path = `${protocol}://${baseUrl}img/planet-1.png`
        return path
    }
}

}
</script>

<style lang="scss">

#round-starting-player-card {
    display: inline-block;
    vertical-align: middle;
    padding:0;
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
</style>

