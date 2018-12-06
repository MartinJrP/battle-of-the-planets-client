<template>

    <!-- COME BACK TO THIS -->
    <tr id="player-table-cell">
        <td class="round-number">{{ number }}</td>
        <td colspan="2"><img
            v-bind:src="pathes[0]" 
            alt="Planet Avatar" 
            class="table-planet-avatar">{{ playerOne }}</td>
        <td class="vs-text">VS</td>
        <td colspan="2"><img
            v-bind:src="pathes[1]" 
            alt="Planet Avatar" 
            class="table-planet-avatar">{{ playerTwo }}</td>
    </tr>
    
</template>

<script>
export default {
name: "PlayerTableCell",
props: ['round', 'number', 'players'],
computed: {
    baseUrl: function () {
        return process.env.BASE_URL
    },
    pathes: function () {
        let isProduction = process.env.NODE_ENV === 'production'
        let baseUrl = isProduction ? this.baseUrl : window.location.host + '/'
        let protocol = isProduction ? 'https' : 'http'
        let basePath = `${protocol}://${baseUrl}img/`
        return [
            basePath + 'planet-' + this.round.playerOne + '.png',
            basePath + 'planet-' + this.round.playerTwo + '.png',
        ]
    },
    playerOne: function () {
        return this.players.find(player => player.num === this.round.playerOne).username
    },
    playerTwo: function () {
        return this.players.find(player => player.num === this.round.playerTwo).username
    }
}

}
</script>

<style lang="scss">

td {
    vertical-align: middle;
    font-family: "Open Sans", sans-serif;
    font-size:20px;
    font-weight:700;
}

.vs-text {
    font-family: "Poppins", sans-serif;
    font-size:24px;
    font-weight:800;
}

.round-number {
    font-family: "Luckiest Guy", sans-serif;
    font-size:32px;
    vertical-align: middle;
    padding-top:8px;
}

.table-planet-avatar {
    width:62px;
    vertical-align: middle;
    margin-right:8px;
}

</style>