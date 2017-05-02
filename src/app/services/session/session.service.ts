import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import { Movie } from "app/models/movie.interface";
import "rxjs/add/operator/map";
import { User } from "app/models/user.interface";

@Injectable()
export class SessionService {

  public Data: any; 

  constructor(private http: Http) {

    
  }

  public Get<T>(key: string): T {

    return JSON.parse(sessionStorage.getItem(key)) as T;
  }


  public Set(key: string, value: any): void {

    sessionStorage.setItem(key, JSON.stringify(value));

  }

  public Remove(key: string): void {

    sessionStorage.removeItem(key);

  }


  public get CurrentUser(): User {
    
    return this.Get<User>("currentUser");
  }

}
