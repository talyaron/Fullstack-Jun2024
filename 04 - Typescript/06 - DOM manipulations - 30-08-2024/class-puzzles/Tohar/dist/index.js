;
var movies = [
    { title: "Scarface", year: 1983, genre: "drama", rating: 9, imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2018/11/scarface_-_h_-_1983.jpg?w=1296&h=730&crop=1" },
    { title: "Pulp Fiction", year: 1990, genre: "Drama", rating: 8, imageUrl: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" },
    { title: "Joker", year: 2019, genre: "Crime", rating: 6, imageUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
    { title: "The notebook", year: 2020, genre: "Drama", rating: 3, imageUrl: "https://m.media-amazon.com/images/I/81WIhP1ca9L._AC_UF1000,1000_QL80_.jpg" },
];
function renderMovie(movie) {
    return "\n    <div class=\"movie-card\">\n        <img src=\"" + movie.imageUrl + "\" alt=\"movie-imgae " + movie.title + "\" />\n        <h1>" + movie.title + "</h1>\n        <h2>" + movie.genre + "</h2>\n        <h3>" + movie.year + "</h3>\n        <h3>" + movie.rating + "</h3>\n    </div>\n    ";
}
;
function main(movies) {
    try {
        var moviesListElement = document.querySelector('#movies');
        if (!moviesListElement)
            throw new Error('Movies list not found');
        var allMovies = movies.map(renderMovie).join('');
        moviesListElement.innerHTML = allMovies;
    }
    catch (error) {
        console.error(error);
    }
}
main(movies);
