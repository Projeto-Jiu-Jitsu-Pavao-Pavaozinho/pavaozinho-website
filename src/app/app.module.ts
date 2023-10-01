import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
import { RouterModule } from '@angular/router';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { DoacaoComponent } from './pages/doacao/doacao.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'voluntariado', component: VoluntariadoComponent},
      {path: 'doacao', component: DoacaoComponent},
      {path: '**', component: NotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
