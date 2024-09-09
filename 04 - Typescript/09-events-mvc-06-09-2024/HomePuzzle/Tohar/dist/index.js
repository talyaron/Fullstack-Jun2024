var movies = [];
function main() {
    try {
        var theForm = document.querySelector('#form');
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
        event.preventDefault();
        var data = {};
        for (var i = 0; i >= (event.target.length - 1); i++) {
            var inputElement = event.target[i];
            data[inputElement.name] = inputElement.value;
        }
        ;
        var form = event.target;
        if (!form)
            throw new Error('The form is not found');
        var title = form.title.value;
        var year = form.year.value;
        var director = form.director.value;
        var rating = form.rating.value;
        var imageUrl = form.imageUrl.value;
        if (!title || !year || !director || !rating || !imageUrl) {
            throw new Error('All the fileds must be filled !');
        }
        else {
            movies.push({ title: title, year: year, director: director, rating: rating, imageUrl: imageUrl });
            form.reset();
        }
        sortMoviesByRating(movies);
        renderMovies(movies);
    }
    catch (error) {
        console.error(error);
    }
}
;
function sortMoviesByRating(movies) {
    for (var i = 0; i < movies.length - 1; i++) {
        if (movies[i].rating < movies[i + 1].rating) {
            var temp = movies[i];
            movies[i] = movies[i + 1];
            movies[i + 1] = temp;
        }
    }
    return movies;
}
;
// function deleteMovie(movies:Movie[]):Movie[] {
// }
function renderMovies(movies) {
    try {
        var movieItem = document.getElementById("movieItems");
        if (!movieItem)
            throw new Error("list item not found");
        movieItem.innerHTML = movies.map(function (item) {
            return "\n            <img src=\"" + item.imageUrl + "\"></>\n            <h1>" + item.title + "</h1>\n            <h1>" + item.director + "</h1>\n            <h1>" + item.year + "</h1>\n            <h1>" + item.rating + "</h1>\n            <button>Remove Movie</button>";
        }).join('');
    }
    catch (e) {
        console.error(e);
    }
}
