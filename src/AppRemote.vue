<template>
  <div id="app">
    <the-mobile-home-screen
      v-if="state == 'welcome'"
      v-on:code-accepted="joinGame"></the-mobile-home-screen>

    <the-enter-name-screen
      v-on:update-username="updateUsername"
      v-on:connection-confirmed="connectionConfirmed"
      v-if="state == 'joined-game'"></the-enter-name-screen>

    <the-connection-confirmed-screen
      v-bind:player="player"
      v-if="state == 'connection-confirmed'"></the-connection-confirmed-screen>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheMobileHomeScreen from './components/remote/TheMobileHomeScreen.vue';
import TheEnterNameScreen from './components/remote/TheEnterNameScreen.vue';
import TheConnectionConfirmedScreen from './components/remote/TheConnectionConfirmedScreen.vue';

export default Vue.extend({
  name: 'AppRemote',
  components: { TheMobileHomeScreen, TheEnterNameScreen, TheConnectionConfirmedScreen },
  data: function () {
    return {
      state: 'welcome',
      sessionId: '',

      // The current player
      player: {} as any
    }
  },
  methods: {
    joinGame: function(sessionId: string) {
      const vm = this as any

      vm.$socket.emit('join-session', sessionId, function (player: any) {
          if (player.error) {
              alert(player.error)
          } else {
              vm.state = 'joined-game';
              vm.player = player
              vm.sessionId = sessionId
              alert('Joined Game. You\'re: ' + player.username)
          }
      })
    },
    updateUsername: function (username: string) {
      const data = {
         newUsername: username, 
         num: this.player.num, 
         sessionId: this.sessionId
      }
      this.$socket.emit('update-username', data)
      this.player.username = username
    },
    connectionConfirmed: function(){
      this.state = 'connection-confirmed';
    }
  }
});
</script>

<style lang="scss">

@import './assets/scss/styles';

@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');

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
