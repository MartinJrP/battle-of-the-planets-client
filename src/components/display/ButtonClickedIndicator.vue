<template>
    <div id="button-clicked-indicator">

        <!-- Come back to this after the break -->
        <!-- <img
            v-bind:src="path" 
            alt="Planet Avatar"> -->

        <p>Press the button on your screen to answer</p>

        <!-- <img
            v-bind:src="path" 
            alt="Planet Avatar"> -->
    </div>
</template>

<script>
export default {
    name: "ButtonClickedIndicator",
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
        }
    }
}
</script>

<style lang="scss">

#button-clicked-indicator {
    margin-top:0;
}

#button-clicked-indicator img {
    width:64px;
    vertical-align: middle;
    display:inline;
}

#button-clicked-indicator p {
    font-family: "Poppins", sans-serif;
    color:white;
    font-weight:600;
    font-size:24px;
    display:inline;
    vertical-align: middle;
    line-height:12px;
    margin:0px 80px;
}

</style>
