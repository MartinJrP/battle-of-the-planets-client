import Vue from 'vue';
export const RemoteStore = new Vue({
  data: {
    sessionId: '',
    currentPlayer: undefined as any,
    players: [] as any[],

    // NOTE: These rounds only relate to the rounds the current user might be involved in.
    rounds: [] as any[]
  },
  computed: {
    teamNumber: function () {
      if (!this.currentPlayer) return

      return this.currentPlayer.num === this.rounds[0].teamOnePlayerNum ? 1 : 2
    },
    opponentOne: function () {
      return this.teamNumber === 2 ?
        this.players.find(player => player.num === this.rounds[0].teamOnePlayerNum) :
        this.players.find(player => player.num === this.rounds[0].teamTwoPlayerNum)
    }, 
    opponentTwo: function () {
      if (!this.rounds[1]) return

      return this.teamNumber === 2 ?
        this.players.find(player => player.num === this.rounds[1].teamOnePlayerNum) :
        this.players.find(player => player.num === this.rounds[1].teamTwoPlayerNum)
    },
  }
});