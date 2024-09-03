interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
};

const movies:Movie[] = [
    { title: "Scarface", year: 1983, genre: "drama", rating: 9, imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2018/11/scarface_-_h_-_1983.jpg?w=1296&h=730&crop=1"},
    { title: "Pulp Fiction", year: 1990, genre: "Drama", rating: 8, imageUrl: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
    { title: "Joker", year: 2019, genre: "Crime", rating: 6, imageUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"},
    { title: "The notebook", year: 2020, genre: "Drama", rating: 3, imageUrl: "https://m.media-amazon.com/images/I/81WIhP1ca9L._AC_UF1000,1000_QL80_.jpg"},
];

function renderMovie(movie: Movie): string {
    return `
    <div class="movie-card">
        <img src="${movie.imageUrl}" alt="movie-imgae ${movie.title}" />
        <h1>${movie.title}</h1>
        <h2>${movie.genre}</h2>
        <h3>${movie.year}</h3>
        <h3>${movie.rating}</h3>
    </div>
    `;
};


function main(movies: Movie[]): void {
    try {
        const moviesListElement = document.querySelector('#movies');
        if (!moviesListElement) throw new Error('Movies list not found');

        const allMovies = movies.map(renderMovie).join('');

        moviesListElement.innerHTML = allMovies;
    } catch (error) {
        console.error(error);

    }
}

main(movies);