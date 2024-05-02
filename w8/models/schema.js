import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  song_name: String,
  film: String,
  music_director: String,
  singer: String
})

const Song = mongoose.model('Song', songSchema);

export default Song;