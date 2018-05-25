const mongoose = require('mongoose');

var Attachment;
//instantiate mongoose-gridfs
mongoose.connection.on('open', () => {
    var gridfs = require('mongoose-gridfs')({
        collection: 'tracks',
        model: 'FileAudioBin',
        // bucketName : '
        mongooseConnection: mongoose.connection
    });
    Attachment = gridfs.model;
})

const uploadSong = function(trackName,readableTrackStream,callback){
    Attachment.write(
        {
        filename: trackName,
        contentType: 'audio/mp3'
        },
                     readableTrackStream,
                     callback
                    );
};
module.exports.uploadSong = uploadSong;

const readSong = function(trackID){
    return Attachment.readById(trackID);
}
module.exports.readSong = readSong;
