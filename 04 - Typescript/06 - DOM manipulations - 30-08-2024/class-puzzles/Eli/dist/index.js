var movies = [];
movies.push({
    title: "The Thing",
    year: 1982,
    genre: "Horror",
    rating: 9,
    imageUrl: "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/8qHe7US7GuZmC4FWuRKo5goPUSxSGR.jpg"
});
movies.push({
    title: "Saw",
    year: 2005,
    genre: "Horror",
    rating: 2,
    imageUrl: "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/8qHe7US7GuZmC4FWuRKo5goPUSxSGR.jpg"
});
movies.push({
    title: "The Thing",
    year: 1982,
    genre: "Horror",
    rating: 9,
    imageUrl: "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/8qHe7US7GuZmC4FWuRKo5goPUSxSGR.jpg"
});
function displayMovie(movie) {
    return "\n    <div class=\"movie-card\">\n        <img src=\"" + movie.imageUrl + "\" \" alt=\"" + movie.title + "\">\n        <h2> " + movie.title + "</h2>\n        <p>Genre :" + movie.genre + "</p>\n        Score :" + movie.rating + "\n    </div>\n    ";
}
function styleMovie(movie) {
    //const myElement = document.getElementsByClassName('movie-card');
    var imgElement = movie.querySelector('img');
    imgElement.style.width = "100%";
    movie.style.display = "flex";
    movie.style.flexDirection = "column";
    movie.style.textWrap = "no-wrap";
    movie.style.textAlign = "center";
    movie.style.width = "fit-content";
    movie.style.margin = "0 auto";
    movie.style.border = "solid black";
    movie.style.width = "10vw";
    movie.style.marginTop = "1vw";
    movie.style.fontSize = "1.5rem";
}
function displayMovies(movies) {
    return movies.map(displayMovie).join("");
}
function movieFilterByRating(movies) {
    try {
        var movieList = document.querySelector("div");
        if (!movieList)
            throw new Error("No div found");
        var goodMovies = movies.filter(function (movie) { return movie.rating > 7; });
        movieList.innerHTML = displayMovies(goodMovies);
        //movieList.appendChild(goodMovies)
        var movieCards = document.querySelectorAll(".movie-card");
        if (!movieCards)
            throw new Error("No cards found");
        movieCards.forEach(function (movieCard) {
            styleMovie(movieCard);
        });
    }
    catch (e) {
        console.log(e);
    }
}
movieFilterByRating(movies);
