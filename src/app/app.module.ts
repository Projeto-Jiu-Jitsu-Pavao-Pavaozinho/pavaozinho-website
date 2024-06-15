import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCoverComponent } from './components/page-cover/page-cover.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ColaborateCardComponent } from './components/colaborate-card/colaborate-card.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ImageComponent } from './components/image/image.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent as BlogHome } from './blog/home/home.component';
import { PostCardComponent } from './blog/components/post-card/post-card.component';
import { BlogPost } from './blog/models/blog-post';
import { BlogPostComponent } from './blog/components/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageCoverComponent,
    ProjectCardComponent,
    FooterComponent,
    ButtonComponent,
    ColaborateCardComponent,
    NotFoundComponent,
    GaleryComponent,
    ModalContentComponent,
    ImageComponent,
    WhatsappButtonComponent,
    PostCardComponent,
    BlogHome
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'blog', children: [
      { path: '', component: BlogHome },
      { path: 'post/:slug', component: BlogPostComponent }
    ] },
    { path: '**', component: NotFoundComponent, title: "Pagina não encontrada | Projeto Social Pavão-Pavãozinho" },
], {
    initialNavigation: 'enabledBlocking'
}),
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
