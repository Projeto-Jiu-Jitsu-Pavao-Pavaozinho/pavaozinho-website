import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `<h1 style='color: {{ newColor }}'>{{title}}</h1>`,
  styles: [`
  h1 {
    font-size: 50px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 23px;
  }

  @media screen and (max-width: 800px) {
    h1 {
        font-size: 35px;
    }
  }
  `]
})
export class SectionTitleComponent {
  @Input() public title: string = '';
  @Input() public newColor: string = '#FAF5F1';
}
