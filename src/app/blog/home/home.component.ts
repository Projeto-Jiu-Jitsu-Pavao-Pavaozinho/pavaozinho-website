import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatoService } from 'src/app/services/dato.service';
import { BlogPost } from '../models/blog-post';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../section-style.css', '../../text-general.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  constructor(private datoService: DatoService, private meta: Meta) {
  }

  public posts: Array<BlogPost> = [];

  ngOnInit(): void {
    this.datoService.getAllBlogPosts().subscribe({
      next: res => {
        this.posts = res.data.allPosts;
        this.meta.addTag({name: 'description', content: 'Acompanhe as novidades que acontecem no Projeto Pavãozinho. Aqui postamos notícias sobre nossas atividade e artigos sobre esporte e outras reflexões.'});
      },
      error: error => console.log(error)
    })
  }

  ngOnDestroy(): void {
    this.meta.removeTag('name="description"');
  }
}
