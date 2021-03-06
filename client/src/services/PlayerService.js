export default {
  play_playlist (player, songs) {
    console.log('call function : PlayerService.play_playlist')
    let songsToPlay = []
    for (var i = 0; i < songs.length; i++) {
      songsToPlay.push({
        name: songs[i].name,
        url: 'http://localhost:3000/v1/songs/bin/' + songs[i].fileAudioBin
      })
    }
    player.state.player.list.clear()
    player.state.player.list.add(songsToPlay)
    player.state.player.toggle()
  },
  play_song (player, song) {
    console.log('call function : PlayerService.play_song')
    player.state.player.list.clear()
    player.state.player.list.add({
      name: song.name,
      url: 'http://localhost:3000/v1/songs/bin/' + song.fileAudioBin
    })
    player.state.player.toggle()
  }
}
