<<<<<<< HEAD
<<<<<<< HEAD
// import { ModuleWithProviders  } from "@angular/core";
=======

>>>>>>> c6e61de48c0228ab3bc80939b0d192bf8cd4442a
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
import { RoutingAccessGuard } from "app/routing.guard";

 

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
    canActivate: [RoutingAccessGuard]
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
  imports: [RouterModule.forRoot(routes/* ,{ useHash: true } ng build --prod*/)],
  exports: [RouterModule],
  providers: [RoutingAccessGuard]
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


<<<<<<< HEAD
=======
// import { ModuleWithProviders  } from "@angular/core";
=======

>>>>>>> c6e61de48c0228ab3bc80939b0d192bf8cd4442a
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
import { RoutingAccessGuard } from "app/routing.guard";

 

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
    canActivate: [RoutingAccessGuard]
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
  imports: [RouterModule.forRoot(routes/* ,{ useHash: true } ng build --prod*/)],
  exports: [RouterModule],
  providers: [RoutingAccessGuard]
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


<<<<<<< HEAD
>>>>>>> b2c85472d9c558fd226f6516022e8ad0ca9113a0
=======

>>>>>>> c6e61de48c0228ab3bc80939b0d192bf8cd4442a
