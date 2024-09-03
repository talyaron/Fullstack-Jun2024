var Movies = [
    { title: 'sport hdamim', year: 1988, genre: "action", rating: 200, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
    { title: 'The Shawshank Redemption', year: 1994, genre: "crime", rating: 100, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
    { title: 'The Godfather', year: 1972, genre: "crime", rating: 150, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
    { title: 'Pulp Fiction', year: 1994, genre: "crime", rating: 180, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
];
//view
function CreateMovie(Movie) {
    return "\n    <div class=\"movie\">\n    <p>the movie: " + Movie.title + "</p>\n    <p>the year: " + Movie.year + "</p>\n    <p>the genre: " + Movie.genre + "</p>\n    <p>the rating: " + Movie.rating + "</p>\n    <img src=\"" + Movie.imageUrl + "\" alt=\"" + Movie.title + "\">\n    </div>";
}
function renderMovies(Movies) {
    return Movies.map(CreateMovie).join('');
}
//controller
function main() {
    try {
        var moviesContainer = document.querySelector('#movies');
        if (!moviesContainer)
            throw new Error('movies container not found');
        moviesContainer.innerHTML = renderMovies(Movies);
    }
    catch (err) {
        console.error(err);
    }
}
main();
