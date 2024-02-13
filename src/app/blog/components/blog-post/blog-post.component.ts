import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
      <img class="img-fluid mb-4" [src]="post?.capa?.url" alt="">
      <div class="fs-4" [innerHTML]="post?.corpo"></div>
    </article>
  `,
  styles: ['']
})
export class BlogPostComponent implements OnInit {
  public post: BlogPost | undefined;
  public date: string | null = '';

  constructor(private blogService: DatoService, private activatedRoute: ActivatedRoute,
    private title: Title, private datePipe: DatePipe) {}

  public ngOnInit(): void {
    const postSlug = this.activatedRoute.snapshot.params['slug'];
    this.blogService.getPostBySlug(postSlug).subscribe({
      next: res => {
        this.post = res.data.post;
        this.title.setTitle(this.post?.titulo + ' | Blog Pavãozinho');
        this.date = this.datePipe.transform(this.post?._firstPublishedAt, 'dd/MM/yyyy hh:mm a');
        console.log(this.post?._firstPublishedAt);
      },
      error: err => console.log(err)
    });
  }
}
