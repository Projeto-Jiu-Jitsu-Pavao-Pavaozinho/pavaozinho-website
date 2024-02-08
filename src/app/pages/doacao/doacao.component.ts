import { Component, OnInit } from '@angular/core';
import { end } from '@popperjs/core';
import { Article } from 'src/app/module/article';
import { DatoService } from 'src/app/services/dato.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['../../section-style.css', '../../text-general.css']
})
export class DoacaoComponent implements OnInit {

  constructor(private datoService: DatoService) {}

  public names: {id: number, name: string} | any;

  public article!: Article;

  ngOnInit(): void {
    this.datoService.getPages().subscribe({
      next: res => {
        this.article = res;
      },
      error: err => console.log(err)
    });
  }

}
