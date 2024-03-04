import { Profesional } from "./profesional";
import { Movie } from "./Movie";

export class Imdb
{
    public movies: Movie []
    constructor(movies: Movie [])
    {
       this.movies = movies
    }
}

