import {GlobalService} from '../../services/global/global.service';
import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session/session.service";
import {Router, ActivatedRoute} from '@angular/router';



@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

	IsLoggedIn	:boolean = false;
	
	constructor(public session : SessionService, 
				private globalService : GlobalService,
				private router: Router, private route: ActivatedRoute){
	

	}
	
	ngOnInit() {
 
		this.IsLoggedIn = (this.session.CurrentUser != null);

		this.globalService.event.subscribe(user => {
			console.warn("Header",user)
			this.IsLoggedIn = true;
		});

		//console.log("Header",this.session.Data);

		//this.globalService.subscribeTo("HomeComponent",(sender)=> {

		//	console.warn(sender);
		//});

		// this.globalService.subscribeTo("LoginComponent",sender =>{

		// 	console.warn(sender);
		//console.log(this.session.Data);
	
		
/*		this.globalService.subscribeTo("SignUpComponent",broadcast => {
			
			//this.session.CurrentUser.firstName = broadcast.Data.firstName;
			//console.log(this.session.CurrentUser);

		});*/
	/*	 setInterval(() => {
			 let um = Math.abs(Math.random());
			
			 this.globalService.broadcast({
					
				 Sender: 'HeaderComponent',
				 Data: um
			 })
			
		},5000);*/
		

	 }

	public handleUserUpdated(user) {
			
			this.IsLoggedIn = true;
			
	}

	public doLogout(){

		this.session.Remove("currentUser");
		
		this.IsLoggedIn = false;

		this.globalService.cancel();

		this.router.navigate(['/login'], { replaceUrl: false });


	 }





}