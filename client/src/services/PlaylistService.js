import Api from '@/services/Api'
import SongService from '@/services/SongService'

export default {
  get_playlists () {
    console.log('call function : PlaylistService.get_playlists')
    return Api().get('playlists')
  },
  get_playlist (id) {
    console.log('call function : PlaylistService.get_playlist(' + id + ')')
    return Api().get('playlists/' + id)
  },
  create_playlist (playlist) {
    console.log('call function : PlaylistService.create_playlist(' + playlist + ')')
    return Api().post('playlists', playlist)
  },
  delete_playlist (id) {
    console.log('call function : PlaylistService.delete_playlist(' + id + ')')
    return Api().delete('playlists/' + id)
  },
  add_song (id, songs) {
    console.log('call function : PlaylistService.add_song(' + id + ', ' + songs + ')')
    return Api().post('playlists/' + id + '/songs', songs)
  },
  add_song_youtube (id, song) {
    console.log('call function : PlaylistService.add_song_youtube(' + id + ', ' + song + ')')
    const resp = SongService.add_youtube_song(song)
    const songid = resp.data.songs._id
    return Api().post('playlists/' + id + '/songs', songid)
  },
  remove_song (id, song) {
    console.log('call function : PlaylistService.remove_song(' + id + ' , ' + song + ' )')
    return Api().delete('playlists/' + id + '/songs', song)
  }
}
