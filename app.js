const initApp = () => {
  createNewPlaylist();
};

const playlist = [
  {
    title: "Varmare Vindar",
    artist: "LKN",
    genre: "Pop",
    cover: "img/LKN.jpg",
  },
  {
    title: "End of Beginning",
    artist: "Djo",
    genre: "Pop",
    cover: "img/Djo.jpg",
  },
  {
    title: "Relationships",
    artist: "HAIM",
    genre: "Pop",
    cover: "img/HAIM.jpg",
  },
  {
    title: "Love T.K.O",
    artist: "Teddy Pandergrass",
    genre: "Soul",
    cover: "img/Teddy.jpg",
  },
  {
    title: "Feel Like Makin' Love",
    artist: "Roberta Flack",
    genre: "Soul",
    cover: "img/Roberta.jpg",
  },
  {
    title: "In the Mood",
    artist: "Tyrone Davis",
    genre: "Soul",
    cover: "img/Tyrone.jpg",
  },
  {
    title: "311",
    artist: "Jordan Ward",
    genre: "HipHop",
    cover: "img/Jordan.jpg",
  },
  {
    title: "Rain",
    artist: "Mac Miller",
    genre: "HipHop",
    cover: "img/Mac.jpg",
  },
  {
    title: "Georgia",
    artist: "Kevin Abstract",
    genre: "HipHop",
    cover: "img/Kevin.jpg",
  },
];

document.addEventListener("DOMContentLoaded", initApp);

const createNewPlaylist = () => {
  const playlists = document.getElementById("playlists");
  const playlist = document.createElement("button");
  playlist.textContent = "Super awesome playlist";
  playlist.classList.add("playlist");
  playlists.appendChild(playlist);
  playlist.addEventListener("click", showPlaylist);
};

const showPlaylist = () => {
  const playlistContainer = document.getElementById("playlist-content");
  playlistContainer.innerHTML = "";
  for (const song of playlist) {
    const songElement = document.createElement("div");
    songElement.classList.add("song", song.genre.toLowerCase());
    songElement.innerHTML = `
     <img src="${song.cover}" alt="${song.title}cover" class="song-cover">
      <p class="song-title")>${song.title}</p>
      <p class="song-info">${song.artist}</p>
      <p class="song-info">${song.genre}</p>
    `;
    playlistContainer.appendChild(songElement);
  }
};
