import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compteur-de-calcul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compteur-de-calcul.component.html',
  styleUrl: './compteur-de-calcul.component.css'
})
export class CompteurDeCalculComponent {
  @Input() test: number = 0;



}
