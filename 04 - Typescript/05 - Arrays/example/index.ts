const obj = {
    key: 'value',
    KEY2: 'value2'

}

// array holds a lot of Elements
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log('numbers:', numbers);

// numbers.forEach((number:number, index:number) => console.log(`on element ${index} the number is: ${number}`) );
// console.log('check');
// numbers.forEach(printNumbers);
// function printNumbers(number:number, index:number) { console.log(`on element ${index} ${number * 10}`) }

// console.log('check');

// const strings: string[] = ['aaa', 'bbb', 'crr', 'ddd', 'eee'];

// const anythingGoes: any[] = [1, 'aaa', 2, 'bbb', 3, 'ccc'];

// anythingGoes.forEach((x) => console.log(`in the array are: ${x}`));

// const printStrings = (string:string, index:number) => console.log(`on element ${index} ${string}`) 
// strings.forEach(printStrings);

// const mixed: (string | number)[] = [1, 'aaa', 2, 'bbb', 3, 'ccc'];

// array of objects
interface Movie {
    name: string;
    year: number;
    director: string;
}

const movies: Movie[] = [
    {
        name: 'movie1',
        year: 1990,
        director: 'Spilberg'
    },
    {
        name: 'movie2',
        year: 1991,
        director: 'Tarantino'
    },
    {
        name: 'movie3',
        year: 1992,
        director: 'director3'
    },
    {
        name: 'movie4',
        year: 1993,
        director: 'director4'
    },
    {
        name: 'movie5',
        year: 1994,
        director: 'director5'
    },
    {
        name: 'movie6',
        year: 1995,
        director: 'director6'
    },
    {
        name: 'movie7',
        year: 1996,
        director: 'director7'
    },
    {
        name: 'movie8',
        year: 1997,
        director: 'director8'
    },
    {
        name: 'movie9',
        year: 1998,
        director: 'director9'
    },
    {
        name: 'movie10',
        year: 1999,
        director: 'director10'
    }
]

// console.log('movies:', movies);

// i want only movies before 1993
const moviesBefore1995:Movie[] = movies.filter((movie,i) => movie.year>1995);
console.log(moviesBefore1995);

const Try : Movie[] = movies.filter((element,index) => index === 7);
console.log(Try);



//write all directors of the movies
movies.forEach(writeMovieDetails);

function writeMovieDetails(movie: Movie) {
    console.log(`the movie director is ${movie.director}, and it produced in the year ${movie.year}`);
}

