interface Movie {
  title: string;
  year: number;
  genre: string;
  rating: number;
  imageUrl: string;
}

const movies: Movie[] = [];
movies.push({
  title: "The Thing",
  year: 1982,
  genre: "Horror",
  rating: 9,
  imageUrl:
    "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/8qHe7US7GuZmC4FWuRKo5goPUSxSGR.jpg",
});
movies.push({
  title: "Saw",
  year: 2005,
  genre: "Horror",
  rating: 2,
  imageUrl:
    "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/8qHe7US7GuZmC4FWuRKo5goPUSxSGR.jpg",
});
movies.push({
  title: "Spider-Man 3",
  year: 2002,
  genre: "Action",
  rating: 9,
  imageUrl:
    "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
});

function displayMovie(movie: Movie): String {
  return `
    <div class="movie-card">
        <img src="${movie.imageUrl}" " alt="${movie.title}">
        <h2> ${movie.title}</h2>
        <p>Genre :${movie.genre}</p>
        Score :${movie.rating}
    </div>
    `;
}

function styleMovie(movie: HTMLElement) {
  //const myElement = document.getElementsByClassName('movie-card');
  const imgElement = movie.querySelector('img') as HTMLImageElement;
  imgElement.style.width = "100%";
  
  movie.style.display = "flex";
  movie.style.flexDirection = "column";
  movie.style.textWrap="no-wrap"; 
  movie.style.textAlign="center"; 
  movie.style.width = "fit-content";
  movie.style.margin = "0 auto";
  movie.style.border = "solid black";
  movie.style.width = "10vw";
  movie.style.marginTop = "1vw";
  movie.style.fontSize = "1.5rem"

}

function displayMovies(movies: Movie[]): string {
  return movies.map(displayMovie).join("");
}

function movieFilterByRating(movies: Movie[]) {
  try {
    const movieList = document.querySelector("div");
    if (!movieList) throw new Error("No div found");
    const goodMovies = movies.filter((movie) => movie.rating > 7);

    movieList.innerHTML = displayMovies(goodMovies);
    //movieList.appendChild(goodMovies)
    const movieCards = document.querySelectorAll(
      ".movie-card"
    ) as NodeListOf<HTMLElement>;
    if(!movieCards)throw new Error("No cards found");
    movieCards.forEach((movieCard) => {
      styleMovie(movieCard);
    });
  } catch (e) {
    console.log(e);
  }
}
movieFilterByRating(movies);
