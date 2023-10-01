import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button style="color:{{fontColor}}; background-color:{{bgColor}}">{{title}}</button>',
  styles: [`
    button {
      background-color: #FFF;
      border: none;
      border-radius:20px;
      padding: 5px 25px;
      font-weight: 500;
      font-size: 20px;
      font-family: 'Hanken Grotesk', sans-serif;
    }

    button:hover {
      cursor: pointer;
    }
  `]
})
export class ButtonComponent {
  @Input() public title: string = '';
  @Input() public fontColor: string = '#FFF';
  @Input() public bgColor: string = '#262626';

}
