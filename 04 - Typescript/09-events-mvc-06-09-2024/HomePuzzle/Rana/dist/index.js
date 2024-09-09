var movies = [];
function main() {
    try {
        var allForm = document.querySelector('#all-form');
        if (!allForm)
            throw new Error('The form is not found');
        allForm.addEventListener('submit', handleSubmit);
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
            throw new Error('The form is not found');
        var title = String(form.title.value);
        var author = form.author.value;
        var year = Number(form.year.value);
        var rating = Number(form.rating.value);
        var imageUrl = form.imageUrl.value;
        console.log(title, author, year, rating, imageUrl);
        if (!title || !author || !year || !rating || !imageUrl) {
            console.error('All fields must be filled');
            return;
        }
        movies.push({ title: title, author: author, year: year, rating: rating, imageUrl: imageUrl });
        movies.sort(function (a, b) { return a.rating - b.rating; });
        renderMovies();
    }
    catch (error) {
        console.error(error);
    }
}
function deleteMovie(index) {
    movies.splice(index, 1);
    renderMovies();
}
function renderMovies() {
    try {
        var movieList = document.getElementById('movie-list');
        if (!movieList)
            throw new Error('Movie list not found');
        movieList.innerHTML = movies.map(function (movie, index) {
            return " <li>\n                    <h2>" + movie.title + "</h2>\n                    <p>Author: " + movie.author + "</p>\n                    <p>Year: " + movie.year + "</p>\n                    <p>Rating: " + movie.rating + "</p>\n                    <img src=\"" + movie.imageUrl + "\" alt=\"" + movie.title + "\">\n                    <button onclick=\"deleteMovie('" + (movie.title, index) + "')\">Delete</button>\n                     </li>";
        }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
