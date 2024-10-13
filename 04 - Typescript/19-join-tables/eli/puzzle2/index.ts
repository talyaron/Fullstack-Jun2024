
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

  ///////////////////////////////////////////////////

  const movies: Movie[] = [
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "The Matrix", releaseYear: 1999 },
    { id: 3, title: "The Dark Knight", releaseYear: 2008 },
    { id: 4, title: "Interstellar", releaseYear: 2014 },
    { id: 5, title: "Gladiator", releaseYear: 2000 }
  ];
  
  const actors: Actor[] = [
    { id: 1, name: "Leonardo DiCaprio", nationality: "American" },
    { id: 2, name: "Keanu Reeves", nationality: "Canadian" },
    { id: 3, name: "Christian Bale", nationality: "British" },
    { id: 4, name: "Matthew McConaughey", nationality: "American" },
    { id: 5, name: "Russell Crowe", nationality: "New Zealander" }
  ];
  
  const movieActors: MovieActor[] = [
    { movieId: 1, actorId: 1, character: "Cobb" },
    { movieId: 2, actorId: 2, character: "Neo" },
    { movieId: 3, actorId: 3, character: "Bruce Wayne / Batman" },
    { movieId: 4, actorId: 4, character: "Cooper" },
    { movieId: 5, actorId: 5, character: "Maximus" }
  ];

  const getMoviesOfActorContainer  = getMoviesOfActor(2, movies, movieActors);
 

  const ActorsInMovieContainer  = getActorsInMovie(5, actors, movieActors);


  const getMoviesByYearContainer  = getMoviesByYear(2014, movies);

renderToScreen(getMoviesOfActorContainer,ActorsInMovieContainer,getMoviesByYearContainer);
 

function  getMoviesOfActor(actorId: number, movies: Movie[], movieActors: MovieActor[]): Movie[]
{
    return movieActors
    .filter(movieActor => movieActor.actorId === actorId) 
    .map(movieActor => movies.find(movie => movie.id === movieActor.movieId))
    .filter(movie => movie !== undefined) as Movie[];
}

function getActorsInMovie(movieId: number, actors: Actor[], movieActors: MovieActor[]): Actor[]
{  
    return movieActors
    .filter(movieActor => movieActor.movieId === movieId) // Filter by movieId
    .map(movieActor => actors.find(actor => actor.id === movieActor.actorId)) // Map to find the corresponding actors
    .filter(actor => actor !== undefined) as Actor[]; // Filter out undefined values and cast as Actor[]
}
function getMoviesByYear(year: number, movies: Movie[]) :Movie[]
{
   return movies.filter(movie=>movie.releaseYear==year);

}


function renderToScreen(MoviesOfActor:Movie[],actorsofMovie:Actor[],movieByYear:Movie[])
{
    const containerElement = document.getElementById("container")as HTMLElement;
    const divElement = document.createElement("div") as HTMLElement;
    containerElement.appendChild(divElement);
    divElement.innerHTML=
    `${getActorsInMovie(MoviesOfActor[0].id,actors, movieActors).map(actor=>actor.name)}
        starring in:
      ${MoviesOfActor.map(movie=>movie.title)} <br>

    ${getMoviesOfActor(actorsofMovie[0].id, movies, movieActors).map(moive=>moive.title)}
      ${actorsofMovie.map(actor=>actor.name)}
     <br>
    ${movieByYear.map(movie=>movie.title)} released in ${movieByYear.map(movie=>movie.releaseYear)}
    `
}
// TODO: Implement the following functions:
// 1. getMoviesOfActor(actorId: number, movies: Movie[], movieActors: MovieActor[]): Movie[]
// 2. getActorsInMovie(movieId: number, actors: Actor[], movieActors: MovieActor[]): Actor[]
// 3. getMoviesByYear(year: number, movies: Movie[]): Movie[]
