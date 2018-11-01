<template>
  <div id="app">

    <div class="container">

      <h1>Battle<br>of the<br>Planets</h1>

      <form>
        
        <input class="text-input" placeholder="Game Code">

        <button class="mobile-main-button">Continue</button>

      </form>

    </div>
    
    

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppRemote'
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
  margin:50px auto 0px auto;
}

form button {
  margin-top:50px;
}

</style>
