<template>
  <div class="delplay">
    <div class="delplay_header">
      <h2 class="important">Are you sure you want to delete the playlist ?</h2>
    </div>
    <form name="delplay_form" v-on:submit.prevent="delete_playlist">
      <fieldset>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-danger">Delete</button>
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
  name: 'DeletePlaylist_modal',
  methods: {
    async delete_playlist () {
      console.log('delete_playlist : ' + this.$route.params.id)
      try {
        const response = await PlaylistService.delete_playlist(this.$route.params.id)
        console.log(response)
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
  fieldset{
    border: none;
    padding: 1em;
    display: flex;
    justify-content:center;
  }
  .delplay_header{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
  .important{
    font-weight: bold;
  }
</style>
