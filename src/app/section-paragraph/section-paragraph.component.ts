import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-paragraph',
  template:'<p style="color:{{pColor}}; text-align: {{txtAlign}};">{{content}}</p>',
  styles: [`
  p {
    font-size: 25px;
    font-weight: 300;
}
  `]
})
export class SectionParagraphComponent {
  @Input() public content = '';
  @Input() public pColor = '#262626';
  @Input() public txtAlign = 'justify'
}
