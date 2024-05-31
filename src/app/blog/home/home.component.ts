import { Component, OnInit } from '@angular/core';
import { DatoService } from 'src/app/services/dato.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../section-style.css', '../../text-general.css']
})
export class HomeComponent implements OnInit{
  constructor(private datorService: DatoService) {
  }

  public posts: Array<BlogPost> = [];

  ngOnInit(): void {
    this.datorService.getAllBlogPosts().subscribe({
      next: res => { this.posts = res.data.allPosts},
      error: error => console.log(error)
    })
  }
}
