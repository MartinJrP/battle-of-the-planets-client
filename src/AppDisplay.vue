<template>
  <div id="app-display">

    <the-home-screen 
      v-if="state == 'welcome'"
      v-on:start-game = "startGame"/>

    <the-game-session
      v-if="state == 'session-started'"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheHomeScreen from './components/TheHomeScreen.vue';
import TheGameSession from './components/TheGameSession.vue';

export default Vue.extend({
  name: 'app-display',
  components: { TheHomeScreen, TheGameSession },
  data: function () {
    return {
      state: 'welcome'
    }
  },
  methods: {
    startGame: function() {
      this.state = 'session-started';
    }
  }
});

</script>

<style lang="scss">

@import './assets/scss/styles';

</style>
