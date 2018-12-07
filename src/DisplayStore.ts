import Vue from 'vue';
export const DisplayStore = new Vue({
    data: function () {
        return {
            //state: 'round-starting',
            sessionId: '',
            players: [] as any,
            rounds: [] as any,
            currentRoundNum: undefined as number | undefined
        }
    },
    computed: {
        teamOnePlayer: function () {
            if (!this.currentRoundNum) return
            let player = this.players.find((player: any) => player.num === this.currentRound.teamOnePlayerNum)

            return player
        },
        teamTwoPlayer: function () {
            if (!this.currentRoundNum) return
            let player = this.players.find((player: any )=> player.num === this.currentRound.teamTwoPlayerNum)

            return player
        },
        currentRound: function () {
            if (!this.currentRoundNum) return
            return this.rounds.find((round: any) => round.num === this.currentRoundNum)
        }
    }
})