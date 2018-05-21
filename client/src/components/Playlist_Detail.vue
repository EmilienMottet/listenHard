<template>
  <div class="playlist_detail">
    <div class="playlist_info">
      <h2>{{playlist_name}}</h2>
      <p>{{nb_songs}} songs</p>
      <button class="add_song">Add song</button>
      <button class="del_playlist">Delete playlist</button>
    </div>
    <div class="song_list">
      <SongObject
        v-for="song in playlist_songs"
        v-bind:song_name="song.title"
        v-bind:song_link="song.link"
        v-bind:key="song.id"
      >
      </SongObject>
    </div>
  </div>
</template>

<script>
import SongObject from '@/components/song_object.vue'

export default {
  name: 'Playlist_Detail',
  data: function () {
    return {
      playlist_name: 'Amaury MegaMixtape Volume 2',
      nb_songs: 3,
      playlist_songs: [
        {
          id: 1,
          title: 'Do the dishes',
          link: 'http://www.youtube.com/'
        },
        {
          id: 2,
          title: 'Take out the trash',
          link: 'http://www.youtube.com/'
        },
        {
          id: 3,
          title: 'Mow the lawn',
          link: 'http://www.youtube.com/'
        }
      ]
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
</style>
