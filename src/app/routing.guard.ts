
import { Injectable } from '@angular/core';
import { SessionService } from './services/session/session.service';
import { RouterStateSnapshot,
         Router, 
         CanActivate, 
         ActivatedRouteSnapshot} from '@angular/router';
         

@Injectable()
export class RoutingAccessGuard implements CanActivate {

    constructor(private router: Router,private sessionService : SessionService){

        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 
       if(!this.sessionService.CurrentUser){
          
           this.router.navigate(['login']);   

           console.warn("RoutingAccessGuard.canActivate", false);

           return false;
       }

       //User Authenticate OK
       return true;
    }


    
}
