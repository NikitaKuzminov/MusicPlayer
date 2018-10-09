import React from "react";

import { songs } from "../../api/songs";

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
