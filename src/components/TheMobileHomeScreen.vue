<template>
    
    <div id="the-mobile-home-screen">
        <div class="container">

            <h1>Battle<br>of the<br>Planets</h1>

            <form v-on:submit.prevent>
                
                <input class="text-input" placeholder="Game Code">

                <button class="mobile-main-button"
                v-on:click="emitCodeAcceptedEvent">Continue</button>

            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TheMobileHomeScreen',
    methods: {
        emitCodeAcceptedEvent: function () {
            this.$emit("code-accepted");
        }
    }
    
}
</script>

<style lang="scss">

</style>
