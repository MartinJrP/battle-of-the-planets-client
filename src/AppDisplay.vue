<template>
  <div id="app-display">

    <the-home-screen 
      v-if="state == 'welcome'"
      v-on:start-game = "startGame"/>

    <the-game-session
      v-if="state == 'session-started'"
      v-on:generate-teams = "generateTeams"/>

    <the-generated-teams-screen 
      v-if="state == 'teams-generated'"/>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheHomeScreen from './components/display/TheHomeScreen.vue';
import TheGameSession from './components/display/TheGameSession.vue';
import TheGeneratedTeamsScreen from './components/display/TheGeneratedTeamsScreen.vue';

export default Vue.extend({
  name: 'app-display',
  components: { TheHomeScreen, TheGameSession, TheGeneratedTeamsScreen },
  data: function () {
    return {
      state: 'welcome'
    }
  },
  methods: {
    startGame: function() {
      this.state = 'session-started';
    },
    generateTeams: function(){
      this.state = 'teams-generated';
    }
  }
});

</script>

<style lang="scss">

@import './assets/scss/styles';

</style>
