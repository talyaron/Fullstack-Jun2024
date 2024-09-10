interface movie {
    title: string;
    year: Number;
    director: String;
    rating: Number;
    imageUrl: string
}

const movies: movie[] = [];

function main(): void {
    try {
        const theForm = document.querySelector('#the-form');
        if (!theForm) throw new Error('The form is not found');

        theForm.addEventListener('submit', handleSubmit);

    } catch (error) {
        console.error(error);

    }
}

function handleSubmit(event: Event) {
    try {

        event.preventDefault(); //prevent page reload

        console.dir(event.target);
        if(!(event.target instanceof HTMLFormElement)) throw new Error('The target is not a form');
        console.log(event.target.length);
        
        const form:any = event.target as HTMLFormElement;
        if(!form) throw new Error('The form is not found');

        
        const title = form.title.value;
        const year = form.year.value;
        const director = form.director.value;
        const rating = form.rating.value;
        const imageUrl = form.imageUrl.value;
        console.log(title, year, director, rating, imageUrl);
       
        movies.push({title, year, director, rating, imageUrl});
        
    } catch (error) {
        console.error(error);
        
    }
}

function renderMovie() {
    const moviesList = document.querySelector("#movies") as HTMLElement;
    moviesList.innerHTML = movies.map(displayMovie).join("");
}

function displayMovie(movie: movie) {
    return     `<<div class="movie">abc
                    <h1 class="title">${movie.title}</h1>
                    <h2 class="year">${movie.year}</h2>
                    <p class="director">${movie.director}</p>
                    <p class="rating">${movie.rating}</p>
                    <img class="imageUrl" src="${movie.imageUrl}" alt="">
                </div>`;






    

}