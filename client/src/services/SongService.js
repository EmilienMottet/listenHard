import Api from '@/services/Api'

export default {
  add_song (song) {
    return Api().post('songs/bin',
      song,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  },
  // delete_song (song) {
  //   return Api().delete('songs', song)
  // },
  get_songs () {
    return Api().get('songs')
  }
}
