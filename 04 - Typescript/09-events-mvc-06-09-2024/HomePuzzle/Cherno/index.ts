interface Movie
{
    title: string;
    year: number;
    director: string;
    rating: number;
    imageUrl: string;
}

const movies: Movie[] = [];


function main() 
{
    try 
    {
        const theForm = document.querySelector('#the-form');
        if (!theForm) throw new Error('The form is not found');

        theForm.addEventListener('submit', handleSubmit);
    } 
    catch (error) 
    {
        console.error(error);
    }
}

function handleSubmit(event: Event) 
{
    try
    {
        //prevent page reload
        event.preventDefault(); 

        const form:any = event.target as HTMLFormElement;
        if(!form) throw new Error('The form is not found');

        const title = form.title.value;
        const year = form.year.value;
        const director = form.director.value;
        const rating = form.rating.value;
        const imageUrl = form.imageUrl.value;

        // Set input of form elements to ""
        form.reset();

        movies.push({ title, year, director, rating, imageUrl });
        renderMovies();
    }
    catch (error) 
    {
        console.error(error);    
    }
}

function sortMovies()
{
    movies.sort((a, b) => b.rating - a.rating);
    renderMovies();
}

function deleteMovie(title: string)
{
    movies.splice(movies.findIndex(movie => movie.title === title), 1);
    renderMovies();
}

function renderMovies() 
{
    try 
    {
        const moviesList = document.querySelector('#movies');
        if (!moviesList) throw new Error('MovieList not found');
        moviesList.innerHTML = movies.map(displayMovie).join('');
    } 
    catch (error) 
    {
        console.error(error);
    }
}

function displayMovie(movie: Movie) 
{
    return `
        <box>
            <h2>${movie.title}</h2>
            <img src="${movie.imageUrl}" alt="${movie.title}">
            <p>Year: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Rating: ${movie.rating}</p>
            <button onclick="deleteMovie('${movie.title}')">Delete</button>
        </box>
    `;
}