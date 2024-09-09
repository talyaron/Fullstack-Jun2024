interface Movie {
    title:string,
    year: number,
    director: string,
    rating: number,
    imageUrl: string,
}

const movies:Movie[] = [];

function main() {
    try {
        const theForm = document.querySelector('#form');
        if (!theForm) throw new Error('The form is not found');

        theForm.addEventListener('submit', handleSubmit);

    } catch (error) {
        console.error(error);
    }
}


function handleSubmit(event: Event):void {
    try {
        event.preventDefault();

        const data = {}
        for (let i = 0; i >= (event.target.length -1); i++) {
            const inputElement = event.target[i] as HTMLInputElement;
            data[inputElement.name] = inputElement.value;
        };
        
        
        const form:any = event.target as HTMLFormElement;
        if(!form) throw new Error('The form is not found');
   
        const title = form.title.value;
        const year = form.year.value;
        const director = form.director.value;
        const rating = form.rating.value;
        const imageUrl = form.imageUrl.value;

        if(!title || !year || !director || !rating || !imageUrl) {
            throw new Error('All the fileds must be filled !');
        } else {
            movies.push({title, year, director, rating, imageUrl});
            form.reset();
        }

        sortMoviesByRating(movies);
        renderMovies(movies);
    } catch (error) {
        console.error(error);
        
    }
};

function sortMoviesByRating(movies:Movie[]):Movie[] {
    for (let i = 0; i < movies.length -1; i++) {
        if (movies[i].rating < movies[i + 1].rating) {
            const temp = movies[i];
            movies[i] = movies[i+1];
            movies[i+1] = temp;
        }
    }
    return movies;
};

// function deleteMovie(movies:Movie[]):Movie[] {

// }

function renderMovies(movies:Movie[]) {
    try {
        const movieItem = document.getElementById("movieItems") as HTMLUListElement;
        if (!movieItem) throw new Error("list item not found");
    
        movieItem.innerHTML = movies.map((item) => 
            `
            <img src="${item.imageUrl}"></>
            <h1>${item.title}</h1>
            <h1>${item.director}</h1>
            <h1>${item.year}</h1>
            <h1>${item.rating}</h1>
            <button>Remove Movie</button>`
    ).join('');
        } catch(e) {
            console.error(e);
        }
}