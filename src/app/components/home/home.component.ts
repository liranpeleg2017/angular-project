
import { Component, OnInit,OnDestroy } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { GlobalService } from "../../services/global/global.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(public session : SessionService, private globalService : GlobalService,private route: ActivatedRoute) {

  //  this.globalService.broadcast({

	// 		Sender: "HomeComponent",

	// 		Data: this.session.Data
	// 	});

   }

  ngOnInit() 
  {
    //console.log("Home",this.session.Data);

  
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   // this.globalService.cancel(); 
  }

}
