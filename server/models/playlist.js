const mongoose 			= require('mongoose');

let PlaylistSchema = mongoose.Schema({
    name: {type:String},
    users:  [ {user:{type : mongoose.Schema.ObjectId, ref : 'User'}, permissions:[{type:String}]} ],
}, {timestamps: true});

PlaylistSchema.methods.toWeb = function(){
    let json = this.toJSON();
    return json;
};

let playlist = module.exports = mongoose.model('Playlist', PlaylistSchema);
