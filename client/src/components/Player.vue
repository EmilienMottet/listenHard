<template>
  <div class="player_songs">
    <div id="aplayer"></div>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import PlaylistService from '@/services/PlaylistService'
// import store from '@/store/store'
// import APlayer from 'aplayer'

export default {
  name: 'Player',
  data () {
    return {
      musics: [
        { title: 'Nothing', src: '#' }
      ],
      error: null
    }
  },
  methods: {
    async load_musics () {
      try {
        this.musics = []
        console.log('TEST')
        var plSongs = await PlaylistService.get_playlist('5b05e3ed8ec1f50a20f07e51').data.playlist.songs

        console.log('plsongs : ')
        console.log(plSongs)

        var userSongs = await SongService.get_songs().data.songs
        console.log('userSongs : ')
        console.log(userSongs)
        for (var i = 0; i < userSongs.length; i++) {
          for (var j = 0; j < plSongs.length; j++) {
            if (plSongs[j]._id === userSongs[i]._id) {
              this.musics.push({
                name: userSongs[i].name,
                id: userSongs[i]._id
              })
              break
            }
          }
        }
        alert('CHABADA')
        console.log(this.musics)
      } catch (error) {
        console.log('ERROR')
        this.error = error.response.data.error
        console.log(this.error)
        alert(this.error)
      }
    }
  },
  mounted () {
    if (this.$player.state.player === null) {
      // this.$store.dispatch('setPlayer', {
      //   container: document.getElementById('aplayer'),
      //   audio: [{
      //     name: 'BITOCUL',
      //     url: 'http://freesound.org/data/previews/316/316830_4939433-lq.mp3'
      //   }]
      // })
      // this.$store.dispatch('setPlayer')
      this.$player.dispatch('setPlayer')
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
