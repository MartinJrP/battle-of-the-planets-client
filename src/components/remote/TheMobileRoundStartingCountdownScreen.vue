<template>
    <div id="the-mobile-round-starting-countdown-screen">

        <div class="container">

            <player-avatar/>

            <h1>ROUND #1 BEGINS IN…</h1>

            <p>5</p>
        
        </div>

    </div>
    
</template>

<script>

import PlayerAvatar from './PlayerAvatar.vue';

export default {
    name: "TheMobileRoundStartingCountdownScreen",
    components: { PlayerAvatar }
}
</script>

<style lang="scss">

#the-mobile-round-starting-countdown-screen h1 {
    margin-top:24px;
    width:250px;
}

#the-mobile-round-starting-countdown-screen p {
    font-family: "Luckiest Guy", sans-serif;
    font-size:208px;
    margin:160px 0px 0px 0px;
    color:#AE97F4;
}

</style>
