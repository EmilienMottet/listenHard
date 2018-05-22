<template>
  <div class="playlist_detail">
    <div class="playlist_info">
      <div>
        <h2>{{playlist_name}}</h2>
        <p>{{nb_songs}} songs</p>
      </div>
      <button class="button is-success" @click="show_add">Add song</button>
      <button class="button is-danger" @click="show_delete">Delete playlist</button>
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
import SongObject from '@/components/Song_object.vue'
import AddSong from '@/components/AddSong_modal.vue'
import Delete from '@/components/DeletePlaylist_modal.vue'

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
  methods: {
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
