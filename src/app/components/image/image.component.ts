import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-image',
  template: `
    <img class="rounded mx-auto" [src]="url" (click)="open()">
  `,
  styles: [`
  :host {
    padding: 0 0.5rem;
  }

  img {
    height: 200px;
  }

  img:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1220px) {

    img {
        width: 300px;
    }
  }
  `]
})
export class ImageComponent {

  @Input() url: string = "";
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.img = this.url;
  }

}
