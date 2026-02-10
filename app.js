const initApp = () => {
  createPlaylist();
};

const playlist = [
  { title: "Varmare Vindar", artist: "LKN", genre: "Pop" },
  { title: "Half a Heart Beating", artist: "Esther", genre: "Pop" },
  { title: "Relationships", artist: "HAIM", genre: "Pop" },
  { title: "Love T.K.O", artist: "Teddy Pandergrass", genre: "Soul" },
  { title: "Feel Like Makin' Love", artist: "Roberta Flack", genre: "Soul" },
  { title: "In the Mood", artist: "Tyrone Davis", genre: "Soul" },
  { title: "311", artist: "Jordan Ward", genre: "HipHop" },
  { title: "Rain", artist: "Mac Miller", genre: "HipHop" },
  {
    title: "Georgia",
    artist: "Kevin Abstract",
    genre: "HipHop",
  },
];

document.addEventListener("DOMContentLoaded", initApp);

const createPlaylist = () => {
  const playlistContainer = document.getElementById("playlist-content");
  for (const song of playlist) {
    const songElement = document.createElement("div");
    songElement.classList.add("song", song.genre.toLowerCase());
    songElement.innerHTML = `
      <p class="song-title")>${song.title}</p>
      <p>${song.artist}</p>
    `;
    playlistContainer.appendChild(songElement);
  }
};
