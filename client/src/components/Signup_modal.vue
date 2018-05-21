<template>
  <div class="login">
    <div class="login_header">
      <h2>Sign Up to ListenHub</h2>
    </div>
    <form name="login_form">
      <fieldset>
        <div class="field">
          <label class="label" for="email">E-mail</label>
          <div class="control">
            <input class="input" type="text" name="email" placeholder="Enter your e-mail">
          </div>
        </div>
        <div class="field">
          <label class="label" for="pwd">Password</label>
          <div class="control">
            <input class="input" type="password" name="pwd" placeholder="Enter your password">
          </div>
        </div>
        <div class="field">
          <label class="label" for="pwd_conf">Password Confirmation</label>
          <div class="control">
            <input class="input" type="password" name="pwd_conf" placeholder="Confirm your password">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Log In</button>
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
  name: 'Signup_modal'
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
