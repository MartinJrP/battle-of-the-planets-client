<template>
  <div id="app-display">

    <the-home-screen 
      v-if="state == 'welcome'"
      v-on:start-game = "startGame"/>

    <the-game-session
      v-if="state == 'session-started'"
      @session-started="setGameCode"
      @player-added="addPlayer"
      :players="players"
      v-on:generate-teams = "generateTeams"/>

    <the-generated-teams-screen 
      :rounds="rounds"
      :players="players"
      @next-screen="prepareNextRound"
      v-if="state == 'teams-generated'"/>

    <round-starting-screen
      v-if="state == 'round-starting'"/>

    <round-starting-countdown-screen
      v-if="state == 'begin-countdown'"/>



  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheHomeScreen from './components/display/TheHomeScreen.vue';
import TheGameSession from './components/display/TheGameSession.vue';
import TheGeneratedTeamsScreen from './components/display/TheGeneratedTeamsScreen.vue';
import RoundStartingScreen from './components/display/RoundStartingScreen.vue';
import RoundStartingCountdownScreen from './components/display/RoundStartingCountdownScreen.vue';

import { DisplayStore } from './DisplayStore'

export default Vue.extend({
  name: 'app-display',
  components: { TheHomeScreen, TheGameSession, TheGeneratedTeamsScreen, RoundStartingScreen, RoundStartingCountdownScreen },
  data: function () {
    return {
      // change back to 'welcome'
      state: 'welcome',
      sessionId: '',
      players: [] as any,
      rounds: [] as any
    }
  },
  methods: {
    startGame: function() {
      this.state = 'session-started';
    },
    setGameCode: function (code: string) {
      DisplayStore.sessionId = code
      this.sessionId = code
    },
    addPlayer: function (player: any) {
      DisplayStore.players.push(player)
      this.players.push(player)
    },
    generateTeams: function(){
      const vm = this
      this.state = 'teams-generated';
      this.$socket.emit('generate-teams', this.sessionId, (rounds: any) => {
        this.rounds = rounds
        DisplayStore.rounds = rounds
      })
    },
    prepareNextRound: function () {
        this.state = 'round-starting'
        this.$socket.emit('prepare-next-round', DisplayStore.sessionId, (roundNum: number) => {
            DisplayStore.currentRoundNum = roundNum
        })
    }
  }
});

</script>

<style lang="scss">

@import './assets/scss/styles';

</style>
