import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCoverComponent } from './components/page-cover/page-cover.component';
import { ProjectCardComponent } from './project-card/project-card.component';
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
    WhatsappButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
    { path: '**', component: NotFoundComponent, title: "Pagina não encontrada | Projeto Social Pavão-Pavãozinho" },
], {
    initialNavigation: 'enabledBlocking'
}),
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
