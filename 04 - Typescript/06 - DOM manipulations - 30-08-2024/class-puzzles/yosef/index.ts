interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
  }

 const Movies : Movie[] = [

    {title: 'sport hdamim', year: 1988, genre: "action", rating:200, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg'},
    {title: 'The Shawshank Redemption', year: 1994, genre: "crime", rating:100, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg'},
    {title: 'The Godfather', year: 1972, genre: "crime", rating:150, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg'},
    {title: 'Pulp Fiction', year: 1994, genre: "crime", rating:180, imageUrl: 'https://img.mako.co.il/2022/02/16/jeanclaudevanamme_autoOrient_i.jpg'},

  ]

function CreateMovie (Movie : Movie) : String {
    return `
    <div class="movie">
    <p>the movie: ${Movie.title}</p>
    <p>the year: ${Movie.year}</p>
    <p>the genre: ${Movie.genre}</p>
    <p>the rating: ${Movie.rating}</p>
    <img src="${Movie.imageUrl}" alt="${Movie.title}">
    </div>`;
}

console.log(Movies);

function CreateMovies (Movies : Movie []): String{
return Movies.map(CreateMovie(Movies)).join('');
}


// function renderComputers(computers: Computer[]): string {
//     return computers.map(renderComputer).join('');
// }

// function renderComputer(computer: Computer): string {
//     return `
//     <div class="computer-card">
//         <img src="${computer.imageUrl}" alt="${computer.name}">
//         <h2>${computer.name}</h2>
//         <p>${computer.price}</p>
//         ${computer.sale ? '<p class="sale">On Sale</p>' : ''}
//     </div>`;
// }


function main() : void {
    try{
    const movies_contener = document.querySelector('movies');
    if (!movies_contener) throw new Error('movies container not found');

    movies_contener.innerHTML = CreateMovies(Movies);
 
    }
    catch(err){
        console.error(err);
    }
}





