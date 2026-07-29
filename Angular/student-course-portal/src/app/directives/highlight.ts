import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  @Input()
  appHighlight = 'yellow';

  constructor(
    private readonly elementRef: ElementRef
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {

    this.elementRef.nativeElement.style.backgroundColor =
      this.appHighlight;

  }

  @HostListener('mouseleave')
  onMouseLeave(): void {

    this.elementRef.nativeElement.style.backgroundColor =
      '';

  }

}