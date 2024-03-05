import { Profesional } from "./profesional";
import { Movie } from "./Movie";
const fs = require("fs")




export class Imdb
{
    public movies: Movie []
    constructor(movies: Movie [])
    {
       this.movies = movies
    }
    public escribirEnFicheroJSON(nombreFichero: string)
    {
     fs.writeFileSync(nombreFichero,JSON.stringify(this.movies))
    }
    public obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
    let read: any = fs.readFileSync(nombreFichero);         
    let instancia: Imdb = JSON.parse(read)
    let resultado: Imdb = new Imdb(instancia.movies)
    return resultado
    }
}

