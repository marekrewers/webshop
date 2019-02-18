import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  // apiAddress = 'https://webshop-76bc5.firebaseio.com/';
  apiAddress = 'http://localhost:8000/api/';

  urls = {
    getCards: 'cards/all',
    saveCards: 'cards'
  };

  public getUrl(name) {
    return this.apiAddress + this.urls[name] + '/';
  }
}
