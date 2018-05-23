<template>
  <div class="login">
    <div class="login_header">
      <h2 class="important">Are you sure you want to delete the playlist ?</h2>
    </div>
    <!-- <form name="login_form"> -->
      <fieldset>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-danger">Delete</button>
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
export default {
  name: 'DeletePlaylist_modal'
}
</script>

<style scoped>
  fieldset{
    border: none;
    padding: 1em;
    display: flex;
    justify-content:center;
  }
  .login_header{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
  .important{
    font-weight: bold;
  }
</style>
