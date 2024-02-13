import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'post/:slug', component: BlogPostComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    PostCardComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forChild(routes)
  ],
  exports: [
    PostCardComponent
  ],
  providers: [
    DatePipe
  ]
})
export class BlogModule { }
