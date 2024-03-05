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

public escribirEnFicheroJSON(nombreFichero:string)
{
    return fs.writeFileSync(nombreFichero, JSON.stringify(this.movies))
}

public obtenerInstanciaIMDB(nombreFichero:string):Imdb
{
    let read = fs.readFileSync(nombreFichero);
    read = JSON.parse(read)
    return(read)
}
}



