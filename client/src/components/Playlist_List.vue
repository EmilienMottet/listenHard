<template>
  <div class="playlist_list">
    <PLObject
      v-for="playlist in user_playlists"
      v-bind:playlist_name="playlist.title"
      v-bind:nb_songs="playlist.nb_songs"
      v-bind:key="playlist.id"
    >
    </PLObject>
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
    async login () {
      console.log('Login : mail = ' + this.email + '; password = ' + this.password)
      try {
        const response = await PlaylistService.getPlaylist()
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
</style>
