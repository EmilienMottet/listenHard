<template>
  <div class="addsong">
    <div class="addsong_header">
      <h2>Add a song to the playlist</h2>
    </div>

    <div class="add_choice">
      <button id="via_link_but" class="button" @click="set_link_fields">Link</button>
      <button id="via_file_but" class="button" @click="set_file_fields">File</button>
    </div>

    <form name="addsong_form" v-on:submit.prevent="add_song">
      <fieldset>
        <div id="via_link_fields" v-if="fields_activated == 'link'">
          <div class="field">
            <label class="label" for="link">Link</label>
            <div class="control">
              <input class="input" type="text" name="link" v-model="link" placeholder="Enter the link to the song" required>
            </div>
          </div>
          <div class="field">
            <label class="label" for="name">Name</label>
            <div class="control">
              <input class="input" type="text" name="name" v-model="name" placeholder="Enter the name of the song" required>
            </div>
          </div>
        </div>

        <div id="via_file_fields" v-show="fields_activated == 'file'">
          <SongAddObject
            v-for="song in user_songs"
            v-bind:song_name="song.name"
            v-bind:song_ID="song._id"
            v-bind:key="song._id"
            v-model="songs_id"
            >
          </SongAddObject>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Add</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="$emit('close')" type="button">Cancel</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import PlaylistService from '@/services/PlaylistService'
import SongAddObject from '@/components/objects/Song_add_object'

export default {
  name: 'AddSong_modal',
  data () {
    return {
      name: '',
      link: '',
      songs_id: [],
      user_songs: [],
      error: null,
      fields_activated: '',
      playlist_id: null
    }
  },
  methods: {
    async add_song () {
      console.log('add_song: mode = ' + this.fields_activated + '; playlist : ' + this.playlist_id)
      try {
        var response = ''
        if (this.fields_activated === 'file') {
          response = await PlaylistService.add_song(this.playlist_id, this.songs_id)
        } else {
          if (this.name === '' || this.link === '') {
            alert('Name and link cannot be empty')
            return
          } else {
            let newid = await SongService.add_youtube_song({
              name: this.name,
              youtubeUrl: this.link})
            console.log(newid)
            if (newid.status === 201) {
              response = await PlaylistService.add_song(this.playlist_id, [newid.data.song._id])
            }
          }
        }
        response = 'Song added'
        console.log(response)
        this.$router.push({
          name: 'home'
        })
        this.$router.push({
          path: 'detail/' + this.playlist_id
        })
        this.$emit('close')
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
      }
    },
    async get_songs () {
      console.log('get_songs')
      try {
        const response = await SongService.get_songs()
        this.user_songs = response.data.songs
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
      }
    },
    set_link_fields (event) {
      this.fields_activated = 'link'
      document.getElementById('via_link_but').classList.add('is-primary')
      document.getElementById('via_file_but').classList.remove('is-primary')
      return 0
    },
    set_file_fields (event) {
      this.fields_activated = 'file'
      document.getElementById('via_file_but').classList.add('is-primary')
      document.getElementById('via_link_but').classList.remove('is-primary')
      return 0
    }
  },
  components: {
    SongAddObject
  },
  mounted () {
    this.set_link_fields()
    this.get_songs()
    this.playlist_id = this.$route.params.id
  }
}
</script>

<style scoped>
  fieldset{
    border: none;
    padding: 1em;
  }
  .addsong_header{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
  .add_choice{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
  }
</style>
