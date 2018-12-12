import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sessionId: '',
    players: [] as any[],
    rounds: [] as any[],
    currentRoundNum: 0,
    num: 0
  },
  getters: {
    teamOnePlayer: function (state, getters) {
      if (state.currentRoundNum === 0) return
      let player = state.players.find((player: any) => player.num === getters.currentRound.teamOnePlayerNum)

      return player
    },
    teamTwoPlayer: function (state, getters) {
        if (state.currentRoundNum === 0) return
        let player = state.players.find((player: any )=> player.num === getters.currentRound.teamTwoPlayerNum)

        return player
    },
    currentRound: function (state, getters) {
        if (state.currentRoundNum === 0) return
        return state.rounds.find((round: any) => round.num === state.currentRoundNum)
    }
  },
  mutations: {
      ['SOCKET_player-updated'] (state, player) {
          state.players.push(player)
      },
      setSessionId (state, id) {
        state.sessionId = id
      },
      setRounds (state, rounds) {
        state.rounds = rounds
      },
      setCurrentRoundNum (state, roundNum) {
        state.currentRoundNum = roundNum
      },
      setNum (state, num) {
        state.num = num
      }

  },
  actions: {
  }
})
