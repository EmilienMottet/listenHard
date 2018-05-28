import Api from '@/services/Api'

export default {
  add_song (song) {
    // console.log(song)
    return Api().post('songs/bin',
      song,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  },
  add_youtube_song (song) {
    return Api().post('songs/youtube', song)
  },
  // delete_song (song) {
  //   return Api().delete('songs', song)
  // },
  get_songs () {
    return Api().get('songs')
  }
}
