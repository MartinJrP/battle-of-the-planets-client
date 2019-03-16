<template>
    <div id="the-game-session">
        <div class="game-code-container">

            <div>

                <h1>Battle of the Planets</h1>

                <h2>Game Code</h2>

                <p class="game-code"> {{ code }} </p>

            </div>


            <div class="players-container">

                <player-card
                    v-for="player in players"
                    v-bind:key="player.num"
                    v-bind:player="player"
                />
                
            </div>

            <button class="main-button"
            v-on:click="emitGenerateTeamsEvent">Generate Teams</button>

        </div>
    </div>
    
</template>

<script>

import PlayerCard from './PlayerCard.vue';

export default {
    name: 'TheGameSession',
    components: { PlayerCard },
    methods: {
        emitGenerateTeamsEvent: function () {
            this.$emit("generate-teams");
        }
    },
    data: function () {
        return {
            code: '',
            //players: []
        }
    },
    computed: {
        players: function () {
            return this.$store.state.players
        }
    },
    mounted: function () {
        const vm = this
        this.$socket.emit('create-session', '', function(code) {
            vm.code = code
            vm.$emit('session-started', code)
        });

    }
}
</script>

<style lang="scss">

.game-code-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height:100vh;
  width:100%;
  margin:0;
  padding:96px 0px 64px 0px;
}

.game-code-container h1 {
    font-size:72px;
}

h2 {
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    font-weight:600;
    font-size:24px;
    text-align: center;
}

.game-code {
    width:280px;
    text-transform: uppercase;
    color:#522875;
    padding:24px 64px 13px 64px;
    font-family: "Luckiest Guy", sans-serif;
    background-color:white;
    font-size:40px;
    margin:8px auto 0px auto;
    border-radius: 20px;
    text-align:center;
}

.players-container {
    width:836px;
    height:271px;
    display:flex;
    justify-content:start;
    align-items:flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin:16px 0px;
}

.game-code-container button {
    margin-top:16px;
}


</style>
