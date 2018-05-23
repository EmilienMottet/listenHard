<template>
  <div class="login">
    <div class="login_header">
      <h2>Create a new playlist</h2>
    </div>

    <!-- <form name="login_form"> -->
      <fieldset>
        <div class="field">
          <label class="label" for="name">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Enter the name of the playlist">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="create_playlist">Add</button>
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
  name: 'CreatePlaylist_modal',
  data () {
    return {
      name: '',
      error: null
    }
  },
  methods: {
    async create_playlist () {
      console.log('create_playlist : name = ' + this.name)
      try {
        const response = await PlaylistService.create_playlist({
          name: this.name
        })
        console.log('Response :')
        console.log(response)
        this.$emit('close')
      } catch (error) {
        this.error = error.response.data.error
        alert(this.error)
        console.log(this.error)
        console.log(error)
      }
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
