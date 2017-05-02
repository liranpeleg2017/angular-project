import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Http ,Response } from "@angular/http";
import { Movie } from "app/models/movie.interface";
import { Observer } from 'rxjs/Observer';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/Rx";





@Injectable()
export class GlobalService {

  public data: any[];

  private observer: Observer<any>;

  private subject : Subject<any>;

  public event: EventEmitter<any>;
  
  constructor(private http :Http) 
  {  

    this.data = [];

    this.event = new EventEmitter();

    this.subject = new  Subject<any>();
    
  }  

  public broadcast(item : BroadcastSender) : void
  {
    this.subject.next(item);     
  }

  public subscribeTo(sender:string, action : (broadcast: BroadcastSender) => void) : void
  {  
      //this.subject.subscribe(action);

       this.subject.filter((broadcast) => broadcast.Sender === sender).subscribe(action);
  }

  public cancel() : void {

    this.subject.unsubscribe();
  }
 
}


export interface BroadcastSender{

  Sender: string;

  Data: any;
}
