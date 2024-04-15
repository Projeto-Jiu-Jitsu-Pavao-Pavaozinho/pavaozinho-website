import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../text-general.css']
})
export class HomeComponent {
  public newsletterSubSuccess: boolean = false;

  public toogleNewsletterAlert() {
    this.newsletterSubSuccess = !this.newsletterSubSuccess;
  }
}
