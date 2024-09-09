interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
}

let movies: Movie[] = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, imageUrl: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9, imageUrl: "https://static.posters.cz/image/750/1288.jpg" },
    { title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3, imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" }
];

function handleStart(): void {
    const addMovieBtn = document.getElementById('add-movie-btn') as HTMLButtonElement;
    const sortRatingBtn = document.getElementById('sort-rating-btn') as HTMLButtonElement;


    addMovieBtn.addEventListener('click', addMovie);
    sortRatingBtn.addEventListener('click', sortMoviesByRating);

  
    renderMovies(movies);  
}

function addMovie(): void {
    const title = (document.getElementById('input-title') as HTMLInputElement).value;
    const year = parseInt((document.getElementById('input-year') as HTMLInputElement).value, 10);
    const genre = (document.getElementById('input-genre') as HTMLInputElement).value;
    const rating = parseFloat((document.getElementById('input-rating') as HTMLInputElement).value);
    const imageUrl = (document.getElementById('input-image-url') as HTMLInputElement).value;

    if (title && !isNaN(year) && genre && !isNaN(rating) && imageUrl) {
        const newMovie: Movie = { title, year, genre, rating, imageUrl };
        movies.push(newMovie);

        clearInputs(); 
        renderMovies(movies); 
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function clearInputs(): void {
    (document.getElementById('input-title') as HTMLInputElement).value = '';
    (document.getElementById('input-year') as HTMLInputElement).value = '';
    (document.getElementById('input-genre') as HTMLInputElement).value = '';
    (document.getElementById('input-rating') as HTMLInputElement).value = '';
    (document.getElementById('input-image-url') as HTMLInputElement).value = '';
}

function sortMoviesByRating(): void {
    movies.sort((a, b) => a.rating - b.rating); 
    renderMovies(movies);
}

function deleteMovie(index: number): void {
    movies.splice(index, 1); 
    renderMovies(movies); 
}

function renderMovies(movies: Movie[]): void {
    const moviesList = document.getElementById('movies-root') as HTMLElement;
    moviesList.innerHTML = ''; 

    movies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card'); 

        movieCard.innerHTML = `
            <h2>${movie.title}</h2>
            <h3>Year: ${movie.year}</h3>
            <h4>Genre: ${movie.genre}</h4>
            <h3>Rating: ${movie.rating}</h3>
            <img src="${movie.imageUrl}" alt="${movie.title}" width="100">
            <button onclick="deleteMovie(${index})">Delete</button>
        `;

        moviesList.appendChild(movieCard); 
    });
}

(window as any).deleteMovie = deleteMovie;


handleStart();