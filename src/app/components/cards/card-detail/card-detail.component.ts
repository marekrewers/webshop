import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  cardId: number;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.cardId = params.id;
      // console.log(params);
    });
  }

  ngOnInit() {
  }

}
