interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
  }
  
 
  const movies: Movie[] = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, imageUrl: "https://th.bing.com/th/id/R.7d82d780b0679dba7737c24246e50818?rik=b2HcjJxLhtY3MA&pid=ImgRaw&r=0" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, imageUrl: "https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?rs=1&pid=ImgDetMain" },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, imageUrl: "https://th.bing.com/th/id/R.ba26a3fc831a0bb87736889e02172657?rik=uXyAdlOkXmrwnw&pid=ImgRaw&r=0" },
    { title: "Titanic", year: 1997, genre: "Romance", rating: 6.8, imageUrl: "https://th.bing.com/th/id/R.5ea1bb2d46c88bcabb0dd8912c09622e?rik=YaOOpRxFaXWv2g&pid=ImgRaw&r=0" },
    { title: "Avengers: Endgame", year: 2019, genre: "Action", rating: 8.4, imageUrl: "https://th.bing.com/th/id/R.7dbb9a342c1ba1f693a89ef0ddeea820?rik=RI6it1YCOk5b6Q&pid=ImgRaw&r=0" },
    { title: "The Lion King", year: 1994, genre: "Animation", rating: 8.5, imageUrl: "https://th.bing.com/th/id/R.a525ae353fecd569460a33735a04668a?rik=TMti3qvOJmPxyw&pid=ImgRaw&r=0" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9, imageUrl: "https://th.bing.com/th/id/OIP.z6bKjfyEmcYCRRPy4b0_KgHaLH?rs=1&pid=ImgDetMain" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" },
    { title: "Forrest Gump", year: 1994, genre: "Drama", rating: 7, imageUrl: "https://th.bing.com/th/id/R.4a84e29ff2095a33ebef8fcf899aba67?rik=5z%2fydJQ%2b%2bG5I9Q&pid=ImgRaw&r=0" },
    { title: "Joker", year: 2019, genre: "Drama", rating: 8.5, imageUrl: "https://th.bing.com/th/id/R.aa44d85767c9460cacb31863ad2b836f?rik=RogND83m8c7zqw&pid=ImgRaw&r=0" },
  ];
  
 function renderMovie(movie : Movie):string{
    return `
    <div class ="movie-card">
        <img src= "${movie.imageUrl}" alt=" ${movie.title}">
        <h2> ${movie.title}</h2>
        <h3> ${movie.year} </h3>
        <p> ${movie.genre} </p>
        <p> (raiting : ${movie.rating}) </p>
    </div>    
    `;
 }

function renderMovies(movies: Movie[]):string{
    return movies.map(renderMovie).join('');
}
function  getMoviesWithRatingAbove(rating:number):Movie[]{
    return movies.filter(movie => movie.rating >= rating);
}


function mainMovie(){
try{
    const movieList = document.querySelector('#movie')
    if(!movieList) throw new Error('Movie list not found');

    const highRatingMovies =  getMoviesWithRatingAbove(7);
    movieList.innerHTML=renderMovies(highRatingMovies);

}catch(error){
    console.log(error);
}

}
  
mainMovie();