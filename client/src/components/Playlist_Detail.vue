<template>
  <div class="playlist_detail">
    <div class="playlist_info">
      <div>
        <h2>{{playlist_name}}</h2>
        <p>{{playlist_songs.length}} songs</p>
      </div>
      <button class="button is-success" @click="show_add">Add song</button>
      <button class="button is-danger" @click="show_delete">Delete playlist</button>
    </div>
    <span>
      SONGS : {{playlist_songs}}
    </span>
    <div class="song_list">
      <SongObject
        v-for="song in playlist_songs"
        v-bind:song_name="song._id"
        v-bind:key="song._id"
      >
      </SongObject>
    </div>
  </div>
</template>

<script>
import SongObject from '@/components/Song_object.vue'
import AddSong from '@/components/modals/AddSong_modal.vue'
import Delete from '@/components/modals/DeletePlaylist_modal.vue'
import PlaylistService from '@/services/PlaylistService'

export default {
  name: 'Playlist_Detail',
  data: function () {
    return {
      id: 0,
      playlist_name: '',
      playlist_songs: [],
      playlist_object: null
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.get_playlist()
  },
  methods: {
    async get_playlist () {
      console.log('get_playlist')
      try {
        const response = await PlaylistService.get_playlist(this.id)
        this.playlist_name = response.data.playlist.name
        this.playlist_songs = response.data.playlist.songs
        this.playlist_object = response.data.playlist
        // console.log(response)
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
        console.log(error)
      }
    },
    show_add: function (event) {
      this.$modal.show(AddSong, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      })
    },
    show_delete: function (event) {
      this.$modal.show(Delete, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      })
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
</style>
