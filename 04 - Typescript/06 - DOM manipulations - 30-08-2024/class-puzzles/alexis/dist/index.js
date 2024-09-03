var movies = [
    {
        title: "Batman",
        year: 2008,
        genre: "action",
        rating: 9.5,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
    {
        title: "Iron Man",
        year: 2008,
        genre: "action",
        rating: 10,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlx_ZxZnn33pT4_Ydh5Z8ehzIm4x6FgE_Qw&s"
    },
    {
        title: "Captain America",
        year: 2011,
        genre: "action",
        rating: 9.5,
        imageUrl: "https://www.cnet.com/a/img/resize/8d159fb0c99a75843d3585dd2ae8cc9e6fa12773/hub/2017/08/03/75c3b0ae-5a2d-4d75-b72b-055247b4378f/marvelinfinitywar-captainamerica.jpg?auto=webp&fit=crop&height=1200&width=1200"
    },
    {
        title: "Quantum of Solace",
        year: 2008,
        genre: "action",
        rating: 10,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2d/Quantum_of_Solace_-_UK_cinema_poster.jpg"
    },
    {
        title: "Me time",
        year: 2008,
        genre: "action",
        rating: 6,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
    {
        title: "The switch",
        year: 2008,
        genre: "action",
        rating: 5,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
    {
        title: "Batman",
        year: 2008,
        genre: "action",
        rating: 5,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
    {
        title: "Batman",
        year: 2008,
        genre: "action",
        rating: 3,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
    {
        title: "Batman",
        year: 2008,
        genre: "action",
        rating: 8,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
    {
        title: "Batman",
        year: 2008,
        genre: "action",
        rating: 8,
        imageUrl: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
    },
];
function renderMovie(movie) {
    return "\n  <div class=\"movie\">\n    <h3>" + movie.title + "</h3>\n    <h3>" + movie.year + "</h3>\n    <h3>" + movie.rating + "</h3>\n    <h3>" + movie.genre + "</h3>\n    <img src=" + movie.imageUrl + " alt=" + movie.title + ">\n    </div>";
}
function renderMovies(movies) {
    return movies.map(renderMovie).join("");
}
function mainMovie(movies) {
    try {
        var moviesList = document.querySelector("#movies");
        if (!moviesList)
            throw new Error('MovieList not found');
        moviesList.innerHTML = renderMovies(movies);
    }
    catch (error) {
        console.error(error);
    }
}
mainMovie(movies);
