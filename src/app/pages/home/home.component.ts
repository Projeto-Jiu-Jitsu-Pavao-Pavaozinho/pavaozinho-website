import { HttpStatusCode } from '@angular/common/http';
import { Component, WritableSignal} from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../text-general.css']
})
export class HomeComponent {
  public emailInput: string = "";
  public ongoin: WritableSignal<boolean> = this.newsletterService.ongoin;
  public status: WritableSignal<HttpStatusCode> = this.newsletterService.responseStatus;

  public constructor(private newsletterService: NewsletterService) {}

  public newsletterSubscribe(email: String) {
    if(email != "" && !this.ongoin()) {
      this.newsletterService.subscribe(email);
    }
  }

  public closeAlert() {
    this.status.update(() => HttpStatusCode.Unused);
  }
}
