//models

interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
    imageUrl: string;
}

const movies: Movie[] = [
    {title: 'Movie Name1', year: 1994, genre: 'Drama', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name2', year: 1995, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name3', year: 1985, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name4', year: 1987, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name5', year: 1995, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name6', year: 1988, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name7', year: 1999, genre: 'Drama', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name8', year: 1982, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name9', year: 1995, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'},
    {title: 'Movie Name10', year: 1996, genre: 'Comedy', rating: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/he/d/d3/%D7%97%D7%95%D7%9E%D7%95%D7%AA_%D7%A9%D7%9C_%D7%AA%D7%A7%D7%95%D7%95%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg'}
];

//views

function renderMovie(movies: Movie): any {
    return `<a herf="${Movie.title}>${movies.year}"</a>`;

}

function renderMovie(movies: Movie[]): any {
    return movies.map(renderMovie).join('');

}



console.log(renderMovie(movies));

//controllers

function main() {
    try {
        const movieList = document.querySelector('#movieList');
        if (!movieList) throw new Error ('Movie not found');

            movieList.innerHTML = renderMovie(movieList)

    } catch (error) {
        console.log(error);
        
    }

}

main();