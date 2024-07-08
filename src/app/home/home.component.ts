import { Component, inject } from '@angular/core';
import { FruitsService } from '../shared/fruits.service';
import { Fruits } from '../shared/entities';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  fruits: Fruits[] = [];
  index: any;
  service = inject(FruitsService)

  total_quatity: number = 0;
  total_HT: number = 0;
  total_TTC: number = 0;

  ngOnInit(): void {
    this.index;
    this.getFruits();
    this.addQuantityFruit(this.index);
    this.removeQuantityFruit(this.index);
  }

  getFruits() {
    this.fruits = this.service.fetchAll();
  }

  addQuantityFruit(index: number) {
    this.fruits[index].quantite++;
  }

  removeQuantityFruit(index: number) {
    if (this.fruits[index].quantite <= 0) {
      this.fruits[index].quantite = 0;
    } else {
      this.fruits[index].quantite--;
    }
  }

  public form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prix: new FormControl(''),
    quantite: new FormControl(''),
  })
}

