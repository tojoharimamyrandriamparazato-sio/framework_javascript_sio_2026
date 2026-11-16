import { Component } from '@angular/core';

@Component({
  selector: 'app-andrana',
  imports: [],
  templateUrl: './andrana.html',
  styleUrl: './andrana.scss',
})
export class Andrana {
  nom: string = "Ralita";
  age: number = 17;
  ville: string = "Antananarivo";
  texte: string = "";
  visibilite: string = "password";
  kakanjila: string = "voir";
  i: number = 0;
  zavatra() {
    this.texte += "Io eeeee ";
  }
  voirMdp() {
    this.visibilite = this.visibilite === "password" ?
    "text" : "password";
    this.kakanjila = this.kakanjila === "voir" ? 
    "cacher" : "voir";
  }
  incrementer() {
    this.i++;
  }
  decrementer() {
    this.i--;
  }
}
