const initApp = () => {
  createNewPlaylist();
  showPlaylist();
  setupFilterListener();
};

const playlist = [
  {
    title: "Love T.K.O",
    artist: "Teddy Pandergrass",
    genre: "Soul",
    cover: "img/teddy.jpg",
  },
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
    title: "Georgia",
    artist: "Kevin Abstract",
    genre: "HipHop",
    cover: "img/kevin.jpg",
  },
  {
    title: "Relationships",
    artist: "HAIM",
    genre: "Pop",
    cover: "img/HAIM.jpg",
  },
  {
    title: "Feel Like Makin' Love",
    artist: "Roberta Flack",
    genre: "Soul",
    cover: "img/roberta.jpg",
  },
  {
    title: "Rain",
    artist: "Mac Miller",
    genre: "HipHop",
    cover: "img/mac.jpg",
  },
  {
    title: "In the Mood",
    artist: "Tyrone Davis",
    genre: "Soul",
    cover: "img/tyrone.jpg",
  },
  {
    title: "311",
    artist: "Jordan Ward",
    genre: "HipHop",
    cover: "img/jordan.jpg",
  },
];

document.addEventListener("DOMContentLoaded", initApp);

const createNewPlaylist = () => {
  const playlists = document.getElementById("playlists");
  const playlist = document.createElement("button");
  playlist.textContent = "Super awesome playlist";
  playlist.classList.add("playlist");
  playlists.appendChild(playlist);
};

const showPlaylist = () => {
  const playlistContainer = document.getElementById("playlist-content");
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

const setupFilterListener = () => {
  const filterSelect = document.getElementById("genre-filter");
  filterSelect.addEventListener("change", filterSongs);
};

const filterSongs = (event) => {
  const selectedGenre = event.target.value;
  const playlistContainer = document.getElementById("playlist-content");
  playlistContainer.innerHTML = "";

  let filteredSongs;
  if (selectedGenre === "all") {
    filteredSongs = playlist;
  } else {
    filteredSongs = playlist.filter(
      (song) => song.genre.toLowerCase() === selectedGenre.replace("-", ""),
    );
  }

  for (const song of filteredSongs) {
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
