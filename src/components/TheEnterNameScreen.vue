<template>
    <div id="the-enter-home-screen">
        <div class="container">

            <h1>Battle<br>of the<br>Planets</h1>

            <form v-on:submit.prevent>
                
                <input class="text-input" placeholder="First Name">

                <button class="mobile-main-button">Join Game</button>

            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TheEnterNameScreen'
}
</script>

<style lang="scss">

</style>
