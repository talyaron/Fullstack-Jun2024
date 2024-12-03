interface Movies{
    title: string;
    author: string;
    year: number;
    rating: number;
    imageUrl:string
}


const movies:Movies[]= [];

function main():void{
    try{
    const allForm = document.querySelector('#all-form');
    if (!allForm) throw new Error ('The form is not found');

    allForm.addEventListener('submit', handleSubmit);}

    catch (error){
        console.error(error);
    }

}

function handleSubmit(event:Event):void{
try{
    event.preventDefault();

        const form:any = event.target as HTMLFormElement;
        if(!form) throw new Error('The form is not found');

        const title = String (form.title.value);
        const author = form.author.value;
        const year = Number(form.year.value);
        const rating = Number(form.rating.value);
        const imageUrl = form.imageUrl.value;
        console.log(title, author, year, rating, imageUrl);
    
        if (!title || !author || !year || !rating || !imageUrl) {
            console.error('All fields must be filled');
            return;
        }
    
        movies.push({title, author, year, rating, imageUrl });
        movies.sort((a, b) => a.rating - b.rating);
        renderMovies();

    } catch (error) {
    console.error(error);
    
}
}


function deleteMovie(index: number): void {
    movies.splice(index, 1); 
    renderMovies();  
}


function renderMovies():void{
    try{
        const movieList = document.getElementById('movie-list') as HTMLElement;
        if(!movieList) throw new Error('Movie list not found');
        movieList.innerHTML = movies.map((movie,index) =>
             ` <li>
                    <h2>${movie.title}</h2>
                    <p>Author: ${movie.author}</p>
                    <p>Year: ${movie.year}</p>
                    <p>Rating: ${movie.rating}</p>
                    <img src="${movie.imageUrl}" alt="${movie.title}">
                    <button onclick="deleteMovie('${movie.title, index}')">Delete</button>
                     </li>`).join('');
    }catch(error){
        console.error(error);
    }
    
    }