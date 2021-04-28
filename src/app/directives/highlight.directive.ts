import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'red';
  @Input() out = 'yellow';
  @HostBinding('style.backgroundColor') bgc = 'gold';
  constructor(private element: ElementRef) {
    console.log('highlight directive');
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = 'out';
  }
}
