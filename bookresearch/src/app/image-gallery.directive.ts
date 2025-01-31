import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageGallery]',
  standalone: false,
})
export class ImageGalleryDirective {

  @Input() newImage!: string;

  element;

  constructor(private eleRef:ElementRef) {
    this.element = eleRef;
  }

  @HostListener('mouseenter') onMouseEnter() {
    const displayImage = document.getElementById('displayedImage') as HTMLImageElement;

    if (displayImage) {
      displayImage.src = this.newImage;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const displayImage = document.getElementById('displayedImage') as HTMLImageElement;

    if (displayImage) {
      displayImage.src = 'assets/javascript.png';
    }
  }
}
