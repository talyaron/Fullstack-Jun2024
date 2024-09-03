
interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
  }

  const movies: Movie[] = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Forrest Gump", year: 1994, genre: "Drama", rating: 8.8, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Gladiator", year: 2000, genre: "Action", rating: 8.5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Lion King", year: 1994, genre: "Animation", rating: 6, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
    { title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3gHBABIpAS05r_-eI08z59J_mInyAzZGLg&s" },
  ];

  
  const topRatedMovies = movies.filter(movie => movie.rating >= 7);

  function renderMovies(movies: Movie[]) {
    const moviesElement = document.querySelector("#movies") as HTMLElement;
    if (!moviesElement) throw new Error('Container not found');
  
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("movies-grid");
  
    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
  
      movieCard.innerHTML = `
        <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image"/>
        <h2>${movie.title}</h2>
        <p>${movie.genre} (${movie.year})</p>
        <p>Rating: ${movie.rating}</p>
      `;
  
      gridContainer.appendChild(movieCard);
    });
  
    moviesElement.appendChild(gridContainer);
  }
  
  
  renderMovies(topRatedMovies);
  

  