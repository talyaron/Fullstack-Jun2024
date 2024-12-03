var movies = [];
function main() {
    try {
        var theForm = document.querySelector('#the-form');
        if (!theForm)
            throw new Error('The form is not found');
        theForm.addEventListener('submit', handleSubmit);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmit(event) {
    try {
        //prevent page reload
        event.preventDefault();
        var form = event.target;
        if (!form)
            throw new Error('The form is not found');
        var title = form.title.value;
        var year = form.year.value;
        var director = form.director.value;
        var rating = form.rating.value;
        var imageUrl = form.imageUrl.value;
        // Set input of form elements to ""
        form.reset();
        movies.push({ title: title, year: year, director: director, rating: rating, imageUrl: imageUrl });
        renderMovies();
    }
    catch (error) {
        console.error(error);
    }
}
function sortMovies() {
    movies.sort(function (a, b) { return b.rating - a.rating; });
    renderMovies();
}
function deleteMovie(title) {
    movies.splice(movies.findIndex(function (movie) { return movie.title === title; }), 1);
    renderMovies();
}
function renderMovies() {
    try {
        var moviesList = document.querySelector('#movies');
        if (!moviesList)
            throw new Error('MovieList not found');
        moviesList.innerHTML = movies.map(displayMovie).join('');
    }
    catch (error) {
        console.error(error);
    }
}
function displayMovie(movie) {
    return "\n        <box>\n            <h2>" + movie.title + "</h2>\n            <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\">\n            <p>Year: " + movie.year + "</p>\n            <p>Director: " + movie.director + "</p>\n            <p>Rating: " + movie.rating + "</p>\n            <button onclick=\"deleteMovie('" + movie.title + "')\">Delete</button>\n        </box>\n    ";
}
