<template>
  <div class="playlist_detail">
    <div class="playlist_info">
      <div>
        <h2>My files</h2>
        <p>{{files.length}} files</p>
      </div>
      <button class="button is-success" @click="show_add">Add files</button>
    </div>
    <div class="song_list">
      <SongObject
        v-for="file in files"
        v-bind:song_name="file.title"
        v-bind:key="file.id"
      >
      </SongObject>
    </div>
  </div>
</template>

<script>
import SongObject from '@/components/Song_object.vue'
import AddSong from '@/components/modals/AddSong_modal.vue'
import SongService from '@/services/SongService'

export default {
  name: 'Files',
  data: function () {
    return {
      files: [
      ]
    }
  },
  mounted () {
    this.get_songs()
  },
  methods: {
    async get_songs () {
      console.log('get_songs')
      try {
        const response = await SongService.get_songs()
        this.files = response.data.songs
        console.log(response)
        this.$emit('close')
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
