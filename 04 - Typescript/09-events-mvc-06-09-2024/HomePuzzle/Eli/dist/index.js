var movies = [
    {
        title: "Batman Returns",
        director: "Tim Burton",
        year: 1992,
        rating: 4,
        imgUrl: "https://i.ebayimg.com/images/g/BYsAAOSwyP1jPuLP/s-l1600.webp"
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 5,
        imgUrl: "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_SL1500_.jpg"
    },
    {
        title: "Spider-Man",
        director: "Sam Raimi",
        year: 2002,
        rating: 3,
        imgUrl: "https://i.ebayimg.com/images/g/FQUAAOSwt9JgOARA/s-l1600.webp"
    },
];
function main() {
    try {
        var formElement = document.getElementById("form");
        if (!formElement)
            throw new Error("form not found");
        formElement.addEventListener("submit", movieInput);
        var sortButton = document.getElementById("sortButton");
        if (!sortButton)
            throw new Error("sort not found");
        sortButton.addEventListener("click", function (event) {
            sortByRating(event);
        });
        renderMovies(movies);
    }
    catch (e) {
        console.log(e);
    }
}
function movieInput(event) {
    try {
        event.preventDefault();
        var form = event.target;
        if (!form)
            throw new Error("Form not found");
        var _title = form.title.value;
        var _year = form.year.value;
        var _director = form.director.value;
        var _rating = form.rating.value;
        var _imgUrl = form.imgUrl.value;
        if (_title && _year && _director && _rating && _imgUrl) {
            movies.push({
                title: _title,
                year: _year,
                director: _director,
                rating: _rating,
                imgUrl: _imgUrl
            });
        }
        renderMovies(movies);
    }
    catch (e) {
        console.log(e);
    }
}
function renderMovies(movies) {
    try {
        var moviesElement = document.getElementById("movies");
        if (!moviesElement)
            throw new Error("movies not found");
        moviesElement.innerHTML = movies
            .map(function (movie, index) {
            return "<div class=\"movie\">\n              <img src=\"" + movie.imgUrl + "\" alt=\"" + movie.title + "\" />\n              <h3>" + movie.title + "</h3>\n              <p>Director: " + movie.director + "</p>\n              <p>Year: " + movie.year + "</p>\n              <p>Rating: " + movie.rating + "</p>\n              <button class = \"delBtn\" onclick=\"deleteMovie(" + index + ")\">Delete</button>\n            </div>";
        })
            .join("");
    }
    catch (e) {
        console.log(e);
    }
}
function sortByRating(event) {
    try {
        event.preventDefault();
        movies.sort(function (a, b) { return a.rating - b.rating; });
        renderMovies(movies);
    }
    catch (e) {
        console.log(e);
    }
}
function deleteMovie(index) {
    movies.splice(index, 1);
    renderMovies(movies);
}
console.log(movies);
