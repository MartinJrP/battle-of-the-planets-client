<template>
  <div id="app-display">

    <the-home-screen 
      v-if="state == 'welcome'"
      v-on:start-game = "startGame"/>

    <the-game-session
      v-if="state == 'session-started'"
      @session-started="setGameCode"
      v-on:generate-teams = "generateTeams"/>

    <the-generated-teams-screen 
      @next-screen="prepareNextRound"
      v-if="state == 'teams-generated'"/>

    <round-starting-screen
      v-if="state == 'round-starting'"/>

    <round-starting-countdown-screen
      @countdown-ended="beingRound"
      v-if="state == 'begin-countdown'"/>

<<<<<<< HEAD
=======
    <the-question-screen
      v-if="state == 'question-started'"/>



>>>>>>> Added more styling and deleted the countdown page on the remote
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheHomeScreen from './components/display/TheHomeScreen.vue';
import TheGameSession from './components/display/TheGameSession.vue';
import TheGeneratedTeamsScreen from './components/display/TheGeneratedTeamsScreen.vue';
import RoundStartingScreen from './components/display/RoundStartingScreen.vue';
import RoundStartingCountdownScreen from './components/display/RoundStartingCountdownScreen.vue';
import TheQuestionScreen from './components/display/TheQuestionScreen.vue';

import { mapState, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'app-display',
  components: { TheHomeScreen, TheGameSession, TheGeneratedTeamsScreen, RoundStartingScreen, RoundStartingCountdownScreen, TheQuestionScreen },
  sockets: {
    ['begin-round']: function() {
      this.state = 'begin-countdown'
    }
  },
  data: function () {
    return {
      // change back to 'welcome'
      state: 'welcome',
    }
  },
  computed: {
    ...mapState(['sessionId'])
  },
  methods: {
    startGame: function() {
      this.state = 'session-started';
    },
    setGameCode: function (code: string) {
      this.$store.commit('setSessionId', code)
    },
    generateTeams: function(){
      this.state = 'teams-generated';
      this.$socket.emit('generate-teams', this.sessionId, (rounds: any) => {
        this.$store.commit('setRounds', rounds)
      })
    },
    prepareNextRound: function () {
      this.$socket.emit('prepare-next-round', this.sessionId, (roundNum: number) => {
        this.$store.commit('setCurrentRoundNum', roundNum)
        this.state = 'round-starting'
      })
    },
    beingRound: function () {
      //this.state = ''
    }
  }
});

</script>

<style lang="scss">

@import './assets/scss/styles';

</style>
