import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colaborate-card',
  template: `
    <div class="card">
      <div class="filter">
        <h3>{{title}}</h3>
        <p class="paragraph">{{paragraph}}</p>
        <br>
        <a href="{{link}}"><app-button href='sobre' bgColor="#FFF" fontColor="#262626" title="{{btnTitle}}"></app-button></a>
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
  @Input() link: string = "";
}
