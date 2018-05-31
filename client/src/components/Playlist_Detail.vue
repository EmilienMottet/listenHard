<template>
  <div class="playlist_detail">
    <div class="playlist_info">
      <div>
        <h2>{{playlist_name}}</h2>
        <p>{{playlist_songs.length}} songs</p>
      </div>
      <button class="button is-success" @click="show_add">Add song</button>
      <button class="button is-danger" @click="show_delete">Delete playlist</button>
      <button class="button is-warning" @click="play_playlist"> Play this playlist</button>
    </div>
    <div class="song_list">
      <SongObject
        v-for="song in playlist_songs"
        :song_name="song.name"
        :song_ID="song._id"
        :song_bin_ID="song.fileAudioBin"
        :key="song._id"
        :playlist_id="id"
        :removable="true"
      >
      </SongObject>
    </div>
  </div>
</template>

<script>
import SongObject from '@/components/objects/Song_object.vue'
import AddSong from '@/components/modals/AddSong_modal.vue'
import Delete from '@/components/modals/DeletePlaylist_modal.vue'
import PlaylistService from '@/services/PlaylistService'
import SongService from '@/services/SongService'
import PlayerService from '@/services/PlayerService'

export default {
  name: 'Playlist_Detail',
  data: function () {
    return {
      id: 0,
      playlist_name: '',
      playlist_songs: [],
      playlist_songs_id: [],
      playlist_object: null,
      user_songs: []
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.get_playlist()
    // this.retrieve_songs()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'reload'
  },
  methods: {
    reload () {
      this.playlist_songs = []
      this.playlist_songs_id = []
      this.user_songs = []
      this.playlist_object = null
      this.get_playlist()
    },
    async get_playlist () {
      console.log('get_playlist')
      try {
        const response = await PlaylistService.get_playlist(this.id)
        this.playlist_name = response.data.playlist.name
        this.playlist_songs_id = response.data.playlist.songs
        this.playlist_object = response.data.playlist
        // console.log(response)
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
        console.log(error)
      }
      this.retrieve_songs()
    },
    async retrieve_songs () {
      console.log('retrieve_songs')
      try {
        const userSongs = await SongService.get_songs()
        this.user_songs = userSongs.data.songs
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
        console.log(error)
      }
      for (var i = 0; i < this.user_songs.length; i++) {
        for (var j = 0; j < this.playlist_songs_id.length; j++) {
          if (this.user_songs[i]._id === this.playlist_songs_id[j]._id) {
            this.playlist_songs.push(this.user_songs[i])
            break
          }
        }
      }
    },
    show_add: function (event) {
      this.$modal.show(AddSong, {}, {
        height: 'auto',
        scrollable: true
      })
    },
    show_delete: function (event) {
      this.$modal.show(Delete, {}, {
        height: 'auto'
      })
    },
    play_playlist () {
      PlayerService.play_playlist(this.$player, this.playlist_songs)
    }
  },
  components: {
    SongObject
  }
}
</script>

<style scoped>
  .playlist_list{
    display: flex;
  }
  .playlist_info{
    display: flex;
    align-items: center;
    margin: 2em;
  }
  .playlist_info h2{
    font-size: 2em;
    font-weight: bold;
  }
  .playlist_info p{
    color: grey;
  }
  .playlist_info button{
    margin-left: 1em;
  }
  @media only screen and (max-width: 600px) {
    .playlist_info {
      flex-direction: column;
    }
    .playlist_info button{
      margin-top: 0.5em;
    }
  }
</style>
