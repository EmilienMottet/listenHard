<template>
  <div class="player_songs">
    <Aplayer
  :music="musics[0]"
  :list="musics"/>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  name: 'Player',
  components: {
    Aplayer
  },
  data () {
    return {
      musics: [
        {
          title: 'Test title',
          src: 'http://freesound.org/data/previews/316/316830_4939433-lq.mp3'
        },
        {
          title: 'CHOUBIDA',
          src: 'http://freesound.org/data/previews/363/363696_1391542-lq.mp3'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .player_songs{
    position: fixed;
    bottom: 0;
    /* height: 50px; */
    width: 100%;
    border-top: 1px solid lightgrey;
  }
</style>
