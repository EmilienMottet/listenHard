<template>
  <label class="song_object" :for="song_ID">
    <input type="checkbox" :value="song_ID" :id="song_ID" v-model="checked" @change="onChange">
    {{song_name}}
  </label>
</template>

<script>
export default {
  name: 'song_add_object',
  props: [
    'value',
    'val',
    'song_name',
    'song_ID'
  ],
  data () {
    return {
      checkedProxy: false
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  },
  methods: {
    onChange: function (e) {
      this.$emit('input', this.checkedProxy)
    }
  }
}
</script>

<style scoped>
 .song_object{
  display: flex;
  align-items: center;
  width: auto;
  padding: 0.5em;
  border: 1px solid grey;
  margin: 0.5em;
  transition: 0.2s;
 }

 .song_object:hover{
  background: lightgrey;
 }

 .song_info{
  width: 100%;
  text-align: left;
  padding-left: 2em;
 }

 img{
  width: 50px;
  height: 50px;
  background: grey;
 }

 .song_name{
  font-weight: bold;
  font-size: 1em;
 }
 .song_link{
  color: grey;
  font-size: 0.8em;
 }
</style>
