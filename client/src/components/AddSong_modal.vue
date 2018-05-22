<template>
  <div class="login">
    <div class="login_header">
      <h2>Add a song to the playlist</h2>
    </div>

    <form name="login_form">
      <fieldset>
        <div class="field">
          <label class="label" for="link">Link</label>
          <div class="control">
            <input class="input" type="text" name="link" placeholder="Enter the link to the song">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Add</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="$emit('close')">Cancel</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddSong_modal'
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
