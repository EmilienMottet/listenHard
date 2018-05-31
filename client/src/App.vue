<template>
  <div id="app">
    <Menu/>
    <router-view v-bind:class="{ 'show_player' : $store.state.isUserLoggedIn }" />
    <Player  v-if="$store.state.isUserLoggedIn"/>
    <modals-container/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Player
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.show_player{
  margin-bottom: 80px;
}
</style>
