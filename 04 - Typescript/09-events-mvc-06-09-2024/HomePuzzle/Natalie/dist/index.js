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
        event.preventDefault(); //prevent page reload
        console.dir(event.target);
        if (!(event.target instanceof HTMLFormElement))
            throw new Error('The target is not a form');
        console.log(event.target.length);
        var form = event.target;
        if (!form)
            throw new Error('The form is not found');
        var title = form.title.value;
        var year = form.year.value;
        var director = form.director.value;
        var rating = form.rating.value;
        var imageUrl = form.imageUrl.value;
        console.log(title, year, director, rating, imageUrl);
        movies.push({ title: title, year: year, director: director, rating: rating, imageUrl: imageUrl });
    }
    catch (error) {
        console.error(error);
    }
}
function renderMovie() {
    var moviesList = document.querySelector("#movies");
    moviesList.innerHTML = movies.map(displayMovie).join("");
}
function displayMovie(movie) {
    return "<<div class=\"movie\">abc\n                    <h1 class=\"title\">" + movie.title + "</h1>\n                    <h2 class=\"year\">" + movie.year + "</h2>\n                    <p class=\"director\">" + movie.director + "</p>\n                    <p class=\"rating\">" + movie.rating + "</p>\n                    <img class=\"imageUrl\" src=\"" + movie.imageUrl + "\" alt=\"\">\n                </div>";
}
