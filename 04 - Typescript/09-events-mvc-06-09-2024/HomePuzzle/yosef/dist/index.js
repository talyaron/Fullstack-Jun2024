var movies2 = [];
function main2() {
    try {
        var theForm = document.querySelector('#the_form');
        if (!theForm)
            throw new Error('The form is not found');
        theForm.addEventListener('submit', handleSubmit2);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmit2(event) {
    try {
        event.preventDefault();
        var form = event.target;
        if (!(event.target instanceof HTMLFormElement))
            throw new Error('The target is not a form');
        var form2 = event.target;
        if (!form)
            throw new Error('The form is not found');
        var title = form2.title.value;
        var year = form2.year.value;
        var director = form2.director.value;
        var rating = form2.rating.value;
        var imageUrl = form2.imageUrl.value;
        movies2.push({ title: title, year: year, director: director, rating: rating, imageUrl: imageUrl });
        console.log("the are: ", title, year, director, rating, imageUrl);
        console.log("movies have", movies2);
        render();
        form.reset();
    }
    catch (error) {
        console.log(error);
    }
}
function render() {
    try {
        var movieList = document.getElementById('the_movies');
        movieList.innerHTML = movies2.map(display).join('');
    }
    catch (error) {
        console.error(error);
    }
}
function deleteMovie(title) {
    try {
        movies2.splice(movies2.findIndex(function (movie) { return movie.title === title; }), 1);
        render();
        console.log(movies2);
    }
    catch (error) {
        alert("בעיה בפונקצית מחיקה");
    }
}
function display(movie) {
    return "\n        <div class=\"movie\">\n        <p>Movie name: " + movie.title + "</p>\n        <p>Year: " + movie.year + "</p>\n        <p>Director: " + movie.director + "</p>   \n        <p>Rating: " + movie.rating + "</p>\n        <img src=\"" + movie.imageUrl + "\" alt=\"pic_of_the_movie\">\n        <br/>\n        <button onclick=\"deleteMovie(" + movie.title + ")\">Delete Movie</button>\n         </div>";
}
function sortMovies() {
    movies2.sort(function (a, b) { return b.rating - a.rating; });
    render();
}
