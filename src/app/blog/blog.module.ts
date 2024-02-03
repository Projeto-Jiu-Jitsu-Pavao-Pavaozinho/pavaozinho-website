import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
