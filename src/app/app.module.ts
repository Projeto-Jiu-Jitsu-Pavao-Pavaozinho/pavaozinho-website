import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageCoverComponent } from './page-cover/page-cover.component';
import { AboutComponent } from './about/about.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionParagraphComponent } from './section-paragraph/section-paragraph.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { ColaborateComponent } from './colaborate/colaborate.component';
import { ButtonComponent } from './button/button.component';
import { ColaborateCardComponent } from './colaborate-card/colaborate-card.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { DoacaoComponent } from './pages/doacao/doacao.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GaleryComponent } from './galery/galery.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageCoverComponent,
    AboutComponent,
    SectionTitleComponent,
    SectionParagraphComponent,
    ProjectsComponent,
    ProjectCardComponent,
    FooterComponent,
    ColaborateComponent,
    ButtonComponent,
    ColaborateCardComponent,
    VoluntariadoComponent,
    DoacaoComponent,
    NotFoundComponent,
    GaleryComponent,
    ModalContentComponent,
    ImageComponent
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
