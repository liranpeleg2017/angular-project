
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database/database.service"
import { MovieComponent  } from "../movie/movie.component";
import { Subscriber } from 'rxjs/Subscriber';
import { Movie } from "../../models/movie.interface";
import {GlobalService} from '../../services/global/global.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];
  
  loading:boolean = true;

  constructor(private databaseService: DatabaseService,private globalService: GlobalService ) {
   
  

   }

  ngOnInit()
  {
    // this.databaseService.GetMovies()
    // .then(data => this.movies = data)
    // .catch(reason => console.log(reason));
    
    this.GetStarWarsMovies();

    
  }

  public GetMovies(): Promise<string[]>{


      return this.databaseService.GetMovies();
  }

  public GetStarWarsMovies(){

       this.loading = true;
      
      return this.databaseService.GetStarWarsMovies()
                      .subscribe(data => {

                        this.movies = data;
                        
                        this.loading = false;

                        this.globalService.data.push(this.movies);

                      },
                      
                      (err : Error) => {
                      
                        alert(`movies.list.component.ts: ${err}`);

                      
                      }
                      
                      );
  }

}
