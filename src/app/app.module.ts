import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCoverComponent } from './page-cover/page-cover.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { ColaborateCardComponent } from './colaborate-card/colaborate-card.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { DoacaoComponent } from './pages/doacao/doacao.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GaleryComponent } from './galery/galery.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ImageComponent } from './image/image.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
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
    VoluntariadoComponent,
    DoacaoComponent,
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
      {path: '', component: HomeComponent},
      {path: 'voluntariado', component: VoluntariadoComponent, title: "Voluntariado | Projeto Social Pavão-Pavãozinho"},
      {path: 'doacao', component: DoacaoComponent, title: "Como doar | Projeto Social Pavão-Pavãozinho"},
      {path: '**', component: NotFoundComponent, title: "Pagina não encontrada | Projeto Social Pavão-Pavãozinho"},
    ]),
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
