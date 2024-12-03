var movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, imageUrl: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9, imageUrl: "https://static.posters.cz/image/750/1288.jpg" },
    { title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3, imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" }
];
function handleStart() {
    var addMovieBtn = document.getElementById('add-movie-btn');
    var sortRatingBtn = document.getElementById('sort-rating-btn');
    addMovieBtn.addEventListener('click', addMovie);
    sortRatingBtn.addEventListener('click', sortMoviesByRating);
    renderMovies(movies);
}
function addMovie() {
    var title = document.getElementById('input-title').value;
    var year = parseInt(document.getElementById('input-year').value, 10);
    var genre = document.getElementById('input-genre').value;
    var rating = parseFloat(document.getElementById('input-rating').value);
    var imageUrl = document.getElementById('input-image-url').value;
    if (title && !isNaN(year) && genre && !isNaN(rating) && imageUrl) {
        var newMovie = { title: title, year: year, genre: genre, rating: rating, imageUrl: imageUrl };
        movies.push(newMovie);
        clearInputs();
        renderMovies(movies);
    }
    else {
        alert('Please fill in all fields correctly.');
    }
}
function clearInputs() {
    document.getElementById('input-title').value = '';
    document.getElementById('input-year').value = '';
    document.getElementById('input-genre').value = '';
    document.getElementById('input-rating').value = '';
    document.getElementById('input-image-url').value = '';
}
function sortMoviesByRating() {
    movies.sort(function (a, b) { return a.rating - b.rating; });
    renderMovies(movies);
}
function deleteMovie(index) {
    movies.splice(index, 1);
    renderMovies(movies);
}
function renderMovies(movies) {
    var moviesList = document.getElementById('movies-root');
    moviesList.innerHTML = '';
    movies.forEach(function (movie, index) {
        var movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = "\n            <h2>" + movie.title + "</h2>\n            <h3>Year: " + movie.year + "</h3>\n            <h4>Genre: " + movie.genre + "</h4>\n            <h3>Rating: " + movie.rating + "</h3>\n            <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\" width=\"100\">\n            <button onclick=\"deleteMovie(" + index + ")\">Delete</button>\n        ";
        moviesList.appendChild(movieCard);
    });
}
window.deleteMovie = deleteMovie;
handleStart();
