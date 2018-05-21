<template>
  <div class="playlist_object">
    <img src="" alt="playlist_image">
    <p class="pl_name">{{playlist_name}}</p>
    <p class="nb_songs">{{nb_songs}} songs</p>
  </div>
</template>

<script>
export default {
  name: 'playlist_object',
  props: [
    'playlist_name',
    'nb_songs'
  ]
}
</script>

<style scoped>
 .playlist_object{
  float: left;
  width: 200px;
  padding: 1em;
  border: 1px solid grey;
  margin: 0.5em;
  transition: 0.2s;
 }

 .playlist_object:hover{
  background: lightgrey;
 }

 img{
  width: 100px;
  height: 100px;
  background: grey;
 }

 p{
  margin: 0;
 }

 .pl_name{
  font-weight: bold;
  font-size: 1.5em;
 }
 .nb_songs{
  color: grey;
 }
</style>
