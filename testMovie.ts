import { Profesional } from "./profesional";
import { Movie } from "./Movie"

let profesional1 = new Profesional('Leonardo DiCaprio', 49, 85, 183, false, 'EEUU', 1, 'actor')
let profesional2 = new Profesional('Sacha Noam Baron Cohen', 42, 87, 191, false, 'England', 3, 'actor')
let profesional3 = new Profesional('Scarlett Ingrid Johansson', 39, 61, 160, false, 'EEUU', 2, 'actress')
let profesional4 = new Profesional('Alejandro Fernando Amenábar Cantos', 51, 61, 167, false, 'Chile', 1, 'director')
let profesional5 = new Profesional('Clinton «Clint» Eastwood Jr', 93, 61, 193, true, 'Chile', 5, 'writer')
let profesional6 = new Profesional('Mark Ruffalo', 56, 90, 173, false, 'EEUU', 0, 'actor');
let profesional7 = new Profesional('Martin Scorsese', 81, 79, 163, false, 'EEUU', 1, 'writer');
let profesional8 = new Profesional('Joe Russo', 52, 72, 179, false, 'EEUU', 0, 'director')

let movie1 = new Movie ("Shutter Island", 2010, "American", "Thriller");
movie1.actors = [profesional1, profesional6];
movie1.director = profesional7;
movie1.writer = profesional5;

let movie2 = new Movie ("Avengers", 2012, "American", "Science fiction");
movie2.actors = [profesional3, profesional6];
movie2.director = profesional8;
movie2.writer = profesional7;

let movie3 = new Movie ("BAli G", 2006, "English", "Comedy");
movie3.actors = [profesional2, profesional3];
movie3.director = profesional4;
movie3.writer = profesional5;

console.log(movie1.toString());
console.log(movie2.toString());
console.log(movie3.toString());