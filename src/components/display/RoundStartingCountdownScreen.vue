<template>

    
    <div id="round-starting-countdown-screen">
        <div class="container">
            <h1>ROUND #{{ currentRoundNum }} BEGINS IN . . .</h1>

            <p class="countdown">{{ counter }}</p>

            <button-clicked-indicator/>
        </div>
    </div>
    
</template>

<script>
import { mapState } from 'vuex';
import ButtonClickedIndicator from './ButtonClickedIndicator.vue';

export default {
    name: "RoundStartingCountdownScreen",
    components: { ButtonClickedIndicator },
    data: function () {
        return {
            counter: 5,
            interval: undefined 
        }
    },
    computed: {
        ...mapState(['currentRoundNum']),
    },
    methods: {
        decrementCounter: function () {
            if (this.counter > 0) {
                this.counter--
            } else {
                // Begin Game!!
                clearInterval(this.interval)
                this.$emit('countdown-ended')
            }
            
        }
    },
    mounted: function () {
        this.interval = setInterval(this.decrementCounter, 1000)
    }
    
}
</script>

<style lang="scss">

#round-starting-countdown-screen .container {
    padding:96px 0px 80px 0px;
}

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
