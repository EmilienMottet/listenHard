<template>
<div>
  <div class="playlist_info">
    <div>
      <h2>Your playlists</h2>
    </div>
    <button class="button is-success" @click="show_add">Create Playlist</button>
  </div>
  <div class="playlist_list">
    <PLObject
      v-for="playlist in user_playlists"
      v-bind:playlist_name="playlist.title"
      v-bind:nb_songs="playlist.nb_songs"
      v-bind:key="playlist.id"
    >
    </PLObject>
  </div>
</div>
</template>

<script>
import PLObject from '@/components/Playlist_object.vue'
import PlaylistService from '@/services/PlaylistService'

export default {
  name: 'Playlist_List',
  data: function () {
    return {
      newTodoText: '',
      user_playlists: []
    }
  },
  methods: {
    async get_playlists () {
      console.log('get_playlists')
      try {
        const response = await PlaylistService.get_playlists()
        this.user_playlists = response
        console.log(response)
        this.$emit('close')
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
        console.log(error)
      }
    }
  },
  components: {
    PLObject
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
