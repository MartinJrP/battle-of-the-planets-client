<template>
    <div id="the-mobile-question-screen">
            <h1>YOU CLICKED FIRST!</h1>

            <p>Which do you think is the answer?</p>

            <div class="option"
            v-for="(option, index) in options"
            v-bind:key="index"> 
                <span>{{ option }}</span>
            </div>

    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "TheMobileQuestionScreen.vue",
    data: function() {
        return {
            options: ["1","2","3","4"]
        }
    }
    
})
</script>

<style lang="scss">

    #the-mobile-question-screen {
        text-align: center;
    }

    #the-mobile-question-screen h1 {
        width:265px;
        font-size:48px;
        margin-top:64px;
    }

    #the-mobile-question-screen p {
        font-family: "Open Sans", sans-serif;
        font-size:16px;
        margin:16px 0px 24px 0px;
    }

    .option span, 
    .answered-wrong span {
        font-family: "Luckiest Guy", sans-serif;
        font-size:32px;
    }

    .option {
        background-color:white;
        padding:16px 0px 8px 0px;
        width:288px;
        margin:0 auto 24px auto;
        border-radius: 12px;
        color:#522875;
    }

    .option:active {
        background-color:#522875;
        color:white;
    }

    .answered-wrong {
        opacity:0.5;
        background-color:#522875;
        color:white;
        padding:16px 0px 8px 0px;
        width:288px;
        margin:0 auto 24px auto;
        border-radius: 12px;
    }

</style>
