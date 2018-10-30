<template>
    <div id="the-home-screen">

        <div class="container">

            <h1>Battle of the Planets</h1>

            <p class="description">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu. Natoque leo penatibus et leo magnis dis parturient montes.</p>

            <button class="main-button" v-on:click="emitStartGameEvent">Start Game</button>

        </div>

    </div>
</template>

<script>
export default {
    name: 'TheHomeScreen',
    methods: {
        emitStartGameEvent: function () {
            this.$emit("start-game");
        }
    }
}
</script>

<style lang="scss">
#the-home-screen {

}
</style>
