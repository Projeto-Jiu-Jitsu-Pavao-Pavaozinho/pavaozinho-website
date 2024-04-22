import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  public ongoin: WritableSignal<boolean> = signal(false);
  public responsStatus: WritableSignal<HttpStatusCode> = signal(HttpStatusCode.Processing);

  private url: string = "https://newsletter-jm47.onrender.com";

  constructor(private http: HttpClient) { }

  public subscribe(email: String) {
    this.ongoin.update(() => true);

    const body = {
      "email": email
    }

    this.http.post<any>(`${this.url}`, body).subscribe({
      next: res => {this.responsStatus.update(() => HttpStatusCode.Created)},
      error: err => {
        this.ongoin.update(() => false);
        if(err.status == 409) {
          this.responsStatus.update(() => HttpStatusCode.Conflict);
          console.log(this.responsStatus());
        } else {
          this.responsStatus.update(() => HttpStatusCode.InternalServerError);
        }
      },
      complete: () => this.ongoin.update(() => false)
    })
  }
}
