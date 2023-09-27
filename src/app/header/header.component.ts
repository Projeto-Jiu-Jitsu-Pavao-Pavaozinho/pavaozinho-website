import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive: boolean = false;

  toogleMenu() {
    if(this.menuActive == false) {
      this.menuActive = true;
    } else {
      this.menuActive = false;
    }
  }

  detectMenuMobile() {
    if(this.menuActive == true) {
      this.menuActive = false;
    }
  }
}
