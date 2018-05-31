<template>
  <div id="app">
    <Menu/>
    <router-view/>
    <Footer/>
    <Player/>
    <modals-container/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
    Player
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  //  margin-top: 60px;
  margin-bottom: 80px;
}
</style>
