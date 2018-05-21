<template>
  <div class="login">
    <h2>Log In to ListenHub</h2>
    <form name="login_form">
    <label for="mail"></label>
    <input type="text" name="mail" placeholder="Enter your e-mail">
    <label for="pwd"></label>
    <input type="password" name="pwd" placeholder="Enter your password">
    <button class="submit">Log In</button>
    <button class="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>

</style>
