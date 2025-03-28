import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  public ongoin: WritableSignal<boolean> = signal(false);
  public responseStatus: WritableSignal<HttpStatusCode> = signal(HttpStatusCode.Unused);

  private url: string = "https://cms.causatech.xyz/items/InscricaoNewsnetter?access_token=" + environment.directusApiKey;

  constructor(private http: HttpClient) { }

  public subscribe(email: String) {
    this.ongoin.update(() => true);

    const body = {
      "email": email
    }

    this.http.post<any>(`${this.url}`, body).subscribe({
      next: () => {
        this.responseStatus.update(() => HttpStatusCode.Created);
      },
      error: err => {
        this.ongoin.update(() => false);
        if(err.status == 409) {
          this.responseStatus.update(() => HttpStatusCode.Conflict);
        } else {
          this.responseStatus.update(() => HttpStatusCode.InternalServerError);
        }
      },
      complete: () => this.ongoin.update(() => false)
    })
  }
}
