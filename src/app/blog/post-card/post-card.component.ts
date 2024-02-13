import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-card',
  template: `
    <a [routerLink]='"post/" + cardContent?.slug'>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
                <img class="img-fluid rounded" [src]="cardContent?.capa?.url" alt="" style="width: 100%; height: 100%;">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{cardContent?.titulo}}</h5>
                    <p class="card-text"><small class="text-body-secondary">Postado em: {{date}}</small></p>
                </div>
            </div>
        </div>
      </div>
    </a>
  `,
  styles: ['']
})
export class PostCardComponent implements OnInit {
  @Input() public  cardContent: BlogPost | undefined;
  public date: string | null = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.date = this.datePipe.transform(this.cardContent?._firstPublishedAt, 'dd/MM/yyyy');
  }
}