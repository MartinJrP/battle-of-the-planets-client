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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height:100vh;
        width:100%;
        background-size: cover;
        background-repeat: no-repeat;
        margin:0;
        padding:96px 0px 64px 0px;
    }

    #the-final-results-screen h1 {
        color:#AE97F4;
        font-size:72px;
    }

    #the-final-results-screen h3 {
        font-family: "Luckiest Guy", sans-serif;
        font-size:56px;
        text-transform: uppercase;
    }

    #the-final-results-screen button {
    }

</style>
