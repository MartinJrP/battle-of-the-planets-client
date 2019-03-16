<template>
    <div id="the-generated-teams-screen">
        <div class="generated-teams-container">

            <h1 class="mainTitle-small">Battle of the Planets</h1>

            <table>
                <tr>
                    <th>Round</th>
                    <th colspan="2">Team #1</th>
                    <th></th>
                    <th colspan="2">Team #2</th>
                </tr>

                <player-table-cell
                    v-for="round in rounds"
                    :key="round.num"
                    :round="round"
                    :players="players"
                />

            </table>

            <button 
            class="main-button start-first-round"
            @click="$emit('next-screen')">
                Start Game
            </button>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlayerTableCell from './PlayerTableCell.vue';
import { mapState } from 'vuex';

export default Vue.extend({
    name: 'TheGeneratedTeamsScreen',
    components: { PlayerTableCell },
    computed: {
        ...mapState(['players']),
        rounds: function () {
            return this.$store.state.rounds
        },
        baseUrl: function () {
            return process.env.BASE_URL
        },
        // path: function () {
        //     var path = `${this.baseUrl}img/planet-1.png`
        //     return path
        // }
    }
})
</script>

<style lang="scss">

.generated-teams-container {
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

.mainTitle-small {
    font-size:56px;
    margin-top:80px;
}

table { 
    text-align: center;
    border-collapse: collapse;
    width:837px;
    margin:16px 0px 0px 0px;
}

td, th {
    border-bottom: 1px solid #4F2770;
    vertical-align: middle;
}

th {
    font-family: "Poppins", sans-serif;
    font-size:20px;
    font-weight: 600;
    padding:8px 0px;
    vertical-align: middle;
}

.start-first-round {
    margin-top:32px;
}

</style>