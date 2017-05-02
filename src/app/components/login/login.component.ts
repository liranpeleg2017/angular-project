import { Component,Output ,OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { SessionService } from "../../services/session/session.service";
import { User } from "../../models/user.interface";
import { GlobalService } from "../../services/global/global.service";
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';



@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
})


export class LoginComponent implements OnInit,OnDestroy {

	public model : User;
	
	constructor(private session : SessionService, 
				private router : Router, 
				private route : ActivatedRoute,
				private globalService : GlobalService) {

		this.model = new User('','');

	 }

	
	ngOnInit() { 
		
	} 

 	ngOnDestroy() {
		 //Called once, before the instance is destroyed.
		 //Add 'implements OnDestroy' to the class.
		// this.globalService.cancel();
	 }
	


	onSubmit(form)
	{   
		
		this.session.Set("currentUser",this.model);

		this.session.Data = this.model;
		
		this.globalService.event.emit(this.model);

		this.router.navigate(['/home']);
	}
}


