<template>
    <div id="the-lost-round-screen">
        <h1><span>SORRY,</span><br> YOU LOST!</h1>

        <p class="text">But the war is not over! Cheer on your teammates as they continue to play!</p>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "TheLostRoundScreen"
    
})
</script>

<style lang="scss">

    #the-lost-round-screen {
        text-align: center;
    }

    #the-lost-round-screen h1 {
        font-size:48px;
        color:#F54359;
        margin-top:64px;
        width:265px;
    }

    #the-lost-round-screen span {
        color:white;
    }

    #the-lost-round-screen .text {
        font-family: "Open Sans", sans-serif;
        font-size:16px;
        margin:16px auto 48px auto;
        width:288px;
    }

</style>
