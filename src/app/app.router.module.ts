// import { ModuleWithProviders  } from "@angular/core";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component'
import { HelpComponent } from './components/help/help.component'
import { HomeComponent } from './components/home/home.component'
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { MovieComponent } from "./components/movie/movie.component";
import { HeaderComponent } from "./components/header/header.component";
import { SignUpComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";



const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  
  },

  {
    path: 'login',
    component: LoginComponent,
    
  },

  {
    path: 'home',
    component:HomeComponent,
  
  },  

  {
    path: 'about',
    component: AboutComponent
  }, 
 
  

  {
      path: 'help',
      component:HelpComponent
  },

   {
      path: 'movies',
      component:MoviesListComponent
  },

   {
      path: '**',
      component:PageNotFoundComponent
  }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true }/* ng build --prod*/)],
  exports: [RouterModule]
})
export class AppRouterModule 
{ 

}

export const RoutingComponents = 
[
            AboutComponent,
            HelpComponent,
            HomeComponent,
            PageNotFoundComponent,
            HeaderComponent,
            SignUpComponent,
            LoginComponent
];


