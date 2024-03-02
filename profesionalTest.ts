import { Profesional } from "./profesional";


let profesional1 = new Profesional('Leonardo DiCaprio', 49, 85, 183, false, 'EEUU', 1, 'actor')
console.log(profesional1.printAll());

let profesional2 = new Profesional('Sacha Noam Baron Cohen', 42, 87, 191, false, 'England', 3, 'actor')
console.log(profesional2.printAll());

let profesional3 = new Profesional('Scarlett Ingrid Johansson', 39, 61, 160, false, 'EEUU', 2, 'actress')
console.log(profesional3.printAll());

let profesional4 = new Profesional('Alejandro Fernando Amenábar Cantos', 51, 61, 167, false, 'Chile', 1, 'director')
console.log(profesional4.printAll());

let profesional5 = new Profesional('Clinton «Clint» Eastwood Jr', 93, 61, 193, true, 'Chile', 5, 'director')
console.log(profesional5.printAll());

