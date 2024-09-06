interface Movies{
    name: string;
    author: string;
    year: number;
    rating: number;
    imgUrl:string
}


const movies:Movies[]= [];

function main():void{

    try{
    const formId = document.getElementById('the-form') as HTMLFormElement;
    if(!formId) throw new Error('Form not found');

    formId.addEventListener('submit', movieInput  )

    }catch(e){
        console.log(e);
}
}



function movieInput(event:Event):void{
    event.preventDefault();
    const form:any = event.target as HTMLFormElement;

    const title = form.title.value;
        const year = form.year.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const imgUrl = form.imgUrl.value;


    if(title && year && author&& rating && imgUrl){

        movies.push({ name: title, year, author, rating, imgUrl });

        movies.sort((a, b) => b.rating - a.rating);

        
    }

    renderMovies()

}


function deleteMovie(movieName: string): void {
    const index = movies.findIndex(movie => movie.name === movieName);
    if (index !== -1) {
        movies.splice(index, 1); 
        renderMovies();
    }
}


function renderMovies():void{

    const movieList = document.getElementById('movie-list') as HTMLElement;
    movieList.innerHTML = movies.map(movie =>
         ` <li>
                <h2>${movie.name}</h2>
                <p>Author: ${movie.author}</p>
                <p>Year: ${movie.year}</p>
                <p>Rating: ${movie.rating}</p>
                <img src="${movie.imgUrl}" alt="${movie.name}" style="max-width: 200px; height: auto;">
                <button onclick="deleteMovie('${movie.name}')">Delete</button>
                 </li>`).join('');
}


