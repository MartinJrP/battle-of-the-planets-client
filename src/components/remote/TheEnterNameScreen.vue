<template>
    <div id="the-enter-home-screen">
        <div class="container">

            <h1>Battle<br>of the<br>Planets</h1>

            <p>Team up with your classmates and challenge one another to see who is the superior planet in the galaxy</p>

            <form 
            v-on:submit.prevent="emitUsername">
                
                <input class="text-input" placeholder="First Name" autofocus v-model="username">

                <button class="mobile-main-button">Join Game</button>

            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TheEnterNameScreen',
    data: function () {
        return {
            username: ''
        }
    },
    methods: {
        emitUsername: function () {

            console.log("submitted")
            this.$emit('update-username', this.username)
            this.$emit('connection-confirmed');

            window.scrollTo(0,0);
        }
    }
}
</script>

<style lang="scss">

#the-enter-home-screen {
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
