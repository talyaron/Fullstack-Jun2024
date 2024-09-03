//model
interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
}

const Movies: Movie[] = [

    { title: 'sport hdamim', year: 1988, genre: "action", rating: 200, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
    { title: 'The Shawshank Redemption', year: 1994, genre: "crime", rating: 100, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
    { title: 'The Godfather', year: 1972, genre: "crime", rating: 150, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },
    { title: 'Pulp Fiction', year: 1994, genre: "crime", rating: 180, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg' },

]

//view
function CreateMovie(Movie: Movie): string {
    return `
    <div class="movie">
    <p>the movie: ${Movie.title}</p>
    <p>the year: ${Movie.year}</p>
    <p>the genre: ${Movie.genre}</p>
    <p>the rating: ${Movie.rating}</p>
    <img src="${Movie.imageUrl}" alt="${Movie.title}">
    </div>`;
}



function renderMovies(Movies: Movie[]): string {
    return Movies.map(CreateMovie).join('');
}

//controller

function main(): void {
    try {
        const moviesContainer = document.querySelector('#movies') as HTMLDivElement;
        if (!moviesContainer) throw new Error('movies container not found');

        moviesContainer.innerHTML = renderMovies(Movies);

    }
    catch (err) {
        console.error(err);
    }
}

main();





