interface Movie {
  title: string;
  year: number;
  director: string;
  rating: number;
  imageUrl: string;
}
const movies: Movie[] = [];
let movie: Movie;
function main() {
  try {
    const theForm = document.querySelector("#the-form");
    if (!theForm) throw new Error("The form is not found");

    theForm.addEventListener("submit", handleSubmit);
   
  } catch (error) {
    console.error(error);
  }
}

function handleSubmit(event: Event) {
  try {
    event.preventDefault(); //prevent page reload

    console.dir(event.target);
    if (!(event.target instanceof HTMLFormElement))
      throw new Error("The target is not a form");
    console.log(event.target.length);

    const form: any = event.target as HTMLFormElement;
    if (!form) throw new Error("The form is not found");

    movie = {
      title: form.title.value,
      year: form.year.value,
      director: form.director.value,
      rating: form.rating.value,
      imageUrl: form.imageUrl.value,
    };
    form.reset();
    movies.push(movie);
    console.log(movies);
    sortMovies(movies);
    renderMovies();
  } catch (error) {
    console.error(error);
  }
}
function sortMovies(movies){
    const sorted = movies.sort((a,b)=>a.rating-b.rating);
    return sorted;
}
function renderMovies() {
  const moviesList = document.querySelector("#movies") as HTMLElement;
  moviesList.innerHTML = movies.map(displayMovie).join("");
}
function displayMovie(movie: Movie) {
  return `   <div class="movie">
      <h2>${movie.title}</h2>
      <p>Year: ${movie.year}</p>
      <p>Director: ${movie.director}</p>
      <p>Rating: ${movie.rating}</p>
      <img src="${movie.imageUrl}" alt="${movie.title}" />
    </div>`;
}
