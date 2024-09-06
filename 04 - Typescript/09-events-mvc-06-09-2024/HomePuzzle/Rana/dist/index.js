var movies = [];
function main() {
    try {
        var allForm = document.querySelector('#all-form');
        if (!allForm)
            throw new Error('The form is not found');
        allForm.addEventListener('submit', handleSubmit);
    }
    catch (error) {
        console.log(error);
    }
}
function handleSubmit(event) {
    try {
        event.preventDefault();
        var form = event.target;
        if (!form)
            throw new Error('The form is not found');
        var title = form.title.value;
        var author = form.author.value;
        var year = form.year.value;
        var rating = form.rating.value;
        var imageUrl = form.imageUrl.value;
        console.log(title, author, year, rating, imageUrl);
        if (title && year && author && rating && imageUrl) {
            movies.push({ name: title, year: year, author: author, rating: rating, imageUrl: imageUrl });
        }
        renderMovies();
    }
    catch (error) {
        console.error(error);
    }
}
function deleteMovie(index) {
    if (index !== -1) {
        movies.splice(index, 1);
        renderMovies();
    }
}
function renderMovies() {
    try {
        var movieList = document.getElementById('movie-list');
        if (!movieList)
            throw new Error('Movie list not found');
        movieList.innerHTML = movies.map(function (movie) {
            return " <li>\n                    <h2>" + movie.name + "</h2>\n                    <p>Author: " + movie.author + "</p>\n                    <p>Year: " + movie.year + "</p>\n                    <p>Rating: " + movie.rating + "</p>\n                    <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.name + "\">\n                    <button onclick=\"deleteMovie('" + movie.name + "')\">Delete</button>\n                     </li>";
        }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
