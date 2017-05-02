import { Component, OnInit,OnDestroy } from '@angular/core';
import { GlobalService } from "../../services/global/global.service";


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private globalService : GlobalService) { }

  ngOnInit() {

 		 this.globalService.subscribeTo("HeaderComponent",
		 								sender => console.log("help listen: ",sender));
       
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
     
    console.log("ngOnDestroy ");
  }

}
