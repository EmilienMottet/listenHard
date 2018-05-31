<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" alt="ListenHub" width="112" height="28">
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <router-link v-if="$store.state.isUserLoggedIn" class="navbar-item" to="/list">My Playlists</router-link>
        <!-- <router-link v-if="$store.state.isUserLoggedIn" class="navbar-item" to="/detail">Detail</router-link> -->
        <router-link v-if="$store.state.isUserLoggedIn" class="navbar-item" to="/files">My Files</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <div v-if="!$store.state.isUserLoggedIn" class="navbar-item">
          <button class="button is-primary" @click="show_signup">Sign Up</button>
        </div>
        <div v-if="!$store.state.isUserLoggedIn" class="navbar-item">
          <button class="button" @click="show_login">Log In</button>
        </div>
        <div v-if="$store.state.isUserLoggedIn" class="navbar-item">
          <button class="button" @click="logout">Log Out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from '@/components/modals/Login_modal.vue'
import Signup from '@/components/modals/Signup_modal.vue'

export default {
  name: 'Menu',
  methods: {
    show_login: function (event) {
      this.$modal.show(Login, {}, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      })
    },
    show_signup: function (event) {
      this.$modal.show(Signup, {}, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      })
    },
    logout: function (event) {
      console.log('Log out')
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$player.dispatch('deletePlayer')
      this.$router.push({
        name: 'home'
      })
    }
  }
}

// Code from Bulma for mobile
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
  // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

<style scoped>
  nav{
    border-bottom: 1px solid lightgrey;
    padding: 0em 1em 0em 1em;
  }
</style>
