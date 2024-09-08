var movies = [];
function main() {
    try {
        var theForm = document.querySelector('#the-form');
        if (!theForm)
            throw new Error("The Form is not found.");
        theForm.addEventListener('submit', handleSubmit);
    }
    catch (e) {
        console.error(e);
    }
}
function handleSubmit(event) {
    try {
        event.preventDefault();
        var form = event.target;
        if (!form)
            throw new Error("Form is not found.");
        var title = form.title.value;
        var year = form.year.value;
        var director = form.director.value;
        var rating = form.rating.value;
        var imageUrl = form.imageUrl.value;
        movies.push({ title: title, year: year, director: director, rating: rating, imageUrl: imageUrl });
        // console.log(movies) -- check if the array is working and it push .
        movies.sort(function (a, b) { return a.rating - b.rating; });
        renderMovies();
    }
    catch (e) {
        console.error(e);
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
        var divElement = document.getElementById("movies");
        if (!divElement)
            throw new Error("div Movies is not found.");
        divElement.innerHTML = movies.map(function (movies) {
            return " <li>\n               <h2>" + movies.title + "</h2>\n               <p>Year: " + movies.year + "</p>\n               <p>Director: " + movies.director + "</p>\n               <p>Rating: " + movies.rating + "</p>\n               <img src=\"" + movies.imageUrl + "\" alt=\"" + movies.title + "\" style=\"max-width: 200px; height: auto;\">\n               <button onclick=\"deleteMovie('" + movies.title + "')\">Delete Movie</button>\n                </li>";
        }).join('');
    }
    catch (e) {
        console.error(e);
    }
}
