import Song from '../models/schema.js';

export const insertDocs = async (req, res) => {
  const {songs} = req.body;
  const parsed_songs = JSON.parse(songs);
  await Song.insertMany(parsed_songs);

  res.json("Inserted successfully")
}

export const listDocs = async (req, res) => {
  const songs = await Song.find({});

  let html = `<h1>Count of songs: ${songs.length}</h1><br/><br/>`;

  for(const s of songs) {
    html += `<h4>${s._id} ${s.song_name} sung by ${s.singer} film ${s.film}  </h4>`
  }

  res.send(html);
}

export const listOfSongsByDirector = async (req, res) => {
  const {music_director} = req.params;
  const songs = await Song.find({
    music_director: music_director
  });

  let html = `<h1>Count of songs: ${songs.length}</h1><br/><br/>`;

  for(const s of songs) {
    html += `<h4> ${s.song_name} sung by ${s.singer}  </h4>`
  }

  res.send(html);
}

export const listOfSongsByDirectorBySinger = async (req, res) => {
  const {music_director, singer} = req.params;
  const songs = await Song.find({
    music_director: music_director,
    singer: singer
  });

  let html = `<h1>Count of songs: ${songs.length}</h1><br/><br/>`;

  for(const s of songs) {
    html += `<h4> ${s.song_name} sung by ${s.singer}  </h4>`
  }
  res.send(html);
}

export const deleteSongById = async(req, res) => {
  const {song_id} = req.params;
  await Song.findOneAndDelete({_id: song_id});
  res.json('deleted sucessfully')
}


export const addNewSong = async (req, res) => {
  console.log(req.body)
  const response = await Song.create({...req.body.song_body});
  res.json("Success")

}

export const listSongOfSingerFromMovie = async (req, res) => {
  const {singer, film} = req.params;
  const songs = await Song.find({
    singer: singer,
    film: film
  });

  let html = `<h1>Count of songs: ${songs.length}</h1><br/><br/>`;

  for(const s of songs) {
    html += `<h4> ${s.song_name} sung by ${s.singer}  </h4>`
  }
  res.send(html);
}

export const listSongsInTable = async (req, res) => {
  const songs = await Song.find({});

  let html = `<html> 
    <head>
    <style>
    tr, td, th {
      border: 1px solid black
    }
    </style>
    </head>
  <body> <table>
    <tr>
      <th>Song name</th>
      <th>FIlm name</th>
      <th>Music Director</th>
      <th>Singer</th>
    </tr>
    `;

  for(const s of songs) {
    html += `<tr> <td>${s.song_name}</td> <td>${s.film}</td> <td>${s.music_director}</td> <td>${s.singer}</td> </tr>`
  }
    
  html += `
  </table> </body> </html>`;

  res.send(html)
}