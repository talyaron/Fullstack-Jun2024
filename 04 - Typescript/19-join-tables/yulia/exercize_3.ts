// Exercise 3: Movies and Actors

interface Movie {
  id: number;
  title: string;
  releaseYear: number;
}

interface Actor {
  id: number;
  name: string;
  nationality: string;
}

interface MovieActor {
  movieId: number;
  actorId: number;
  character: string;
}

// TODO: Implement the following functions:
// 1. getMoviesOfActor(actorId: number, movies: Movie[], movieActors: MovieActor[]): Movie[]
// 2. getActorsInMovie(movieId: number, actors: Actor[], movieActors: MovieActor[]): Actor[]
// 3. getMoviesByYear(year: number, movies: Movie[]): Movie[]

// Function to get all movies of actor by actor ID
function getMoviesOfActor(
  actorId: number,
  movies: Movie[],
  movieActors: MovieActor[]
): Movie[] {
  const movieIdsByActor = movieActors
    .filter((ma) => ma.actorId === actorId)
    .map((ma) => ma.movieId);

  if (movieIdsByActor.length === 0) {
    console.log(`No movies found for actor with ID ${actorId}`);
    return [];
  }

  return movies.filter((movie) => movieIdsByActor.includes(movie.id));
}

// Function to get all actors in movie by movie ID
function getActorsInMovie(
  movieId: number,
  actors: Actor[],
  movieActors: MovieActor[]
): Actor[] {
  const actorIdsByMovie = movieActors
    .filter((ma) => ma.movieId === movieId)
    .map((ma) => ma.actorId);

  if (actorIdsByMovie.length === 0) {
    console.log(`No actors found for movie with ID ${movieId}`);
    return [];
  }

  return actors.filter((actor) => actorIdsByMovie.includes(actor.id));
}

// Function to get all movies by release year
function getMoviesByYear(year: number, movies: Movie[]): Movie[] {
  const moviesByYear = movies.filter((movie) => movie.releaseYear === year);

  if (moviesByYear.length === 0) {
    console.log(`No movies found for the year ${year}`);
  }

  return moviesByYear;
}
// Test cases
const movies: Movie[] = [
  { id: 1, title: "The Matrix", releaseYear: 1999 },
  { id: 2, title: "Inception", releaseYear: 2010 },
  { id: 3, title: "Interstellar", releaseYear: 2014 },
  { id: 4, title: "The Dark Knight", releaseYear: 2008 },
  { id: 5, title: "The Godfather", releaseYear: 1972 },
  { id: 6, title: "The Godfather: Part II", releaseYear: 1974 },
  { id: 7, title: "The Godfather: Part III", releaseYear: 1990 },
  { id: 8, title: "The Departed", releaseYear: 2006 },
  { id: 9, title: "The Wolf of Wall Street", releaseYear: 2013 },
  { id: 10, title: "Shutter Island", releaseYear: 2010 },
  { id: 11, title: "Titanic", releaseYear: 1997 },
  { id: 12, title: "The Revenant", releaseYear: 2015 },
  { id: 13, title: "The Great Gatsby", releaseYear: 2013 },
  { id: 14, title: "Dallas Buyers Club", releaseYear: 2013 },
  { id: 15, title: "The Dark Knight Rises", releaseYear: 2012 },
  { id: 16, title: "American Hustle", releaseYear: 2013 },
  { id: 17, title: "The Big Short", releaseYear: 2015 },
];

const actors: Actor[] = [
  { id: 1, name: "Keanu Reeves", nationality: "Canadian" },
  { id: 2, name: "Leonardo DiCaprio", nationality: "American" },
  { id: 3, name: "Matthew McConaughey", nationality: "American" },
  { id: 4, name: "Christian Bale", nationality: "British" },
  { id: 5, name: "Marlon Brando", nationality: "American" },
  { id: 6, name: "Al Pacino", nationality: "American" },
  { id: 7, name: "Robert De Niro", nationality: "American" },
  { id: 8, name: "Jack Nicholson", nationality: "American" },
];

const movieActors: MovieActor[] = [
  { movieId: 1, actorId: 1, character: "Neo" },
  { movieId: 2, actorId: 2, character: "Cobb" },
  { movieId: 3, actorId: 3, character: "Cooper" },
  { movieId: 4, actorId: 4, character: "Bruce Wayne" },
  { movieId: 5, actorId: 5, character: "Vito Corleone" },
  { movieId: 6, actorId: 6, character: "Michael Corleone" },
  { movieId: 7, actorId: 6, character: "Michael Corleone" },
  { movieId: 8, actorId: 8, character: "Dignam" },
  { movieId: 9, actorId: 2, character: "Jordan Belfort" },
  { movieId: 10, actorId: 2, character: "Teddy Daniels" },
  { movieId: 11, actorId: 2, character: "Jack Dawson" },
  { movieId: 12, actorId: 2, character: "Hugh Glass" },
  { movieId: 13, actorId: 2, character: "Jay Gatsby" },
  { movieId: 14, actorId: 3, character: "Ron Woodroof" },
  { movieId: 15, actorId: 4, character: "Bruce Wayne" },
  { movieId: 16, actorId: 4, character: "Irving Rosenfeld" },
  { movieId: 17, actorId: 4, character: "Michael Burry" },
];

// get movies of actor by actor ID
console.log(getMoviesOfActor(1, movies, movieActors)); // movies with Keanu Reeves
console.log(getMoviesOfActor(2, movies, movieActors)); // movies with Leonardo DiCaprio
console.log(getMoviesOfActor(35, movies, movieActors)); // Check for non-existent actor

// get actors in movie by movie ID
console.log(getActorsInMovie(1, actors, movieActors)); // Actors in "The Matrix"
console.log(getActorsInMovie(5, actors, movieActors)); // Actors in "The Godfather"
console.log(getActorsInMovie(99, actors, movieActors)); // Check for non-existent movie

// get movies by release year
console.log(getMoviesByYear(2010, movies)); // Movies from 2010
console.log(getMoviesByYear(1995, movies)); // Check for non-existent year

// function to print movies of actor by actor ID

function printMoviesOfActor(
  actorId: number,
  movies: Movie[],
  movieActors: MovieActor[]
) {
  const moviesOfActor = getMoviesOfActor(actorId, movies, movieActors);
  if (moviesOfActor.length === 0) {
    return [];
  }
  const actor = actors.find((actor) => actor.id === actorId);
  console.log(`Movies of ${actor!.name}:`);
  moviesOfActor.forEach((movie) => console.log(`- ${movie.title}`));
}

// function to print actors in movie by movie ID

function printActorsInMovie(
  movieId: number,
  actors: Actor[],
  movieActors: MovieActor[]
) {
  const actorsInMovie = getActorsInMovie(movieId, actors, movieActors);
  if (actorsInMovie.length === 0) {
    return [];
  }
  const movie = movies.find((movie) => movie.id === movieId);
  console.log(`Actors in "${movie!.title}":`);
  actorsInMovie.forEach((actor) => console.log(`- ${actor.name}`));
}

// function to print movies by release year

function printMoviesByYear(year: number, movies: Movie[]) {
  const moviesByYear = getMoviesByYear(year, movies);
  if (moviesByYear.length === 0) {
    return [];
  }
  console.log(`Movies from ${year}:`);
  moviesByYear.forEach((movie) => console.log(`- ${movie.title}`));
}

// Test cases


printMoviesOfActor(2, movies, movieActors); // movies with Leonardo DiCaprio
printMoviesOfActor(35, movies, movieActors); // Check for non-existent actor
printActorsInMovie(5, actors, movieActors); // Actors in "The Godfather"
printActorsInMovie(12, actors, movieActors); // Actors in "The Revenant"
printActorsInMovie(99, actors, movieActors); // Check for non-existent movie
printMoviesByYear(2010, movies); // Movies from 2010
printMoviesByYear(1995, movies); // Check for non-existent year

