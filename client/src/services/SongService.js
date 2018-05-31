import Api from '@/services/Api'

export default {
  add_song (song) {
    console.log('call function : SongService.add_song')
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
    console.log('call function : SongService.add_youtube_song')
    return Api().post('songs/youtube', song)
  },
  get_songs () {
    console.log('call function : SongService.get_songs')
    return Api().get('songs')
  },
  get_song_bin (id) {
    console.log('call function : SongService.get_song_bin')
    return Api().get('songs/bin/' + id)
  }
}
