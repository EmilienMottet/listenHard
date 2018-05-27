<template>
  <div class="login">
    <div class="login_header">
      <h2>Add a song to the playlist</h2>
    </div>

    <!-- <form name="login_form"> -->
      <fieldset>
        <div class="field">
          <label class="label" for="name">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Enter the name of the song">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="add_song">Add</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="$emit('close')">Cancel</button>
          </div>
        </div>
      </fieldset>
    <!-- </form> -->
  </div>
</template>

<script>
import PlaylistService from '@/services/PlaylistService'

export default {
  name: 'AddSong_modal',
  data () {
    return {
      name: '',
      error: null
    }
  },
  methods: {
    async add_song () {
      console.log('add_song: id = ' + this.name)
      try {
        const response = await PlaylistService.add_song(this.name)
        console.log('Response :')
        console.log(response)
        this.$emit('close')
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
        console.log(error)
      }
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>

<style scoped>
  fieldset{
    border: none;
    padding: 1em;
  }
  .login_header{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
</style>
