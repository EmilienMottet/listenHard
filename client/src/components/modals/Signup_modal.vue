<template>
  <div class="login">
    <div class="login_header">
      <h2>Sign Up to ListenHub</h2>
    </div>
    <!-- <form name="login_form"> -->
      <fieldset>
        <div class="field">
          <label class="label" for="email">E-mail</label>
          <div class="control">
            <input class="input" type="email" name="email" v-model="email" placeholder="Enter your e-mail">
          </div>
        </div>
        <div class="field">
          <label class="label" for="pwd">Password</label>
          <div class="control">
            <input class="input" type="password" name="pwd" v-model="password" placeholder="Enter your password">
          </div>
        </div>
        <div class="field">
          <label class="label" for="pwd_conf">Password Confirmation</label>
          <div class="control">
            <input class="input" type="password" name="pwd_conf" v-model="passwordconf" placeholder="Confirm your password">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="register">Sign Up</button>
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
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Signup_modal',
  data () {
    return {
      email: '',
      password: '',
      passwordconf: '',
      error: null
    }
  },
  methods: {
    async register () {
      console.log('Signup : mail = ' + this.email + '; password = ' + this.password)
      try {
        const response = await AuthenticationService.signup({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
  }
  .login_header{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
</style>
