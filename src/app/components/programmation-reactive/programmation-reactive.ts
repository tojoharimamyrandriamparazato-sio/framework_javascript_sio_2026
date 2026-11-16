import { Component, HostListener, OnInit, signal } from '@angular/core';
import { filter, interval, map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-programmation-reactive',
  imports: [],
  templateUrl: './programmation-reactive.html',
  styleUrl: './programmation-reactive.scss',
})
export class ProgrammationReactive implements OnInit {
  iksa = signal<number>(0);
  message = signal<string>("Examen en cours");
  subscriber = new Subscription();
  estExpire: boolean = false;
  @HostListener("document:visibilitychange")
  onVisibilityChange() {
    console.log("ngVisibilityChange");
    if(document.hidden && !this.estExpire) {
      this.subscriber.unsubscribe();
      this.message.set("Examen foutu ! Tohizo foana io fanakatonana onglet io. Kkkkk !");
    }
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    this.iksa.set(0);
    const intervalle$ = interval(1000);
    this.subscriber = intervalle$.subscribe({
      next: (valeur) => {
        this.iksa.set(valeur);
        if(this.iksa() >= 10) {
          this.estExpire = true;
          this.subscriber.unsubscribe();
          this.message.set("Tapitra ny fotoana ry zanjy eh !");
        }
      }
    });
    const suiteNombres$ = of(2, 5, 1, 7, 8);
    const suiteNombresPairs$ = suiteNombres$.pipe(
      filter((valeur) => valeur % 2 == 0)
    );
    const suiteNombresTriples$ = suiteNombres$.pipe(
      map((valeur) => valeur * 3)
    );
    suiteNombresTriples$.subscribe({
      next: (valeur) => {
        console.log("Triples voaray : ", valeur);
      }
    });
    suiteNombresPairs$.subscribe({
      next: (valeur) => {
        console.log("Pairs voaray : ", valeur);
      }
    });

    suiteNombres$.subscribe({
      next: (valeur) => {
        console.log("Valeur voaray : ", valeur);
      },
      complete: () => {
        console.log("Flux vita !");
      }
    });
    suiteNombres$.subscribe({
      next: (valeur) => {
        console.log("Voatifitra : ", valeur);
      }
    });
  }
}
