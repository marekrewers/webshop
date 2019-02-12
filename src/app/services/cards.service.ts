import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {Card} from '../models/card';
// import {HttpClientTestingModule } from '@angular/common/http/testing';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient, private urlService: UrlService) {
  }
  getCards() {
    return this.http.get(this.urlService.getUrl('getCards'));
  }
  saveCards(cards: Card[]) {
    return this.http.put(this.urlService.getUrl('saveCards'), cards);
  }
}
