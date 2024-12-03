var movies = [];
function main() {
    var form = getFormElement();
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleFormSubmit);
}
function getFormElement() {
    return document.querySelector("#the-form");
}
function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var movie = extractMovieData(form);
    if (movie) {
        movies.push(movie);
        clearForm(form);
        renderMovies();
    }
}
function extractMovieData(form) {
    try {
        var title = form.elements.namedItem("title").value.trim();
        var year = parseInt(form.elements.namedItem("year").value, 10);
        var director = form.elements.namedItem("director").value.trim();
        var rating = parseFloat(form.elements.namedItem("rating").value);
        var imageUrl = form.elements.namedItem("imageUrl").value.trim();
        if (isValidMovieData({ title: title, year: year, director: director, rating: rating, imageUrl: imageUrl })) {
            return { title: title, year: year, director: director, rating: rating, imageUrl: imageUrl };
        }
        throw new Error("Invalid movie data");
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function isValidMovieData(movie) {
    return (movie.title.length > 0 &&
        movie.year >= 1880 &&
        movie.director.length > 0 &&
        movie.rating >= 1 &&
        movie.rating <= 5 &&
        movie.imageUrl.length > 0);
}
function clearForm(form) {
    form.reset();
}
function renderMovies() {
    var movieList = document.getElementById("movies");
    if (movieList) {
        movieList.innerHTML = movies.map(generateMovieHTML).join("");
    }
    else {
        console.error("Movie list element not found");
    }
}
function generateMovieHTML(movie) {
    return "\n    <div class=\"movie\">\n      <h3>" + movie.title + "</h3>\n      <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\" width=\"150\">\n      <p>Year: " + movie.year + "</p>\n      <p>Director: " + movie.director + "</p>\n      <p>Rating: " + movie.rating + "</p>\n      <button onclick=\"deleteMovie('" + movie.title + "')\">Delete</button>\n    </div>\n  ";
}
function deleteMovie(title) {
    var movieIndex = movies.findIndex(function (movie) { return movie.title === title; });
    if (movieIndex > -1) {
        movies.splice(movieIndex, 1);
        renderMovies();
    }
}
window.onload = main;
