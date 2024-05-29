import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
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
      font-size: 14px;
    }
  `]
})
export class BlogPostComponent implements OnInit {
  public post: BlogPost | undefined;
  public date: string | null = '';

  constructor(private blogService: DatoService, private activatedRoute: ActivatedRoute,
    private title: Title, private datePipe: DatePipe, private meta: Meta, private router: Router) {}

  public ngOnInit(): void {
    let postSlug = '';
    const regex: RegExp = /\/(?:[^\/]+\/){2}([^\/]+)/;
    const result: RegExpExecArray| null = regex.exec(this.router.url);
    if(result) {
      postSlug = result[1];
    }
    this.blogService.getPostBySlug(postSlug).subscribe({
      next: res => {
        this.post = res.data.post;
        console.log(res);
        this.title.setTitle(this.post?.titulo + ' | Blog Pavãozinho');
        this.date = this.datePipe.transform(this.post?._firstPublishedAt, 'dd/MM/yyyy hh:mm a');
        this.post?._seoMetaTags.forEach((tag) => {
          if(tag.tag == 'meta') {
            this.meta.addTag({name: tag.attributes.name || tag.attributes.property, content: tag.attributes.content});
          }
        });
      },
      error: err => console.log(err)
    });
  }
}
