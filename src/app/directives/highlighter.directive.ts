import { Directive, ElementRef, Input ,Renderer2} from '@angular/core';
@Directive({ selector: '[myHighlight]' })

export class HighLighterDirective {
    constructor(el: ElementRef,render: Renderer2) {
      el.nativeElement.style.backgroundColor = 'black';
       //render.setStyle(el,"background-color","lightyellow");
        
    }
}