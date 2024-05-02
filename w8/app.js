import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser"
import { connectToDB } from "./db.js";
import cors from 'cors';
import { addNewSong, deleteSongById, insertDocs, listDocs, listOfSongsByDirector, listOfSongsByDirectorBySinger, listSongOfSingerFromMovie, listSongsInTable } from "./controllers/crud.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors({
  origin: '*'
}))


app.post('/insert_many', insertDocs);
app.get('/list_songs', listDocs);
app.get('/list_songs/:music_director', listOfSongsByDirector)
app.get('/list_songs/:music_director/:singer', listOfSongsByDirectorBySinger)

app.delete('/delete_song/:song_id', deleteSongById)

app.post('/insert', addNewSong)

app.get('/list_songs/i/:singer/:film', listSongOfSingerFromMovie)

app.get('/listByTable', listSongsInTable)

app.listen(3000, ()=> {
  connectToDB();
  console.log("Server is working on port 3000");
})