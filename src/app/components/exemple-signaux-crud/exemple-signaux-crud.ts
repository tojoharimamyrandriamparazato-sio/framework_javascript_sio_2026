import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { InversionPipe } from '../../pipes/inversion-pipe';
import { TroncaturePipe } from '../../pipes/troncature-pipe';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exemple-signaux-crud',
  imports: [
    DatePipe,
    UpperCasePipe,
    InversionPipe,
    TroncaturePipe,
    FormsModule
  ],
  templateUrl: './exemple-signaux-crud.html',
  styleUrl: './exemple-signaux-crud.scss',
})

export class ExempleSignauxCrud {
  nom: string = "";
  prix: number = 0;
  produits = signal<IProduit[]>([
    {id: 1, nom: "Clavier", prix: 50000, dateReappro: new Date("2026-04-18")},
    {id: 2, nom: "Souris", prix: 25000, dateReappro: new Date("2026-02-11")},
    {id: 3, nom: "Ecran", prix: 450000, dateReappro: new Date("2026-07-23")}
  ]);
  nombreProduits = computed(() => this.produits().length);
  ajouterProduit(forma: NgForm): void {
    if(forma.valid) {
      const dernierId = this.produits()[this.nombreProduits() - 1].id;
      const idVaovao = dernierId + 1;
      const nouveauProduit: IProduit = {
        id: idVaovao,
        nom: this.nom,
        prix: this.prix,
        dateReappro: new Date()};
      this.produits.update(liste => [...liste, nouveauProduit]);
    }
  }
  supprimerProduit(id: number): void {
    this.produits.update(liste => 
      liste.filter(produit => produit.id !== id)
    );
  }
}
