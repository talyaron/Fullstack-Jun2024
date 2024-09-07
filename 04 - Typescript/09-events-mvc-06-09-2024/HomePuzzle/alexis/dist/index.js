var movies = [];
var movie;
function main() {
    try {
        var theForm = document.querySelector("#the-form");
        if (!theForm)
            throw new Error("The form is not found");
        theForm.addEventListener("submit", handleSubmit);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmit(event) {
    try {
        event.preventDefault(); //prevent page reload
        console.dir(event.target);
        if (!(event.target instanceof HTMLFormElement))
            throw new Error("The target is not a form");
        console.log(event.target.length);
        var form = event.target;
        if (!form)
            throw new Error("The form is not found");
        movie = {
            title: form.title.value,
            year: form.year.value,
            director: form.director.value,
            rating: form.rating.value,
            imageUrl: form.imageUrl.value
        };
        form.reset();
        movies.push(movie);
        console.log(movies);
        sortMovies(movies);
        renderMovies();
    }
    catch (error) {
        console.error(error);
    }
}
function sortMovies(movies) {
    var sorted = movies.sort(function (a, b) { return a.rating - b.rating; });
    return sorted;
}
function renderMovies() {
    var moviesList = document.querySelector("#movies");
    moviesList.innerHTML = movies.map(displayMovie).join("");
}
function displayMovie(movie) {
    return "   <div class=\"movie\">\n      <h2>" + movie.title + "</h2>\n      <p>Year: " + movie.year + "</p>\n      <p>Director: " + movie.director + "</p>\n      <p>Rating: " + movie.rating + "</p>\n      <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\" />\n    </div>";
}
