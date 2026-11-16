import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Andrana } from './components/andrana/andrana';
import { ExempleVariableClassique } from './components/exemple-variable-classique/exemple-variable-classique';
import { ExempleSignaux } from './components/exemple-signaux/exemple-signaux';
import { ExempleSignauxCrud } from './components/exemple-signaux-crud/exemple-signaux-crud';
import { ProgrammationReactive } from './components/programmation-reactive/programmation-reactive';
import { ClientList } from './components/client-list/client-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ExempleSignauxCrud,
    ProgrammationReactive,
    ClientList
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('garazy');
  anarana: string = "Rabenja";
}
