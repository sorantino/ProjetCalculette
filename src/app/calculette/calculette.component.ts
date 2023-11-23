import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CompteurDeCalculComponent} from "../compteur-de-calcul/compteur-de-calcul.component";

@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CompteurDeCalculComponent],
  templateUrl: './calculette.component.html',
  styleUrl: './calculette.component.css'
})
export class CalculetteComponent {

  @ViewChild('compteur') compteur!: CompteurDeCalculComponent;


  public flagTropDeCalcul: boolean = false;

  public calculatrice: FormGroup;

  public resultat: number = 0;

  public operande1: FormControl = new FormControl<number>(0, [
    Validators.min(1),
    Validators.required
  ]);

  public operateur: FormControl = new FormControl<string>('+', Validators.required);

  public operande2: FormControl = new FormControl<number>(0, [
    Validators.min(1),
    Validators.required
  ]);

  constructor() {
    this.calculatrice = new FormGroup({
      operande1: this.operande1,
      operateur: this.operateur,
      operande2: this.operande2,
    });
  }

  calcul(): void {

    this.compteur.calcul();

    this.resultat = eval(
      'parseFloat(this.operande1.value) ' +
      this.operateur.value +
      ' parseFloat(this.operande2.value)'
    );

  }

  public total: number = 0;

  tropDeCalcul($event: boolean) {
    if ($event == true) {
      this.flagTropDeCalcul = true;
    }
  }
}
