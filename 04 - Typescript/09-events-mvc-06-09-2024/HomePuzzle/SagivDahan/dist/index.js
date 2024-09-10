var moviesList = [];
function main() {
    try {
        var theForm = document.querySelector('#the-form');
        if (!theForm)
            throw new Error('Form isnt found');
        theForm.addEventListener('submit', handleSubmit);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmit(event) {
    try {
        event.preventDefault();
        var form = event.target;
        if (!form)
            throw new Error('Form isnt found');
        var title = form.querySelector('#title').value;
        var year = parseInt(form.querySelector('#year').value);
        var director = form.querySelector('#director').value;
        var rating = form.querySelector('#rating').value;
        var imageURL = form.querySelector('input[name="imageUrl"]').value;
        var newMovie = { title: title, year: year, director: director, rating: rating, imageURL: imageURL };
        moviesList.push(newMovie);
        console.log("Movie added:", newMovie);
        form.reset();
        renderMovies();
    }
    catch (error) {
        console.error(error);
    }
}
function renderMovies() {
    var moviesContainer = document.querySelector('#movies-container');
    if (!moviesContainer)
        return;
    moviesContainer.innerHTML = '';
    moviesList.forEach(function (movie) {
        var movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = "\n            <h3>" + movie.title + " (" + movie.year + ")</h3>\n            <p>director: " + movie.director + "</p>\n            <p>rate: " + movie.rating + "/5</p>\n            <img src=\"" + movie.imageURL + "\" alt=\"" + movie.title + "\" width=\"100\">\n        ";
        moviesContainer.appendChild(movieElement);
    });
}
