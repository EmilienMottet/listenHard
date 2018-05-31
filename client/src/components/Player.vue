<template>
  <div class="player_songs">
    <div id="aplayer"></div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  mounted () {
    if (this.$player.state.player === null) {
      this.$player.dispatch('setPlayer')
    }
  }
}
</script>

<style scoped>
  .player_songs{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgrey;
    background: white;
  }
</style>
