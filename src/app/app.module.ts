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
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
