
import { Component, OnInit } from '@angular/core';
import { JsonDatePipe } from "../../pipes/JSONDate.pipe";
import { GlobalService } from "../../services/global/global.service";
import { SessionService } from "../../services/session/session.service";
import { Observable, Subscribable } from 'rxjs/Observable';
import { ActivatedRoute } from "@angular/router";





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  myObject: any;
  
  model : any = {}
  
  constructor(private globalService : GlobalService,private session: SessionService, private route : ActivatedRoute)
  {
    let jsonString: any[] = [{"Id":"dab4580b-e24d-49f8-9fd5-2e968b10d3b5","Title":"MVVM-Sidekick 入精","CreatedOn":"\/Date(1390272893353)\/","IsChecked":false},{"Id":"66a0f134-e240-4cc4-96fa-ac3807853ca7","Title":"Windows Phone 开发入精","CreatedOn":"\/Date(1390018447080)\/","IsChecked":false}];
   
    this.myObject = jsonString[0];

    //this.globalServices.data.push("ima");
   }
 
  ngOnInit() {

/*    let str : number[] = [1,2,3,4,5];

    for(let num of str){

       console.log(num);
    }*/

 
      
     //console.log("url params: ",this.route.snapshot.queryParams);

 	
   // this.session.Set("movie",movie);
     
    let p : Point = new Point(1,2);
    
   //console.log(this.session.CurrentUser);


 
  }

  onSubmit(form){

    console.log(form);
  }

}

class Point {
    constructor(public x: number, public y: number) {

        let person: Person = new Person({name:3});



    }
}

class Person  {
    
   private w: Generic<any>;

    constructor(public obj: any) {

      this.w = {'id': [0]};

      if(new.target){

        console.log("new: "+obj.name);
      }


    } 
}



interface Generic<T> {
    [x: string]: T;
}

