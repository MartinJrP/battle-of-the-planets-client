<template>
    <div id="mobile-player-card">
        <img
            v-bind:src="path" 
            alt="Planet Avatar" 
            class="planet-avatar">

        <p> {{ player.username }} </p>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "MobilePlayerCard",
    props: ["player"],
    computed: {
        baseUrl: function () {
            return process.env.BASE_URL
        },
        path: function () {
            let isProduction = process.env.NODE_ENV === 'production'
            let baseUrl = isProduction ? this.baseUrl : window.location.host + '/'
            let protocol = isProduction ? 'https' : 'http'
            var path = `${protocol}://${baseUrl}img/planet-${ this.player.num }.png`
            return path
        }
    }
    
})
</script>

<style lang="scss">

#mobile-player-card {
    text-align: center;
}

img {
    width:140px;
    margin-bottom:0;
}

#mobile-player-card p {
    font-family: "Open Sans", sans-serif;
    font-size:24px;
    font-weight:700;
    margin-top:0;
}

</style>
