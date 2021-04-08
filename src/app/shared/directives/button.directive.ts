import { ElementRef } from '@angular/core';
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  constructor(private El: ElementRef) { }

  ngOnInit() {
    this.El.nativeElement.style.backgroundImage = 'linear-gradient(to top right, #f44336, #ce8405fd)';
    this.El.nativeElement.style.color = 'white'
  }

}
