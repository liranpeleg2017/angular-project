import { TestBed, inject } from '@angular/core/testing';

import { MovieComponent } from './movie.component';

describe('a movie component', () => {
	let component: MovieComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MovieComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MovieComponent], (MovieComponent) => {
		component = MovieComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});