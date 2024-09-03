var movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Forrest Gump", year: 1994, genre: "Drama", rating: 8.8, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Gladiator", year: 2000, genre: "Action", rating: 8.5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Lion King", year: 1994, genre: "Animation", rating: 6, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
];
var topRatedMovies = movies.filter(function (movie) { return movie.rating >= 7; });
function renderMovies(movies) {
    var moviesElement = document.querySelector("#movies");
    if (!moviesElement)
        throw new Error('Container not found');
    movies.forEach(function (movie) {
        var movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = "\n        <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\" class=\"movie-image\"/>\n        <h2>" + movie.title + "</h2>\n        <p>" + movie.genre + " (" + movie.year + ")</p>\n        <p>Rating: " + movie.rating + "</p>\n      ";
        moviesElement.appendChild(movieCard);
    });
}
renderMovies(topRatedMovies);
