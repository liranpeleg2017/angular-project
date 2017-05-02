
import { Component,Output ,OnInit, EventEmitter } from '@angular/core';
import { SessionService } from "../../services/session/session.service";
import { User } from "../../models/user.interface";
import { GlobalService } from "../../services/global/global.service";
import {Router} from '@angular/router';
import {Movie} from '../../models/movie.interface';


@Component({
	selector: 'app-signup',
	templateUrl: 'signup.component.html'
})

export class SignUpComponent implements OnInit {

	@Output() loginInfoUpdated: EventEmitter<any>;

	constructor(private session : SessionService, private router : Router, private globalService : GlobalService) {

		this.loginInfoUpdated = new EventEmitter();

	 }
	
	ngOnInit() { 
		
			// console.log("user: "+this.session.Get("movie"));
			// console.warn(this.session.Get<Movie>("movie").title);

		//this.doSomething((data) => console.log(data));
	//	this.globalService.ob.subscribe(arr => console.log("signup listen: ",arr));

		//  this.globalService.subscribeTo("HeaderComponent",
		//  								sender => console.log("signup listen: ",sender));
		 
	} 

	private doSomething(callback: (data:any) => void){

      // console.log("from doSomething");

	   callback({id:1});
	}


	onSubmit(form)
	{   
		let user : User = {

			userName: form.value.userName,
			firstName: form.value.firstName,
			lastName: form.value.lastName,
			email: form.value.email  
		};
		
	    //form.reset();
		
		this.session.Set("currentUser",user);
		// this.globalService.broadcast({
					
		// 		 Component: 'SignUpComponent',
		// 		 Data: user
		// 	 })
		//location.href="/";

		this.loginInfoUpdated.emit(form);

		this.router.navigate(['/home'], { replaceUrl: true });
	

	}
}