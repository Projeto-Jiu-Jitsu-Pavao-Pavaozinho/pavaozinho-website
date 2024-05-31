import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
export class BlogPostComponent implements OnInit, OnDestroy {
  public post: BlogPost | undefined;
  public date: string | null = '';

  constructor(private blogService: DatoService,
    private title: Title, private datePipe: DatePipe, private meta: Meta, private router: Router) {}

  public ngOnInit(): void {
    let postSlug = '';

    // Quebrando a url atual para pegar o slug do post que está sendo acessado
    const regex: RegExp = /\/(?:[^\/]+\/){2}([^\/]+)/;
    const result: RegExpExecArray| null = regex.exec(this.router.url);
    if(result) {
      postSlug = result[1];
    }

    // Fazendo a requisição dos dados do post para a api através do slug
    this.blogService.getPostBySlug(postSlug).subscribe({
      next: res => {

        //Populando o modelo com os dados da requisição
        this.post = res.data.post;
        this.title.setTitle(this.post?.titulo + ' | Blog Pavãozinho');
        this.date = this.datePipe.transform(this.post?._firstPublishedAt, 'dd/MM/yyyy hh:mm a');

        this.post?._seoMetaTags.forEach((tag) => {

          // Verificando se a tag é de meta
          if(tag.tag == 'meta') {

            // Inserindo as meta tags na página
            this.meta.addTag({name: tag.attributes.name || tag.attributes.property, content: tag.attributes.content});
          }
        });
      },
      error: err => console.log(err)
    });
  }

  public  ngOnDestroy(): void {
    console.log(this.post);
    console.log(this.meta.getTags("name='meta'"));

    this.post?._seoMetaTags.forEach((tag) => {
      if(tag.tag == 'meta') {
        
        // Removendo as tags da página de post ao destruir o elemento
        this.meta.removeTag(`name='${tag.attributes.name}'`);
      }
    })
  }

}
