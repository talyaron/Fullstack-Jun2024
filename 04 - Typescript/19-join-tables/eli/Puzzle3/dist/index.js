///////////////////////////////////////////////////
var movies = [
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "The Matrix", releaseYear: 1999 },
    { id: 3, title: "The Dark Knight", releaseYear: 2008 },
    { id: 4, title: "Interstellar", releaseYear: 2014 },
    { id: 5, title: "Gladiator", releaseYear: 2000 }
];
var actors = [
    { id: 1, name: "Leonardo DiCaprio", nationality: "American" },
    { id: 2, name: "Keanu Reeves", nationality: "Canadian" },
    { id: 3, name: "Christian Bale", nationality: "British" },
    { id: 4, name: "Matthew McConaughey", nationality: "American" },
    { id: 5, name: "Russell Crowe", nationality: "New Zealander" }
];
var movieActors = [
    { movieId: 1, actorId: 1, character: "Cobb" },
    { movieId: 2, actorId: 2, character: "Neo" },
    { movieId: 3, actorId: 3, character: "Bruce Wayne / Batman" },
    { movieId: 4, actorId: 4, character: "Cooper" },
    { movieId: 5, actorId: 5, character: "Maximus" }
];
var getMoviesOfActorContainer = getMoviesOfActor(2, movies, movieActors);
var ActorsInMovieContainer = getActorsInMovie(5, actors, movieActors);
var getMoviesByYearContainer = getMoviesByYear(2014, movies);
renderToScreen(getMoviesOfActorContainer, ActorsInMovieContainer, getMoviesByYearContainer);
function getMoviesOfActor(actorId, movies, movieActors) {
    return movieActors
        .filter(function (movieActor) { return movieActor.actorId === actorId; })
        .map(function (movieActor) { return movies.find(function (movie) { return movie.id === movieActor.movieId; }); })
        .filter(function (movie) { return movie !== undefined; });
}
function getActorsInMovie(movieId, actors, movieActors) {
    return movieActors
        .filter(function (movieActor) { return movieActor.movieId === movieId; }) // Filter by movieId
        .map(function (movieActor) { return actors.find(function (actor) { return actor.id === movieActor.actorId; }); }) // Map to find the corresponding actors
        .filter(function (actor) { return actor !== undefined; }); // Filter out undefined values and cast as Actor[]
}
function getMoviesByYear(year, movies) {
    return movies.filter(function (movie) { return movie.releaseYear == year; });
}
function renderToScreen(MoviesOfActor, actorsofMovie, movieByYear) {
    var containerElement = document.getElementById("container");
    var divElement = document.createElement("div");
    containerElement.appendChild(divElement);
    divElement.innerHTML =
        getActorsInMovie(MoviesOfActor[0].id, actors, movieActors).map(function (actor) { return actor.name; }) + "\n        starring in:\n      " + MoviesOfActor.map(function (movie) { return movie.title; }) + " <br>\n\n    " + getMoviesOfActor(actorsofMovie[0].id, movies, movieActors).map(function (moive) { return moive.title; }) + "\n      " + actorsofMovie.map(function (actor) { return actor.name; }) + "\n     <br>\n    " + movieByYear.map(function (movie) { return movie.title; }) + " released in " + movieByYear.map(function (movie) { return movie.releaseYear; }) + "\n    ";
}
// TODO: Implement the following functions:
// 1. getMoviesOfActor(actorId: number, movies: Movie[], movieActors: MovieActor[]): Movie[]
// 2. getActorsInMovie(movieId: number, actors: Actor[], movieActors: MovieActor[]): Actor[]
// 3. getMoviesByYear(year: number, movies: Movie[]): Movie[]
