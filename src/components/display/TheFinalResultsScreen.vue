<template>
    <div id="the-final-results-screen">

        <h1>CONGRATULATIONS</h1>

        <h3>Team 1 &#38; Team 2</h3>

        <button class="main-button">Play Again</button>

    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "TheFinalResultsScreen"
    
})
</script>

<style lang="scss">

    #the-final-results-screen {
        text-align: center;
        background-image: url("~@/assets/img/final-results-bg.svg");
        background-size:100%;
        background-repeat: no-repeat;
        background-position: center;
        height:100vh;
    }

    #the-final-results-screen h1 {
        color:#AE97F4;
        font-size:72px;
        margin-top:80px;
    }

    #the-final-results-screen h3 {
        font-family: "Luckiest Guy", sans-serif;
        font-size:64px;
        margin-top:182px;
        text-transform: uppercase;
    }

    #the-final-results-screen button {
        margin-top:120px;
    }

</style>
