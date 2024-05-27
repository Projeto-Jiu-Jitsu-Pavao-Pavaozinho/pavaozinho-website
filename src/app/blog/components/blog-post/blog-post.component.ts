import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DatoService } from 'src/app/services/dato.service';
import { BlogPost } from '../../models/blog-post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  template: `
    <article class="container my-5">
      <h2 [innerHTML]="post?.titulo"></h2>
      <p>Postado em: {{date}}</p>
      <img class="img-fluid mb-2" [src]="post?.capa?.url" [alt]="post?.capa?.alt">
      <p class="img-alt mb-5">{{post?.capa?.alt}}</p>
      <div class="fs-5" [innerHTML]="post?.corpo"></div>
    </article>
  `,
  styles: [`
    .img-alt {
      color: #1E1E1E80;
      wight: 400;
      font-size: 14px;
    }
  `]
})
export class BlogPostComponent implements OnInit {
  public post: BlogPost | undefined;
  public date: string | null = '';

  constructor(private blogService: DatoService, private activatedRoute: ActivatedRoute,
    private title: Title, private datePipe: DatePipe, private meta: Meta) {}

  public ngOnInit(): void {
    const postSlug = this.activatedRoute.snapshot.params['slug'];
    this.blogService.getPostBySlug(postSlug).subscribe({
      next: res => {
        this.post = res.data.post;
        this.title.setTitle(this.post?.titulo + ' | Blog Pavãozinho');
        this.date = this.datePipe.transform(this.post?._firstPublishedAt, 'dd/MM/yyyy hh:mm a');
        console.log(this.post?._firstPublishedAt);
        this.meta.addTag({name: 'title', content: 'Testando'});
      },
      error: err => console.log(err)
    });
  }
}
