import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-image',
  template: `
    <img [src]="url" (click)="open()">
  `,
  styles: [`
  img {
    width: 300px;
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
