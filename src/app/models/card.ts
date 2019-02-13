export class Card {
  public name: string;
  public description: string;
  public photoUrl: string;
  public id: number;

  constructor(name: string, desc: string, photoUrl: string) {
    this.name = name;
    this.description = desc;
    this.photoUrl = photoUrl;
    this.id = (new Date()).getTime();
  }
}
