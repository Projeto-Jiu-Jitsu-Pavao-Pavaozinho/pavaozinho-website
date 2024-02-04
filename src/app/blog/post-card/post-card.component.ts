import { Component, Input } from '@angular/core';
import { BlogPostCard } from '../models/blog-post-card';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() public  cardContent: BlogPostCard | any;
}