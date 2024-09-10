interface movie
{
    title: string;
    year: number;
    director: string;
    rating: number;
    imageUrl: string;
}
const movies2 : movie[] = [];

function main2() {
    try {
    const theForm = document.querySelector('#the_form');
    if (!theForm) throw new Error('The form is not found');

    theForm.addEventListener('submit', handleSubmit2);
    
    
    }
    catch (error) {
        console.error(error);
    }
}

function handleSubmit2(event: Event) {
    try{
        event.preventDefault(); 
           const form:any = event.target as HTMLFormElement;

           if(!(event.target instanceof HTMLFormElement)) 
            throw new Error('The target is not a form');

            const form2:any = event.target as HTMLFormElement;
            if(!form) throw new Error('The form is not found');
    
            
            const title = form2.title.value;
            const year = form2.year.value;
            const director = form2.director.value;
            const rating = form2.rating.value;
            const imageUrl = form2.imageUrl.value;
            movies2.push({title, year,director, rating, imageUrl});
            console.log("the are: " , title, year, director, rating, imageUrl);
            console.log("movies have" , movies2);
            render();
            form.reset();
           
        }
        catch (error) {
            console.log(error);
        }

       
    }

function render() : void {
    try{
    
    const movieList = document.getElementById('the_movies') as HTMLElement;
    movieList.innerHTML = movies2.map(display).join('');
    }
    catch (error) {
        console.error(error);
    }
}

function deleteMovie(title: string) {
    try{

    movies2.splice(movies2.findIndex(movie => movie.title === title),1);
    render();
    console.log(movies2);

}

catch (error) {
    alert("בעיה בפונקצית מחיקה")
}
}

function display (movie:movie){
    return `
        <div class="movie">
        <p>Movie name: ${movie.title}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>   
        <p>Rating: ${movie.rating}</p>
        <img src="${movie.imageUrl}" alt="pic_of_the_movie">
        <br/>
        <button onclick="deleteMovie(${movie.title})">Delete Movie</button>
         </div>`;
}

function sortMovies()
{
    movies2.sort((a, b) => b.rating - a.rating);
    render();
}
