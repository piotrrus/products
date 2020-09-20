import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[trim]'
})

export class TrimDirective {

  constructor(private el: ElementRef) {
  }
	@HostListener('blur') onChange() {
    if (this.el.nativeElement.value) {
      const textValue = this.el.nativeElement.value;
      this.el.nativeElement.value = textValue.trim();
    }
  }
}
