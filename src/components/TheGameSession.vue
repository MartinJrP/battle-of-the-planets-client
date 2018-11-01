<template>
    <div id="the-game-session">
        <div class="game-code-container">

            <h1>Battle of the Planets</h1>

            <h2>Game Code</h2>

            <p class="game-code">{{ code }}</p>

            <div class="players-container">
                <div class="player-1" 
                v-if="playerNames[0]">
                    <img src="../assets/img/Saturn.svg" class="saturn-avatar">
                    
                    <p class="player-name">{{ playerNames[0] }}</p>
                </div>
                <div class="player-2"
                v-if="playerNames[1]">
                    <img src="../assets/img/Sun.svg" class="sun-avatar">
                    
                    <p class="player-name">{{ playerNames[1] }}</p>
                </div>
                <div class="player-3"
                v-if="playerNames[2]">
                    <img src="../assets/img/Asteroid.svg" class="asteroid-avatar">
                    
                    <p class="player-name">{{ playerNames[2] }}</p>
                </div>
                <div class="player-4"
                v-if="playerNames[3]">
                    <img src="../assets/img/Mercury.svg" class="mercury-avatar">
                    
                    <p class="player-name">{{ playerNames[3] }}</p>
                </div>
                <div class="player-5"
                v-if="playerNames[4]">
                    <img src="../assets/img/Venus.svg" class="venus-avatar">
                    
                    <p class="player-name">{{ playerNames[4] }}</p>
                </div>
                <div class="player-6"
                v-if="playerNames[5]">
                    <img src="../assets/img/Pluto.svg" class="pluto-avatar">
                    
                    <p class="player-name">{{ playerNames[5] }}</p>
                </div>

                <div class="player-7"
                v-if="playerNames[6]">
                    <img src="../assets/img/Uranus.svg" class="uranus-avatar">
                    
                    <p class="player-name">{{ playerNames[6] }}</p>
                </div>
                <div class="player-8"
                v-if="playerNames[7]">
                    <img src="../assets/img/Neptune.svg" class="neptune-avatar">
                    
                    <p class="player-name">{{ playerNames[7] }}</p>
                </div>
                <div class="player-9"
                v-if="playerNames[8]">
                    <img src="../assets/img/Jupiter.svg" class="jupiter-avatar">
                    
                    <p class="player-name">{{ playerNames[8] }}</p>
                </div>
                <div class="player-10"
                v-if="playerNames[9]">
                    <img src="../assets/img/Earth.svg" class="earth-avatar">
                    
                    <p class="player-name">{{ playerNames[9] }}</p>
                </div>
                <div class="player-11"
                v-if="playerNames[10]">
                    <img src="../assets/img/Mars.svg" class="mars-avatar">
                    
                    <p class="player-name">{{ playerNames[10] }}</p>
                </div>
                <div class="player-12"
                v-if="playerNames[11]">
                    <img src="../assets/img/Moon.svg" class="moon-avatar">
                    
                    <p class="player-name">{{ playerNames[11] }}</p>
                </div>
            </div>

            <button class="main-button">Generate Teams</button>


        </div>
    </div>
    
</template>

<script>
export default {
    name: 'TheGameSession',
    sockets: {
        playerAdded: function(playerName){
            this.playerNames.push(playerName);
        }
    },
    data: function () {
        return {
            code: '',
            playerNames = []
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
    width:990px;
    height:253px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin:48px 0px;
}

.player-1,
.player-2,
.player-3,
.player-4,
.player-5,
.player-6,
.player-7,
.player-8,
.player-9,
.player-10,
.player-11,
.player-12 {
    display:inline-block;
    flex:1;
    width:16.67%;
    padding:0px 30px;
    margin:0 auto;
    text-align: center;
}

.saturn-avatar,
.uranus-avatar {
    width:107px;
    height:66px;
    margin-bottom:26px;
}

.sun-avatar {
    width:86px;
    height:86px;
    margin-bottom:6px;
}

.asteroid-avatar {
    width:69px;
    height:72px;
    margin-bottom:20px;
}

.mercury-avatar,
.venus-avatar,
.pluto-avatar,
.neptune-avatar,
.jupiter-avatar,
.earth-avatar,
.mars-avatar,
.moon-avatar {
    width: 67px;
    height:67px;
    margin-bottom:25px;
}


.player-name {
    font-size:17px;
    font-weight:700;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    margin-top:0;
}


</style>
