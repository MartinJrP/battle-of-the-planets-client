<template>
    
    <div id="the-mobile-home-screen">
        <div class="container">

            <h1>Battle<br>of the<br>Planets</h1>

            <p>Team up with your classmates and challenge one another to see who is the superior planet in the galaxy</p>

            <form v-on:submit.prevent="emitCodeSubmitted">
                
                <input 
                    v-model="inputCode"
                    class="text-input" 
                    autofocus
                    type="number"
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

#the-mobile-home-screen {
    background-image: url("~@/assets/img/planets-mobile-bg.svg");
    background-size:100%;
    background-repeat: no-repeat;
    background-position: center;
    height:100%;

    input {
        outline: none;
    }
}

</style>
