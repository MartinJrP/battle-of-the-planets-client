<template>

    <div id="player-card" class="player-card">
        <img
            v-bind:src="path" 
            alt="Planet Avatar" 
            class="planet-avatar">

        <p class="player-name"> {{ player.username }}</p>
    </div>

</template>

<script>
export default {
name: "PlayerCard",
props: ["player"],
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

.player-card {
    padding:0px 40px 0px 0px;
}

.player-card:last-of-type,
.player-card:nth-of-type(6) {
    padding:0px 0px 0px 0px;
}

.planet-avatar {
    width:106px;
}

.player-name {
    font-size:16px;
    font-weight:700;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    margin-top:0;
}

</style>
