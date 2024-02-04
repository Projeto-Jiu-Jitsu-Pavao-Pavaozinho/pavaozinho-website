import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [
    ArticleComponent,
    HomeComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostCardComponent
  ]
})
export class BlogModule { }
