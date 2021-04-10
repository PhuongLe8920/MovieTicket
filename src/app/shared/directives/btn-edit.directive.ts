import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtnEdit]'
})
export class BtnEditDirective implements OnInit {

  constructor(private El: ElementRef) { }
  highlight () {
    this.El.nativeElement.style.backgroundImage = 'none';
    this.El.nativeElement.style.color = '#212529';
    this.El.nativeElement.style.backgroundColor = 'white';
    this.El.nativeElement.style.border = 'solid 1px coral'
    this.El.nativeElement.style.transition = 'all, .3s'
  }
  unHighlight () {
    this.El.nativeElement.style.backgroundImage = 'linear-gradient(to top right, #f44336, #ce8405fd)';
    this.El.nativeElement.style.color = 'white';
  }

  ngOnInit() {
    this.El.nativeElement.style.margin = 'auto';
    this.El.nativeElement.style.border = 'none';
    this.El.nativeElement.style.borderRadius = '2px'
    this.unHighlight();
  }

  @HostListener('mouseover') onmouseover () {
    this.highlight();
  }

  @HostListener('mouseout') onmouseout () {
    this.unHighlight();
  }
}
