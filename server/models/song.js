const mongoose 			= require('mongoose');

let SongSchema = mongoose.Schema({
    name: {type:String},
    users:  [ {user:{type : mongoose.Schema.ObjectId, ref : 'User'}, permissions:[{type:String}]} ],
    fileAudioBin: {type: mongoose.Schema.Types.ObjectId, ref: "FileAudioBin"},
}, {timestamps: true});

SongSchema.methods.toWeb = function(){
    let json = this.toJSON();
    return json;
};

let song = module.exports = mongoose.model('Song', SongSchema);
