<template>
  <div class="playlist_object" @click="open_playlist">
    <img src="" alt="playlist_image">
    <h2 class="pl_name">{{playlist_name}}</h2>
    <h3 class="nb_songs">{{nb_songs}} songs</h3>
  </div>
</template>

<script>
export default {
  name: 'playlist_object',
  props: [
    'playlist_name',
    'nb_songs',
    'id'
  ],
  methods: {
    open_playlist () {
      console.log('Opening playlist : ' + this.id)
      this.$router.push({
        path: 'detail/' + this.id
      })
    }
  }
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

 .pl_name{
  font-weight: bold;
 }
 .nb_songs{
  color: grey;
  font-size: 0.8em;
 }
</style>
