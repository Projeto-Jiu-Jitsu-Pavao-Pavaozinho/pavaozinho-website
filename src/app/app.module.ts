import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
      {path: '', component: HomeComponent, title: "Pavãozinho" },
      {path: 'voluntariado', component: VoluntariadoComponent, title: "Pavãozinho | Voluntariado"},
      {path: 'doacao', component: DoacaoComponent, title: "Pavãozinho | Como doar"},
      {path: '**', component: NotFoundComponent, title: "Pavãozinho | Pagina não encontrada"},
    ]),
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
