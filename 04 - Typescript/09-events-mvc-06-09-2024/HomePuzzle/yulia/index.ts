interface Movie {
  title: string;
  year: number;
  director: string;
  rating: number;
  imageUrl: string;
}

const movies: Movie[] = [];


function main(): void {
  const form = getFormElement();
  form?.addEventListener("submit", handleFormSubmit);
}


function getFormElement(): HTMLFormElement | null {
  return document.querySelector("#the-form");
}


function handleFormSubmit(event: Event): void {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  const movie = extractMovieData(form);
  if (movie) {
    movies.push(movie);
    clearForm(form);
    renderMovies();
  }
}


function extractMovieData(form: HTMLFormElement): Movie | null {
  try {
    const title = (
      form.elements.namedItem("title") as HTMLInputElement
    ).value.trim();
    const year = parseInt(
      (form.elements.namedItem("year") as HTMLInputElement).value,
      10
    );
    const director = (
      form.elements.namedItem("director") as HTMLInputElement
    ).value.trim();
    const rating = parseFloat(
      (form.elements.namedItem("rating") as HTMLInputElement).value
    );
    const imageUrl = (
      form.elements.namedItem("imageUrl") as HTMLInputElement
    ).value.trim();

    if (isValidMovieData({ title, year, director, rating, imageUrl })) {
      return { title, year, director, rating, imageUrl };
    }
    throw new Error("Invalid movie data");
  } catch (error) {
    console.error(error);
    return null;
  }
}


function isValidMovieData(movie: Movie): boolean {
  return (
    movie.title.length > 0 &&
    movie.year >= 1880 &&
    movie.director.length > 0 &&
    movie.rating >= 1 &&
    movie.rating <= 5 &&
    movie.imageUrl.length > 0
  );
}


function clearForm(form: HTMLFormElement): void {
  form.reset();
}


function renderMovies(): void {
  const movieList = document.getElementById("movies");
  if (movieList) {
    movieList.innerHTML = movies.map(generateMovieHTML).join("");
  } else {
    console.error("Movie list element not found");
  }
}


function generateMovieHTML(movie: Movie): string {
  return `
    <div class="movie">
      <h3>${movie.title}</h3>
      <img src="${movie.imageUrl}" alt="${movie.title}" width="150">
      <p>Year: ${movie.year}</p>
      <p>Director: ${movie.director}</p>
      <p>Rating: ${movie.rating}</p>
      <button onclick="deleteMovie('${movie.title}')">Delete</button>
    </div>
  `;
}


function deleteMovie(title: string): void {
  const movieIndex = movies.findIndex((movie) => movie.title === title);
  if (movieIndex > -1) {
    movies.splice(movieIndex, 1);
    renderMovies();
  }
}


window.onload = main;
