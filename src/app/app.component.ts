import { Component } from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  articolo: Articolo;

  constructor() {
    this.articolo = new Articolo('Titolo', 'Autore', 'Testo');
  }
}
