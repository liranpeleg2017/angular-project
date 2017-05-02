import { Injectable } from '@angular/core';
import { Observable,Subscribable } from 'rxjs/Observable';
import { Http ,Response } from "@angular/http";
import { Movie } from "app/models/movie.interface";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class DatabaseService {

  constructor(private http :Http) { 


  }

  public GetMovies() : Promise<string[]>{

    return Promise.resolve(["StarWars","James Bond"]);
  
  }

  public GetStarWarsMovies() :  Observable<Movie[]>{

    return this.http.get("http://swapi.co/api/films/?format=json")
    .map((res:Response) => res.json().results )
    .catch( this.handleError);
    
    
  }

  

    public GetMoviesRx() : Observable<any> {

          let p = new Observable((subscriber:any) => {

                subscriber.next(["StarWars","James Bond"]); 
          });

          return p;
        
    }  

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
   
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }     

    

}
