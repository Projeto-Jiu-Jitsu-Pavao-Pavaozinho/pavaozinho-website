import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { BlogPost } from '../blog/models/blog-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoService{

  public url:string = "https://graphql.datocms.com";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env['NG_APP_DATO_KEY']}`
    })
  }

  constructor(private http: HttpClient) { }

  public getPages() {
    const body = {
      query: '{ page(filter: {id: { eq: "WfVtOjYnSLK7r5wjtPsAiQ"}}) { id, _updatedAt, titulo, corpo }}'
    }
    return this.http.post<Article>(`${this.url}`, body, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }

  public getAllBlogPosts(): Observable<any> {
    const query = "{ allPosts(filter: {_status: {eq: published}}) { id, slug, _firstPublishedAt, titulo, corpo, capa{ url, alt } } }"
    return this.http.get<BlogPost[]>(`${this.url}?query=${encodeURIComponent(query)}`, this.httpOptions);
  }

  public getPostBySlug(slug: string): Observable<any> {
    const query = `{ post(filter: {slug: {eq: "${slug}"}}) { id, slug, _firstPublishedAt, titulo, corpo, capa{ url, alt }, _seoMetaTags{ tag, content, attributes } } }`
    return this.http.get<BlogPost[]>(`${this.url}?query=${encodeURIComponent(query)}`, this.httpOptions);
  }

  public getDocuments(): Observable<any> {
    const query = `{ documento {id, slug, titulo, arquivo {url}} }`;
    return this.http.get<any>(`${this.url}?query=${encodeURIComponent(query)}`, this.httpOptions);
  }
}
