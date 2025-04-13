import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountryFlag]'
})
export class CountryFlagDirective implements OnInit {
  @Input('appCountryFlag') country = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const flag = this.getFlagEmoji(this.country);
    const currentText = this.el.nativeElement.innerText;
    this.renderer.setProperty(this.el.nativeElement, 'innerText', `${flag} ${currentText}`);
  }

  private getFlagEmoji(country: string): string {
    const flags: Record<string, string> = {
      Germany: '🇩🇪',
      Austria: '🇦🇹',
      Italy: '🇮🇹',
      'United Kingdom': '🇬🇧',
      UK: '🇬🇧',
    };
    return flags[country] || '🏁'; // fallback emoji
  }
}
