import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';

  constructor() {}
  @HostListener('keyup') onKeyup(): void {
    this.color = this.bc = this.getRandomcolor();
  }

  private getRandomcolor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
