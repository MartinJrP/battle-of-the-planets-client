<template>
    <div id="the-home-screen">

        <div class="container">

            <h1>Battle of the Planets</h1>

            <p class="description">Team up with your classmates and test your knowledge as you face head to head to see who is the superior planet of the galaxy.</p>

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
    background-image: url("~@/assets/img/planets-home-bg.svg");
    background-size:90%;
    background-repeat: no-repeat;
    background-position: center bottom;
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
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height:100%;
  width:100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin:0;
  padding:0;
}

.start-game-button {
    margin:294px 0px 0px 0px;
}

</style>
