import { Profesional } from "./profesional";
import { Imdb } from "./imdb";
import { Movie } from "./Movie";
const readLineSync = require("readline-sync")

let name: string = readLineSync.question("Nombre ?")
let age: number = readLineSync.question("Edad ?")
let weight: number = readLineSync.question("Peso ?")
let height: number = readLineSync.question("Altura ?")
let isRetired: boolean = readLineSync.question("Retirado ?")
let nacionality: string = readLineSync.question("Nacionalidad ?")
let oscarsNumber: number = readLineSync.question("Oscars ?")
let profession: string = readLineSync.question("Profesion ?")

let addActor: Profesional = new Profesional(name, age, weight, height, isRetired, nacionality, oscarsNumber, profession)

let prueba: Imdb = new Imdb([]);
let prueba2: Imdb = prueba.obtenerInstanciaIMDB("imdbBBDD.json");
prueba2.movies[0].actors.push(addActor)
prueba2.escribirEnFicheroJSON("imdbBBDD2.json")









