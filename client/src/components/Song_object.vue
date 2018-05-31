<template>
  <div class="song_object">
    <img src="" alt="from_info">
    <div class="song_info">
      <p class="song_name">{{song_name}}</p>
      <p class="song_link">ID : {{song_ID}}</p>
      <p class="song_link">BIN ID : {{song_bin_ID}}</p>
    </div>
    <button class="delete is-large" @click="remove_song"></button>
  </div>
</template>

<script>
import PlaylistService from '@/services/PlaylistService'

export default {
  name: 'song_object',
  data () {
    return {
      error: null
    }
  },
  props: [
    'song_name',
    'song_ID',
    'song_bin_ID',
    'playlist_id'
  ],
  methods: {
    remove_song () {
      try {
        const response = PlaylistService.remove_song(this.playlist_id, this.song_ID)
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
        alert(this.error)
      }
    }
  }
}
</script>

<style scoped>
 .song_object{
  display: flex;
  align-items: center;
  width: auto;
  padding: 0.5em;
  border: 1px solid grey;
  margin: 0.5em;
  transition: 0.2s;
 }

 .song_object:hover{
  background: lightgrey;
 }

 .song_info{
  width: 100%;
  text-align: left;
  padding-left: 2em;
 }

 img{
  width: 50px;
  height: 50px;
  background: grey;
 }

 .song_name{
  font-weight: bold;
  font-size: 1em;
 }
 .song_link{
  color: grey;
  font-size: 0.8em;
 }
</style>
