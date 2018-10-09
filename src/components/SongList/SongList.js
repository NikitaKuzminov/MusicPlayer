import React from "react";

const SongList = ({ songs }) => (
  <div>
    <ul>
      {songs.map(song => (
        <li>{song.song_name}</li>
      ))}
    </ul>
  </div>
);

export default SongList;
