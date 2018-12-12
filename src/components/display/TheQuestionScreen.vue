<template>
    <div id="the-question-screen">
        <h1>Question #{{ questionNumber }}</h1>

        <vue-typed-js :strings="[question.question]" @onComplete="beginAcceptingQuestions">
            <p class="question typing"></p>
        </vue-typed-js>

        <div class="options-container" v-if="shouldShowOptions">
            <div class="option"
                v-for="(option, index) in question.options"
                v-bind:key="index">
                <p><span class="white-letter"> {{ index | asLetter }}.</span> {{ option }} </p>
            </div>

        </div>

    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex';

export default Vue.extend({
    name: "TheQuestionScreen",
    data: function(){
        return {
            shouldShowOptions: false
        }
    },
    computed: mapState({
        question: state => (state as any).currentQuestion,
        questionNumber: state => (state as any).currentRoundNum
    }),
    methods: {
        beginAcceptingQuestions: function () {
            this.$socket.emit('begin-accepting-responses', this.$store.state.sessionId)
            this.shouldShowOptions = true
        }
    },
    filters: {
        asLetter: function (value: number) {
            switch (value) {
            case 0: return 'A'
            case 1: return 'B'
            case 2: return 'C'
            case 3: return 'D'
            default: return value
            }
        }
    }
    
})

</script>

<style lang="scss">

    #the-question-screen {
        text-align: center;
    }

    #the-question-screen h1 {
        margin-top: 80px;
    }

    .question {
        font-size:28px;
        width:838px;
        margin:12px auto 0px auto;
    }

    #the-question-screen p {
        font-family: "Poppins", sans-serif;
        font-weight:600;
    }

    .options-container {
        width:838px;
        margin:32px auto 0px auto;
    }

    .option {
        background-color:white;
        width:403px;
        padding:24px 0px;
        display:inline-block;
        border-radius:16px;
    }

    .option:nth-of-type(1n), 
    .answer:nth-of-type(1n),
    .answered-wrong:nth-of-type(1n) {
        margin-right:16px;
    }

    .option:nth-of-type(1n + 1),
    .answer:nth-of-type(1n + 1),
    .answered-wrong:nth-of-type(1n + 1) {
        margin-bottom:24px;
    }

    .option p {
        color:#222222;
        font-size:20px;
        vertical-align: middle;
    }

    .option span {
        font-family: "Luckiest Guy", sans-serif;
        font-size:32px;
        vertical-align: middle;
        color:#522875;
        margin-right:16px;
    }

    .answer span {
        font-family: "Luckiest Guy", sans-serif;
        font-size:32px;
        vertical-align: middle;
        color:white;
        margin-right:16px;
    }

    .answered-wrong span {
        font-family: "Luckiest Guy", sans-serif;
        font-size:32px;
        vertical-align: middle;
        color:white;
        margin-right:16px;
    }

    .answer {
        background-color:#522875;
        width:403px;
        padding:24px 0px;
        display:inline-block;
        border-radius:16px;
    }

    .answer p, 
    .answered-wrong p {
        color:white;
        font-size:20px;
        vertical-align: middle;
    }

    .answered-wrong {
        background-color:#522875;
        width:403px;
        padding:24px 0px;
        display:inline-block;
        border-radius:16px;
        opacity:0.5;
    }



</style>
