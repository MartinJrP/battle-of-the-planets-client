<template>
  <div id="app">

    <div class="lost-connection-indicator" v-if="isDisconnected">
      <p>Disconnected</p>
    </div>

    <the-mobile-home-screen
      v-if="state == 'welcome'"
      v-on:code-accepted="joinGame"/>

    <the-enter-name-screen
      v-on:update-username="updateUsername"
      v-on:connection-confirmed="connectionConfirmed"
      v-if="state == 'joined-game'"/>

    <the-connection-confirmed-screen
      v-bind:player="player"
      v-if="state == 'connection-confirmed'"/>

    <the-player-round-info-screen
      v-if="state == 'teams-generated'"/>

    <the-ready-confirmation-screen
      v-bind:player="player"
      v-if="state == 'ready-prompt'"/>

    <the-press-button-screen
      v-bind:player="player"
      v-if="state == 'round-starting'"/>

    <the-mobile-question-screen
      :incorrectAnswer="incorrectAnswer"
      v-if="state == 'answering-question'"/>

    <the-too-late-screen
      v-if="state == 'late-click'"/>

    <the-lost-round-screen
      v-bind:player="player"
      v-if="state == 'player-lost'"/>

    <the-won-round-screen
      v-bind:player="player"
      v-if="state == 'player-won'"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// Home Screen - Enter Code
import TheMobileHomeScreen from './components/remote/TheMobileHomeScreen.vue';

// Enter Name
import TheEnterNameScreen from './components/remote/TheEnterNameScreen.vue';

// Confirm to user they are connected
import TheConnectionConfirmedScreen from './components/remote/TheConnectionConfirmedScreen.vue';

// Display team, round, and opponent info
import ThePlayerRoundInfoScreen from './components/remote/ThePlayerRoundInfoScreen.vue';

// Prompt user to let us know they're ready to play
import TheReadyConfirmationScreen from './components/remote/TheReadyConfirmationScreen.vue';

// Press button screen appears with disabled button until whole question and answers appear on display
import ThePressButtonScreen from './components/remote/ThePressButtonScreen.vue';

// This question screen appears to whoever clicks the button first or if the first person answers incorrectly, to their opponent
import TheMobileQuestionScreen from './components/remote/TheMobileQuestionScreen.vue';

// This screen appears for the user when they are too late to press the button and their opponent is answering
import TheTooLateScreen from './components/remote/TheTooLateScreen.vue';

// This screen shows when a user loses the round
import TheLostRoundScreen from './components/remote/TheLostRoundScreen.vue';
import TheWonRoundScreen from './components/remote/TheWonRoundScreen.vue';

import { RemoteStore } from './RemoteStore'

export default Vue.extend({
  name: 'AppRemote',
  components: { TheMobileHomeScreen, TheEnterNameScreen, TheConnectionConfirmedScreen, ThePlayerRoundInfoScreen, TheReadyConfirmationScreen, ThePressButtonScreen, TheMobileQuestionScreen, TheTooLateScreen, TheLostRoundScreen, TheWonRoundScreen },
  sockets: {
    ['connect']: function () {
      this.isDisconnected = false
    },
    ['disconnect']: function () {
      this.isDisconnected = true
    },
    ['teams-generated']: function(res) {
        RemoteStore.rounds.push(res.round)
        this.rounds.push(res.round)

        RemoteStore.players = res.players

        this.state = 'teams-generated'
    },
    ['prepare-to-play']: function () {
      this.state = 'ready-prompt'
    },
    ['begin-round']: function () {
      this.state = 'round-starting'
    },
    ['player-can-respond']: function (teamNum) {
      if (RemoteStore.teamNumber === teamNum) {
        this.state = 'answering-question'
      } else {
        this.state = 'late-click'
      }
    },
    ['can-steal']: function (incorrect) {
      if (incorrect.team == RemoteStore.teamNumber) {
        this.state = 'player-lost'
      } else {
        this.incorrectAnswer = incorrect.answer
        this.state = 'answering-question'
      }
    },
    ['round-end']: function (winner) {
      if (winner == RemoteStore.teamNumber) {
        this.state = 'player-won'
      } else {
        this.state = 'player-lost'
      }
    }
  },
  data: function () {
    return {
      // change back to 'welcome'
      state: 'welcome',
      sessionId: '',
      isDisconnected: false,
      incorrectAnswer: null as any,

      // The current player
      player: {} as any,
      rounds: [] as any
    }
  },
  methods: {
    joinGame: function(sessionId: string) {
      const vm = this

      vm.$socket.emit('join-session', sessionId, function (player: any) {
          if (player.error) {
              alert(player.error)
          } else {
              vm.state = 'joined-game';
              vm.player = player
              RemoteStore.$data.currentPlayer = player
              RemoteStore.sessionId = sessionId
              vm.sessionId = sessionId
              //alert('Joined Game. You\'re: ' + player.username)
          }
      })
    },
    updateUsername: function (username: any) {
      const data = {
         newUsername: username, 
         num: this.player.num, 
         sessionId: this.sessionId
      }
      this.$socket.emit('update-username', data)
      this.player.username = username
      RemoteStore.$data.currentPlayer.username = username
    },
    connectionConfirmed: function(){
      this.state = 'connection-confirmed';
    }
  }
})
</script>

<style lang="scss">

@import './assets/scss/styles';

@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');

body {
  font-family:"Open Sans", sans-serif;
}

.lost-connection-indicator {
  position: relative;
  margin:0 auto;
  text-align: center;
  width:100%;
  padding:8px 0px;
  background-color:#F54359;
  p {
    font-size:16px;
  }
}

html, body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  background-image: url(assets/img/stars-background.svg), linear-gradient(#21132C, #170F1F);
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  height:100%;
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

.container h1 {
  font-size:48px;
  margin:64px 0px 0px 0px;
}

.container p {
    font-family:"Open Sans", sans-serif;
    font-size:16px;
    line-height:24px;
    width:288px;
    margin: 0 auto;
    text-align: center;
    margin:8px 0px 0px 0px;
}

form {
  display:flex;
  align-items: center;
  flex-direction: column;
}

.text-input {
  border: 5px solid #FFFFFF;
  border-radius: 16px;
  background-color:transparent;
  font-family: "Luckiest Guy", sans-serif;
  font-size:32px;
  text-align: center;
  color:white;
  padding:16px 0px 5px 0px;
  width:272px;
  margin:40px auto 0px auto;
}

form button {
  margin-top:40px;
}

</style>
