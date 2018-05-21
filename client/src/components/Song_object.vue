<template>
  <div class="song_object">
    <img src="" alt="from_info">
    <div class="song_info">
      <p class="song_name">{{song_name}}</p>
      <a class="song_link" :href="song_link" target="_blank">{{song_link}}</a>
    </div>
    <button class="del_song">X</button>
  </div>
</template>

<script>
export default {
  name: 'song_object',
  props: [
    'song_name',
    'song_link'
  ]
}
</script>

<style scoped>
 .song_object{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
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

 p{
  margin: 0;
 }

 .song_name{
  font-weight: bold;
  font-size: 1.5em;
 }
 .song_link{
  color: grey;
 }
</style>
