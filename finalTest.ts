import { Imdb } from "./imdb";
import { Movie } from "./Movie";
import { Profesional } from "./profesional";
const readLineSync = require("readFileSync")

let name = readLineSync("¿Cómo te llamas");

let objeto1 = new Profesional(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string,
    oscarsNumber: number, profession: string )