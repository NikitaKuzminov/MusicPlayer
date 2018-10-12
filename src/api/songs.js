export const songs = [
  {
    id: 1,
    trackName: "Song name 1",
    authorName: "Author 1",
    length: 164,
    url: "http://listen.vo.llnwd.net/g3/4/9/4/7/4/1442647494.mp3"
  },
  {
    id: 2,
    trackName: "Song name 2",
    authorName: "Author 2",
    length: 183,
    url: "http://listen.vo.llnwd.net/g3/0/0/2/9/2/1443029200.mp3"
  },
  {
    id: 3,
    trackName: "Song name 3",
    authorName: "Author 3",
    length: 216,
    url:
      "http://sampleswap.org/samples-ghost/MELODIC%20SAMPLES%20and%20LOOPS/FULL%20ENSEMBLE%20BPM/783[kb]105_undisputed-truth-smilingfaces.aif.mp3"
  }
];

const apiKey = "MDFmNzM0MDctMjU3ZC00MDIzLWFjOTAtMmEyMDNhNzkwYTRk";
export const getTrackListOnSearch = value =>
  fetch(
    `https://api.napster.com/v2.2/search?apikey=${apiKey}&query=${value}&per_type_limit=5`
  ).then(response => response.json());
