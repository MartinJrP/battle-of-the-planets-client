<template>

    
    <div id="round-starting-countdown-screen">
        <div class="container">
            <h1>ROUND #1 BEGINS IN . . .</h1>

            <p class="countdown">5</p>

            <button-clicked-indicator/>
        </div>
    </div>
    
</template>

<script>

import ButtonClickedIndicator from './ButtonClickedIndicator.vue';

export default {
    name: "RoundStartingCountdownScreen",
    components: { ButtonClickedIndicator }
    
}
</script>

<style lang="scss">

#round-starting-countdown-screen h1 {
    font-size:72px;
}

#round-starting-countdown-screen .countdown {
    font-family: "Luckiest Guy", sans-serif;
    font-size:320px;
    margin:96px 0px 0px 0px;
    color:#AE97F4;
}

</style>
