<template>
  <div class="newplay">
    <div class="newplay_header">
      <h2>Create a new playlist</h2>
    </div>

    <form name="newplay_form" v-on:submit.prevent="create_playlist">
      <fieldset>
        <div class="field">
          <label class="label" for="name">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" v-model="name" placeholder="Enter the name of the playlist" required>
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
        console.log(response.message)
        this.$router.push({
          name: 'home'
        })
        this.$router.push({
          name: 'list'
        })
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
  .newplay{
    width:auto;
  }
  fieldset{
    border: none;
    padding: 1em;
  }
  .newplay_header{
    /* width: 100%; */
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
</style>
