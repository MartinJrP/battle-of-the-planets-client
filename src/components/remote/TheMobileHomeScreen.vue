<template>
    
    <div id="the-mobile-home-screen">
        <div class="container">

            <h1>Battle<br>of the<br>Planets</h1>

            <form v-on:submit.prevent="emitCodeSubmitted">
                
                <input 
                    v-model="inputCode"
                    class="text-input" 
                    placeholder="Game Code"/>

                <button 
                    @:click="emitCodeSubmitted"
                    type="submit" 
                    class="mobile-main-button">Continue</button>

            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TheMobileHomeScreen',
    data: function () {
        return {
            inputCode: ''
        }
    },
    methods: {
        emitCodeSubmitted: function () {
            this.$emit('code-accepted', this.inputCode)
        }
    }
}
</script>

<style lang="scss">

</style>
