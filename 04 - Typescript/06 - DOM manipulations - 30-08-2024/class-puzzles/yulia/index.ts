interface Movie {
  title: string;
  year: number;
  genre: string;
  rating: number;
  imageUrl: string;
}

const movies: Movie[] = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 9,
    imageUrl:
      "https://www.themoviedb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9,
    imageUrl: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8,
    imageUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: 8,
    imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 8.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8,
    imageUrl: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 9,
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 9,
    imageUrl:
      "https://www.themoviedb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    imageUrl:
      "https://www.themoviedb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
];


function renderMovie(movie: Movie): string {
  return `
    <div class="movie-card">
      <img src="${movie.imageUrl}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Rating: ${movie.rating}</p>
    </div>
  `;
}

function renderMovies(movies: Movie[]): string {
  return movies.map(renderMovie).join("");
}


function mainMovies() {
  try {
    const movieList = document.querySelector("#movie-list");
    if (!movieList) throw new Error("Movie list not found");

    movieList.innerHTML = renderMovies(movies);
  } catch (error) {
    console.error(error);
  }
}

mainMovies();
