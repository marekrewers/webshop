import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  apiAddress = 'https://webshop-76bc5.firebaseio.com/';

  urls = {
    getCards: 'cards.json',
    saveCards: 'cards.json'
  };

  public getUrl(name) {
    return this.apiAddress + this.urls[name];
  }
}
