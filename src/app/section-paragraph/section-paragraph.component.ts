import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-paragraph',
  template:'<p style="color:{{pColor}}">{{content}}</p>',
  styles: [`
  p {
    font-size: 25px;
    font-weight: 300;
    text-align: justify;
}
  `]
})
export class SectionParagraphComponent {
  @Input() public content = '';
  @Input() public pColor = '#262626';
}
