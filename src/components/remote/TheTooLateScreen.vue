<template>
    <div id="the-too-late-screen">

        <h1>TOO SLOW!</h1>

        <p>Your opponent clicked first and is answering the question.</p>

        <h2>If they answer wrong</h2>

        <p>You'll get a chance to answer too! <br>Be prepared to redeem yourself.</p>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "TheTooLateScreen"
})
</script>

<style lang="scss">

    #the-too-late-screen {
        text-align: center;
    }

    #the-too-late-screen h1 {
        width:265px;
        font-size:48px;
        margin-top:64px;
    }

    #the-too-late-screen p {
        font-family: "Open Sans", sans-serif;
        font-size:16px;
        margin:16px auto 24px auto;
        width:288px;
    }

    #the-too-late-screen h2 {
        margin-top:144px;
        font-family: "Poppins", sans-serif;
        font-size:20px;
        font-weight:600;
        margin-bottom: 0;
    }

</style>
