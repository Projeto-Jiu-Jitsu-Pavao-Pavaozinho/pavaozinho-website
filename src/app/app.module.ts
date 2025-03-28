import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ImageComponent } from './components/image/image.component';
import { FormsModule } from '@angular/forms';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';

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
    ModalContentComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
    { path: 'transparencia', component: TransparenciaComponent, title: 'Transparência | Projeto Social Pavão-Pavãozinho' },
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
