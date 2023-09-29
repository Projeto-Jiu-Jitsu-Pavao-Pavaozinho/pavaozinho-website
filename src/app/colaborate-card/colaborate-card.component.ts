import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colaborate-card',
  template: `
    <div class="card">
      <div class="filter">
        <h1>{{title}}</h1>
        <app-section-paragraph pColor="#FFF"
        content="{{paragraph}}" txtAlign='left'>
        </app-section-paragraph>
        <br>
        <app-button bgColor="#FFF" fontColor="#262626" title="{{btnTitle}}"></app-button>
      </div>
    </div> 
  `,
  styleUrls: ['./colaborate-card.component.css']
})
export class ColaborateCardComponent {
  @Input() title: string = "";
  @Input() paragraph: string = "";
  @Input() bgImage: string = "";
  @Input() btnTitle: string = "";
}
