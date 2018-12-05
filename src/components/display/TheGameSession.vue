<template>
    <div id="the-game-session">
        <div class="game-code-container">

            <h1>Battle of the Planets</h1>

            <h2>Game Code</h2>

            <p class="game-code"> {{ code }} </p>


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
    sockets: {
        ['player-added']: function(player){
            this.players.push(player);
        }
    },
    methods: {
        emitGenerateTeamsEvent: function () {
            this.$emit("generate-teams");
        }
    },
    data: function () {
        return {
            code: '',
            players: []
        }
    },
    mounted: function () {
        const vm = this
        this.$socket.emit('create-session', '', function(code) {
            vm.code = code
        });

    }
}
</script>

<style lang="scss">

.game-code-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height:100%;
  width:100%;
  margin:0;
  padding:0;
}

.game-code-container h1 {
    font-size:72px;
    margin: 80px auto 0px auto;
}

.game-code-container button {
    margin-top:16px;
}

h2 {
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    font-weight:600;
    font-size:24px;
}

.game-code {
    text-transform: uppercase;
    color:#522875;
    padding:24px 80px 13px 80px;
    font-family: "Luckiest Guy", sans-serif;
    background-color:white;
    font-size:40px;
    margin:8px 0px 0px 0px;
    border-radius: 20px;
}

.players-container {
    width:836px;
    height:271px;
    display: flex;
    justify-content: space-evenly;
    align-items:flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin:16px 0px;
}


</style>
