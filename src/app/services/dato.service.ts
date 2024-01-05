import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Article } from '../module/article';

@Injectable({
  providedIn: 'root'
})
export class DatoService{

  public url:string = "https://graphql.datocms.com/";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${environment.datoToken}`
    })
  }

  public names: Array<{id: number, name: string}> = [];

  constructor(private http: HttpClient) { }

  public getPages() {
    const body = {
      query: '{ page(filter: {id: { eq: "WfVtOjYnSLK7r5wjtPsAiQ"}}) { titulo, corpo }}'
    }
    return this.http.post<Article>(`${this.url}`, body, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }
}
