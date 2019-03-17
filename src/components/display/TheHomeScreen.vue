<template>
    <div id="the-home-screen">

        <div class="container">

            <div>

                <h1>Battle of the Planets</h1>

                <p class="description">Team up with your classmates and test your knowledge as you face head to head to see who is the superior planet of the galaxy.</p>

            </div>

            <div class="planets-background">

            </div>

            <button class="main-button start-game-button" v-on:click="emitStartGameEvent">Start Game</button>

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
    height:100vh;
    overflow: hidden;
}

.planets-background {
    width:90vw;
    height:100vh;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("~@/assets/img/planets-home-bg.svg");
    background-repeat: no-repeat;
    background-position: center center;
}

.description {
  font-family:"Open Sans", sans-serif;
  color:white;
  font-weight:400;
  text-align: center;
  line-height:36px;
  margin:8px auto 0px auto;
  width:730px;
  font-size:24px;
}

.container {
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

</style>
