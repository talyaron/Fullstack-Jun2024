interface Movies {
    title: string,
    year: number,
    director: string,
    rating: string,
    imageURL: string
}

const moviesList: Movies[] = [];

function main() {
    try {
        const theForm = document.querySelector('#the-form');
        if (!theForm) throw new Error('Form isnt found');

        theForm.addEventListener('submit', handleSubmit);

    } catch (error) {
        console.error(error);
    }
}

function handleSubmit(event: Event) {
    try {
        event.preventDefault(); 

        const form = event.target as HTMLFormElement;
        if (!form) throw new Error('Form isnt found');


        const title = (form.querySelector('#title') as HTMLInputElement).value;
        const year = parseInt((form.querySelector('#year') as HTMLInputElement).value);
        const director = (form.querySelector('#director') as HTMLInputElement).value;
        const rating = (form.querySelector('#rating') as HTMLInputElement).value;
        const imageURL = (form.querySelector('input[name="imageUrl"]') as HTMLInputElement).value;

        const newMovie: Movies = { title, year, director, rating, imageURL };

        moviesList.push(newMovie);
        console.log("Movie added:", newMovie);


        form.reset();

        renderMovies();

    } catch (error) {
        console.error(error);
    }
}

function renderMovies() {
    const moviesContainer = document.querySelector('#movies-container') as HTMLElement;
    if (!moviesContainer) return;

    moviesContainer.innerHTML = '';

    moviesList.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <h3>${movie.title} (${movie.year})</h3>
            <p>director: ${movie.director}</p>
            <p>rate: ${movie.rating}/5</p>
            <img src="${movie.imageURL}" alt="${movie.title}" width="100">
        `;
        moviesContainer.appendChild(movieElement);
    });
}