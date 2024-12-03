var movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 6.0, imageUrl: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9, imageUrl: "https://static.posters.cz/image/750/1288.jpg" },
    { title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3, imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
    { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 5.7, imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
    { title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8, imageUrl: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
    { title: "Forrest Gump", year: 1994, genre: "Drama", rating: 4.8, imageUrl: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
    { title: "Gladiator", year: 2000, genre: "Action", rating: 8.5, imageUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" }
];
function main() {
    function renderMovie(Movie) {
        return "\n        <div class=\"Movie-card\">\n            <h1>" + Movie.title + "</h1>\n            <h2>" + Movie.year + "</h2>\n            <h3>" + Movie.genre + "</h3>\n            <h3>" + Movie.rating + "</h3>\n            <img src=\"" + Movie.imageUrl + "\" alt=\"" + Movie.title + "\">\n        </div>\n        ";
    }
    function renderMovies(movies) {
        var moviesContainer = document.getElementById('movies-root');
        if (moviesContainer) {
            moviesContainer.innerHTML = movies.map(renderMovie).join('');
        }
    }
    document.addEventListener('DOMContentLoaded', function () {
        var filterButton = document.querySelector('#filter-button');
        var allMoviesButton = document.querySelector('#Movies-button');
        filterButton.addEventListener('click', function () {
            var filteredMovies = movies.filter(function (movie) { return movie.rating >= 7; });
            renderMovies(filteredMovies);
        });
        allMoviesButton.addEventListener('click', function () {
            renderMovies(movies);
        });
        renderMovies(movies);
    });
}
main();
