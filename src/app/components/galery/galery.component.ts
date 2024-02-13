import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  template: `
    <section>
      <h2 class="standard-title white-text">Galeria</h2>
      <div class="container">
          <app-image url="../../assets/galeria/1.jpeg"></app-image>
          <app-image url="../../assets/galeria/2.jpeg"></app-image>
          <app-image url="../../assets/galeria/4.jpg"></app-image>
          <app-image url="../../assets/galeria/3.jpeg"></app-image>
      </div>
    </section>
  `,
  styles: [`
    section {
      background-color: #262626;
      padding: 2.5% 2.5% 5%;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        overflow: scroll;
        gap: 15px;
    }
  `],
  styleUrls: ['../../text-general.css']
})
export class GaleryComponent {

}
