const mongoose 			= require('mongoose');

let PlaylistSchema = mongoose.Schema({
    name: {type:String, required: true},
    users:  [ {user:{type : mongoose.Schema.ObjectId, ref : 'User'}, permissions:[{type:String}]} ],
    songs: [{song :{type: mongoose.Schema.ObjectId, ref : 'Song'}}],
}, {timestamps: true});

PlaylistSchema.methods.toWeb = function(){
    let json = this.toJSON();
    return json;
};

let playlist = module.exports = mongoose.model('Playlist', PlaylistSchema);
