export class Articolo {
  titolo: string;
  autore: string;
  testo: string;
  numApprezzamenti = 0;
  id = 0;

  constructor(titolo: string, autore: string, testo: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.testo = testo;
  }
}
