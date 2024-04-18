import { Component, Input } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../text-general.css']
})
export class HomeComponent {
  public newsletterSubSuccess: boolean = false;
  public emailInput: string = "";
  public ongoin: boolean = false;

  public constructor(private newsletterService: NewsletterService) {}

  public toogleNewsletterAlert() {
    this.newsletterSubSuccess = !this.newsletterSubSuccess;
  }

  public newsletterSubscribe(email: String) {
    if(email != "") {
      this.newsletterSubSuccess = false;
      this.ongoin = true;
      this.newsletterService.subscribe(email).subscribe({
        next: res => {this.newsletterSubSuccess = true; this.emailInput = ""},
        error: err => {this.ongoin = false; console.log(err.status)},
        complete: () => this.ongoin = false,
      });
    }
  }
}
