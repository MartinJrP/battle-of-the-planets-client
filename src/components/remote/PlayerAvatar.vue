<template>

    <img
    v-bind:src="path" 
    alt="Planet Avatar" 
    class="mini-planet-avatar"/>
    
</template>

<script>
export default {
    name: "PlayerAvatar",
    props: ['player'],
    computed: {
        baseUrl: function () {
            return process.env.BASE_URL
        },
        path: function () {
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
        } 
    }
}
</script>

<style lang="scss">

.mini-planet-avatar {
    width:100px;
    margin-top:40px;
}

</style>
