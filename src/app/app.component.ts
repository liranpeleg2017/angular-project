import {GlobalService} from './services/global/global.service';
import { Component,OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app works!';

  constructor(private globalService : GlobalService){


  }

  ngOnInit(){
    
      
  }

}

interface Shape{

  setWidth(): void;
}

class Square implements Shape {
   [name: string]: any;
  
  setWidth(): void {
    throw new Error('Method not implemented.');
  
  }



}