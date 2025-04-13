import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFoundedHighlight]',
  standalone: true
})
export class FoundedHighlightDirective implements OnInit {
  @Input('appFoundedHighlight') founded = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const year = parseInt(this.founded, 10);
    if (!isNaN(year) && year < 1970) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '4px solid red');
      this.renderer.setStyle(this.el.nativeElement, 'padding-left', '8px');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#9c2a2a');
    }
  }
}
