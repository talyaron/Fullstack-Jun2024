interface Movie {
  title: string;
  director: string;
  year: number;
  rating: number;
  imgUrl: string;
}

const movies: Movie[] = [
  {
    title: "Batman Returns",
    director: "Tim Burton",
    year: 1992,
    rating: 4,
    imgUrl: `https://i.ebayimg.com/images/g/BYsAAOSwyP1jPuLP/s-l1600.webp`,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 5,
    imgUrl: `https://m.media-amazon.com/images/I/818hyvdVfvL._AC_SL1500_.jpg`,
  },
];

function main() {
  try {
    const formElement = document.getElementById("form") as HTMLFormElement;
    if (!formElement) throw new Error("form not found");
    formElement.addEventListener("submit", movieInput);
    const sortButton = document.getElementById(
      "sortButton"
    ) as HTMLButtonElement;
    if (!sortButton) throw new Error("sort not found");
    sortButton.addEventListener("click", (event) => {
      sortByRating(event);
    });
    renderMovies(movies);
  } catch (e) {
    console.log(e);
  }
}

function movieInput(event: Event) {
  try {
    event.preventDefault();
    const form: any = event.target as HTMLFormElement;
    if (!form) throw new Error("Form not found");
    const _title = form.title.value;
    const _year = form.year.value;
    const _director = form.director.value;
    const _rating = form.rating.value;
    const _imgUrl = form.imgUrl.value;
    if (_title && _year && _director && _rating && _imgUrl) {
      movies.push({
        title: _title,
        year: _year,
        director: _director,
        rating: _rating,
        imgUrl: _imgUrl,
      });
    }

    renderMovies(movies);
  } catch (e) {
    console.log(e);
  }
}

function renderMovies(movies: Movie[]) {
  try {
    const moviesElement = document.getElementById("movies") as HTMLElement;
    if (!moviesElement) throw new Error("movies not found");

    moviesElement.innerHTML = movies
      .map(
        (movie, index) =>
          `<div class="movie">
              <img src="${movie.imgUrl}" alt="${movie.title}" />
              <h3>${movie.title}</h3>
              <p>Director: ${movie.director}</p>
              <p>Year: ${movie.year}</p>
              <p>Rating: ${movie.rating}</p>
              <button class = "delBtn" onclick="deleteMovie(${index})">Delete</button>
            </div>`
      )
      .join("");
  } catch (e) {
    console.log(e);
  }
}
function sortByRating(event: Event) {
  try {
    event.preventDefault();
    movies.sort((a, b) => a.rating - b.rating);
    renderMovies(movies);
  } catch (e) {
    console.log(e);
  }
}

function deleteMovie(index: number) {
  movies.splice(index, 1);
  renderMovies(movies);
}

console.log(movies);
