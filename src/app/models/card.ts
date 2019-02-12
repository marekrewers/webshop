export class Card {
  public name: string;
  public description: string;
  public photoUrl: string;

  constructor(name: string, desc: string, photoUrl: string) {
    this.name = name;
    this.description = desc;
    this.photoUrl = photoUrl;
  }
}
