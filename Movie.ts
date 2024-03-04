import { Profesional } from "./profesional";

export class Movie
{
    public title: string;
    public releaseYear: number;
    public actors: Profesional[];
    public nacionality: string;
    public director: Profesional;
    public writer: Profesional;
    public language: string;
    public plataforma: string;
    public IsMCU: boolean;
    public mainCharacterName: String;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.actors;
        this.nacionality = nacionality
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.IsMCU
        this.mainCharacterName
        this.producer
        this.distributor
        this.genre = genre;    
    }
    
    public toString(): string{
        
        let result: string = "Title: " + this.title +
        "\nreleaseYear: " + this.releaseYear +
        "\nactors:\n" 

            for (let i = 0; i< this.actors.length; i ++){
            result += this.actors[i].printAll() + "\n"
        }
        result += "Movie Nacionality: " + this.nacionality + 
        "\nDirector:\n" + 
        this.director.printAll() +
        "\nWriter:\n" +
        this.writer.printAll() +
        "\nLanguage: " + this.language +
        "\nPlataforma: " + this.plataforma +
        "\nIsMCU: " + this.IsMCU + 
        "\nMain character name: " + this.mainCharacterName +
        "\nProducer: " + this.producer +
        "\nDistributor: " + this.distributor + 
        "\nGenre: " + this.genre + "\n";  
        
        return(result)
    } 
   
}



