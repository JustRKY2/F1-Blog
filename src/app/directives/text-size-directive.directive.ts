import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextSize]',
  standalone: true
})
export class TextSizeDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.4rem');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
  }
}
