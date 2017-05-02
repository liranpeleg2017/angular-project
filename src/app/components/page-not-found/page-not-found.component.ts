import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-not-found',
    template: `<div class="panel panel-danger">
                <div class="panel-heading">Page Not Found</div>
                <div class="panel-body">Navigate back...</div>
               </div>`
})

export class PageNotFoundComponent implements OnInit {
    

    
    constructor() {


    }

    ngOnInit() { }
}