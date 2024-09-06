var movies = [];
function main() {
    try {
        var formId = document.getElementById('the-form');
        if (!formId)
            throw new Error('Form not found');
        formId.addEventListener('submit', movieInput);
    }
    catch (e) {
        console.log(e);
    }
}
function movieInput(event) {
    event.preventDefault();
    var form = event.target;
    var title = form.title.value;
    var year = form.year.value;
    var author = form.author.value;
    var rating = form.rating.value;
    var imgUrl = form.imgUrl.value;
    if (title && year && author && rating && imgUrl) {
        movies.push({ name: title, year: year, author: author, rating: rating, imgUrl: imgUrl });
        movies.sort(function (a, b) { return b.rating - a.rating; });
    }
    renderMovies();
}
function deleteMovie(index) {
    if (index !== -1) {
        movies.splice(index, 1);
        renderMovies();
    }
}
function renderMovies() {
    var movieList = document.getElementById('movie-list');
    movieList.innerHTML = movies.map(function (movie) {
        return " <li>\n                <h2>" + movie.name + "</h2>\n                <p>Author: " + movie.author + "</p>\n                <p>Year: " + movie.year + "</p>\n                <p>Rating: " + movie.rating + "</p>\n                <img src=\"" + movie.imgUrl + "\" alt=\"" + movie.name + "\" style=\"max-width: 200px; height: auto;\">\n                <button onclick=\"deleteMovie('" + movie.name + "')\">Delete</button>\n                 </li>";
    }).join('');
}
