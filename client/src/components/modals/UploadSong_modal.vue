<template>
  <div class="addsong">
    <div class="addsong_header">
      <h2>Upload a mp3 file</h2>
    </div>

    <form name="addsong_form" v-on:submit.prevent="add_song">
      <fieldset>
        <div class="field">
          <label class="label" for="name">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" v-model="name" placeholder="Enter the name of the song" required/>
          </div>
        </div>

        <div class="field">
          <label class="label" for="file">File</label>
          <div class="control">
            <input class="input" type="file" name="file" placeholder="Choose a file" ref="file" v-on:change="handleFileUpload()" required/>
          </div>
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

export default {
  name: 'UploadSong_modal',
  data () {
    return {
      file: '',
      name: '',
      error: null
    }
  },
  methods: {
    async add_song () {
      try {
        let formData = new FormData()
        formData.append('track', this.file)
        formData.append('name', this.name)
        const response = await SongService.add_song(formData)
        console.log('Response :')
        console.log(response)
        this.$router.push({
          name: 'home'
        })
        this.$router.push({
          name: 'files'
        })
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
  .addsong_header{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
</style>
