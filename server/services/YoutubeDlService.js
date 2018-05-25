const ffmpeg = require('fluent-ffmpeg');
const ytdl = require('ytdl-core');

const gridFsService = require('./GridFsService');

const createYoutubeSong = async function(youtube_url,trackName,callback){
    gridFsService.uploadSong(
        trackName,
        ffmpeg().input(ytdl(youtube_url)).noVideo().format("mp3"),
        callback
    );
}
module.exports.createYoutubeSong = createYoutubeSong;
