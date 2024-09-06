interface Movies{
    name: string;
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
        console.log(error);
    }

}

function handleSubmit(event:Event):void{
try{
    event.preventDefault();

        const form:any = event.target as HTMLFormElement;
        if(!form) throw new Error('The form is not found');

        const title = form.title.value;
        const author = form.author.value;
        const year = form.year.value;
        const rating = form.rating.value;
        const imageUrl = form.imageUrl.value;
        console.log(title, author, year, rating, imageUrl);
    
        if(title && year && author&& rating && imageUrl){

            movies.push({ name: title, year: year, author: author, rating :rating, imageUrl:imageUrl });  
        }
       

        renderMovies()

    } catch (error) {
    console.error(error);
    
}
}


function deleteMovie(index: number): void {
    if (index !== -1) {
        movies.splice(index, 1);  
        renderMovies();  
    }
}

function renderMovies():void{
    try{
        const movieList = document.getElementById('movie-list') as HTMLElement;
        if(!movieList) throw new Error('Movie list not found');
        movieList.innerHTML = movies.map(movie =>
             ` <li>
                    <h2>${movie.name}</h2>
                    <p>Author: ${movie.author}</p>
                    <p>Year: ${movie.year}</p>
                    <p>Rating: ${movie.rating}</p>
                    <img src="${movie.imageUrl}" alt="${movie.name}">
                    <button onclick="deleteMovie('${movie.name}')">Delete</button>
                     </li>`).join('');
    }catch(error){
        console.error(error);
    }
    
    }