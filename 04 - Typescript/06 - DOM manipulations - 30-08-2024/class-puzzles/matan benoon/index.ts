interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
  }


  const movies:Movie[]=[
    {

    title: 'harry Potter and the Philosopher',
    year: 1994,
    genre: 'comedy',
    rating: 4.5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3WdBkAhTwGZC1_KlB--QRmhp-ByvGNPsHw&s',

},
{

  title: 'Harry Wizard and the',
  year: 2002,
  genre: 'adventure',
  rating: 4,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDw9w-JnEZHtLlj9XGjv5Bu7Mti7FSbIgVOQ&s',

},
{

  title: 'harry potter and the author', 
  year: 1998,
  genre: 'drama',
  rating: 4.5,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VpAnM-mMe03CQBV9JrfjoorT4IxMON6Q7g&s',

},
{

  title: 'little men',
  year: 2008,
  genre: 'comedy',
  rating: 5,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5jo40vVFSwNTc8owCdNbYS6Zamg_17TkuA&s',

},
{

  title: 'Inception',
  year: 1988,
  genre: 'adventure',
  rating: 4,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst4d8lj72xNuuGSbj7e_UVZi2lQ86RC2FqQ&s',

},
{

  title: 'The Dark Knight',
  year: 2016,
  genre: 'drama',
  rating: 5,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi1arS70w_kXQTF-GctH3Vz_vXSLK3ZxHVQ&s',

},
{

  title: 'The Matrix',
  year: 2020,
  genre: 'adventure',
  rating: 2,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s',

},
{

  title: 'Forrest Gump',
  year: 2000,
  genre: 'comedy',
  rating: 4,
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',

},
{

  title: 'The Shawshank Redemption',
  year: 1999,
  genre: 'drama',
  rating: 3.5,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAORn2QCTSgeqnuHYdJgTKX_KrWX_tkzTF1Q&s',

},
{

  title: 'Pulp Fiction',
  year: 1994,
  genre: 'adventure',
  rating: 4.5,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyyXfzfMxM_gRX79-vLmr6d87CyzDijPG-A&s',

},

  ]

  function renderMovies(movies: Movie[]): void {
    try{
      const movieList = document.querySelector('#movies') as HTMLElement;
      if(!movieList) throw new Error('No movie container found');
  
      movies.forEach(movie => {
        const movieItem = document.createElement('div');
  
        movieItem.innerHTML = `
          <img src="${movie.imageUrl}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.year}</p>
          <p>${movie.genre}</p>
          <p class="rating">Rating: ${movie.rating}</p>
        `;
  
        movieItem.classList.add("movie-card");
        movieList.appendChild(movieItem);
  
      });
  
    } catch(e) {
      console.error(e);
    }

  }
  



  function getTopRatedMovies(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.rating >= 3.5);
  }


  const topRatedMovies = getTopRatedMovies(movies);
renderMovies(topRatedMovies);