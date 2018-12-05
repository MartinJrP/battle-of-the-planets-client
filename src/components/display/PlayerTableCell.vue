<template>

    <!-- COME BACK TO THIS -->
    <tr id="player-table-cell">
        <td class="round-number">1</td>
        <td colspan="2"><img
            v-bind:src="path" 
            alt="Planet Avatar" 
            class="table-planet-avatar">Alexander</td>
        <td class="vs-text">VS</td>
        <td colspan="2"><img
            v-bind:src="path" 
            alt="Planet Avatar" 
            class="table-planet-avatar">Jess</td>
    </tr>
    
</template>

<script>
export default {
name: "PlayerTableCell",
computed: {
    baseUrl: function () {
        return process.env.BASE_URL
    },
    path: function () {
        var path = `${this.baseUrl}img/planet-${ this.player.num }.png`
        return path
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