<template>
  <nav class="menu">
    <div class="left_elem">
      <router-link to="/"><img src="../assets/logo.png" alt="ListenHub"></router-link>
    </div>
    <div class="right_elem">
      <router-link to="/list">List</router-link>
      <router-link to="/detail">Detail</router-link>
      <router-link to="/about">About</router-link>
      <button class="login" @click="show_login">Log In</button>
      <button class="signup" @click="show_signup">Sign Up</button>
    </div>
  </nav>
</template>

<script>
import Login from '@/components/Login_modal.vue'
import Signup from '@/components/Signup_modal.vue'

export default {
  name: 'Menu',
  methods: {
    show_login: function (event) {
      this.$modal.show(Login, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      })
    },
    show_signup: function (event) {
      this.$modal.show(Signup, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      })
    }
  }
}
</script>

<style scoped>
  .menu{
    display: flex;
    width:100%;
    height: 3em;
    border-bottom: 1px solid lightgrey;
  }

  .left_elem{
    float:left;
  }

  .right_elem{
    right: 0;
    position: fixed;
  }

  img{
    height: 2em;
  }
</style>
