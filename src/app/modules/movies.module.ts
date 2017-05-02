
//Components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { MovieComponent } from "app/components/movie/movie.component";
import { MoviesListComponent } from "app/components/movies-list/movies-list.component";

import { HighLighterDirective } from "app/directives/highlighter.directive";

import { DatabaseService } from 'app/services/database/database.service';


  
@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [ HighLighterDirective,
                    MovieComponent,MoviesListComponent ],
    providers: [],
})
export class MoviesModule { }
