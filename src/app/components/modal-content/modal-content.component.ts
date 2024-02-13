import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <img [src]="img">
    </div>
  `,
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class ModalContentComponent {

  activeModal = inject(NgbActiveModal);

  public img: string = "";

}
