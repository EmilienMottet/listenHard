import Api from '@/services/Api'

export default {
  get_playlists () {
    return Api().get('playlists')
  },
  create_playlist (playlist) {
    return Api().post('playlists', playlist)
  },
  delete_song (song) {
    return Api().delete('songs', song)
  },
  modify_song (song) {
    return Api().post('songs', song)
  }
}
