import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonColor]',
  standalone: false
})
export class ButtonColorDirective {
  @Input()
  newColor!:string;

  constructor(private eleRef:ElementRef) {
    this.eleRef.nativeElement.style.backgroundColor = "green";
   }

   @HostListener('mouseenter') onMouseEnter() {
      this.eleRef.nativeElement.style.backgroundColor = this.newColor;
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.eleRef.nativeElement.style.backgroundColor = "orange";
 }
}
