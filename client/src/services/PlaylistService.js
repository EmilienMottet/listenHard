import Api from '@/services/Api'

export default {
  get_playlists () {
    return Api().get('playlists')
  },
  get_playlist (id) {
    return Api().get('playlists/' + id)
  },
  create_playlist (playlist) {
    return Api().post('playlists', playlist)
  },
  delete_playlist (id) {
    return Api().delete('playlists/' + id)
  }
}
