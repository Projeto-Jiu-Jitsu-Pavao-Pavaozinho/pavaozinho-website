import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private url: string = "https://newsletter-jm47.onrender.com";

  constructor(private http: HttpClient) { }

  public subscribe(email: String) {
    const body = {
      "email": email
    }

    return this.http.post<any>(`${this.url}`, body).pipe(
      res => res,
      error => error
    )
  }
}
