import { Component, Input } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() public  cardContent: BlogPost | any;
}