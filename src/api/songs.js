let lastId = 1;
const destucture = json => {
  json = json.search.data.tracks;
  const newJson = [];
  json.map(track =>
    newJson.push({
      id: lastId++,
      trackName: track.name,
      authorName: track.artistName,

      // As far as service returns me a 30 seconds preview of track,
      // it's useless to use a const like the one from below.
      //length: track.playbackSeconds,

      length: 30,
      url: track.previewURL
    })
  );
  lastId = 1;
  return newJson;
};

const apiKey = "MDFmNzM0MDctMjU3ZC00MDIzLWFjOTAtMmEyMDNhNzkwYTRk";
const maxTracklistLength = 5;
export const getTrackListOnSearch = value =>
  fetch(
    `https://api.napster.com/v2.2/search?apikey=${apiKey}&query=${value}&per_type_limit=${maxTracklistLength}}`
  )
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      }
      throw new Error("response error");
    })
    .then(json => destucture(json));
