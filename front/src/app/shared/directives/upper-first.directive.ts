import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUpperFirst]'
})
export class UpperFirstDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value) {
      const textValue = this.el.nativeElement.value;
      this.el.nativeElement.value = textValue[0].toUpperCase() + textValue.slice(1);
    }
  }
}
