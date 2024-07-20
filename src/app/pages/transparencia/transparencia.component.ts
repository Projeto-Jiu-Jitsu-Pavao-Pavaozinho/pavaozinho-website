import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { DatoService } from 'src/app/services/dato.service';

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styleUrls: ['./transparencia.component.css', '../../text-general.css', '../../section-style.css']
})
export class TransparenciaComponent implements OnInit{

  constructor(private datoService: DatoService){};

  public docs: any;

  ngOnInit(): void {
    this.datoService.getDocuments().subscribe({
      next: res => this.docs = res.data.documento,
      error: err => console.log(err)
    })
  }

}
