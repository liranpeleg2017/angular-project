import { Component, OnInit,Input } from '@angular/core';
import { Movie } from "../../models/movie.interface";


@Component({
	selector: 'movie-detail',
	templateUrl: 'movie.component.html'
})




export class MovieComponent implements OnInit {

	@Input() movie: Movie;
	
	ngOnInit() { }
}

