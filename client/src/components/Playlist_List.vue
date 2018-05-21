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
import PLObject from '@/components/playlist_object.vue'

export default {
  name: 'Playlist_List',
  data: function () {
    return {
      newTodoText: '',
      user_playlists: [
        {
          id: 1,
          title: 'Do the dishes',
          nb_songs: 32
        },
        {
          id: 2,
          title: 'Take out the trash',
          nb_songs: 1
        },
        {
          id: 3,
          title: 'Mow the lawn',
          nb_songs: 28
        }
      ]
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
