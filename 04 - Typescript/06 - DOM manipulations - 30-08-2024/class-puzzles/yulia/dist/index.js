var movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 9,
        imageUrl: "https://picsum.photos/200/300?random=1"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9,
        imageUrl: "https://picsum.photos/200/300?random=2"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8,
        imageUrl: "https://picsum.photos/200/300?random=3"
    },
    {
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        rating: 8,
        imageUrl: "https://picsum.photos/200/300?random=4"
    },
    {
        title: "Joker",
        year: 2019,
        genre: "Drama",
        rating: 8.5,
        imageUrl: "https://picsum.photos/200/300?random=5"
    },
    {
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8,
        imageUrl: "https://picsum.photos/200/300?random=6"
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 9,
        imageUrl: "https://picsum.photos/200/300?random=7"
    },
    {
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        rating: 8.5,
        imageUrl: "https://picsum.photos/200/300?random=8"
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        rating: 9,
        imageUrl: "https://picsum.photos/200/300?random=9"
    },
    {
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
        imageUrl: "https://picsum.photos/200/300?random=10"
    },
];
function renderMovie(movie) {
    return "\n    <div class=\"movie-card\">\n      <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\">\n      <h3>" + movie.title + "</h3>\n      <p>Year: " + movie.year + "</p>\n      <p>Genre: " + movie.genre + "</p>\n      <p>Rating: " + movie.rating + "</p>\n    </div>\n  ";
}
function renderMovies(movies) {
    return movies.map(renderMovie).join("");
}
function mainMovies() {
    try {
        var movieList = document.querySelector("#movie-list");
        if (!movieList)
            throw new Error("Movie list not found");
        movieList.innerHTML = renderMovies(movies);
    }
    catch (error) {
        console.error(error);
    }
}
mainMovies();
