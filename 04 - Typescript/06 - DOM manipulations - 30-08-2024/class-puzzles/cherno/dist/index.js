var movies = [
    { title: 'Baby Driver', year: 2017, genre: 'crime action', rating: 9, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIChP9VCRCO5Iqkass_vv4PVj6vfevPnfKg&s' },
    { title: 'Inception', year: 2010, genre: 'sci-fi thriller', rating: 8.5, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg' },
    { title: 'The Dark Knight', year: 2008, genre: 'action', rating: 8, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s' },
    { title: 'Suicide Squad', year: 2016, genre: 'action', rating: 6, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtbAKXvjIAQygsTPT4hqIaqBW5Idnw8lypw&s' },
    { title: 'Django Unchained', year: 2012, genre: 'western', rating: 9.5, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg' },
    { title: 'The Room', year: 2003, genre: 'drama', rating: 2, imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2IwYzc4MjEtMzJlMS00MDJlLTkzNDAtN2E4NGNkZjg0MDgxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL75_UY281_CR3,0,190,281_.jpg' }
];
function renderMovie(movie) {
    return "\n    <div class=\"movie-card\">\n        <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\">\n        <h2>" + movie.title + "</h2>\n        <p>" + movie.genre + " film from the year " + movie.year + "</p>\n        <footer>" + movie.rating + "/10</footer>\n    </div>\n    ";
}
function renderMovies(movies) {
    return movies.map(renderMovie).join('');
}
function getGoodMovies() {
    return movies.filter(function (movie) { return movie.rating >= 7; });
}
function sortedMovies() {
    return movies.sort(function (movieA, movieB) { return movieB.rating - movieA.rating; });
}
function main() {
    try {
        var moviesElement = document.querySelector('#movies');
        if (!moviesElement)
            throw new Error('movies element not found');
        moviesElement.innerHTML = renderMovies(sortedMovies());
    }
    catch (e) {
        console.log(e);
    }
}
main();
