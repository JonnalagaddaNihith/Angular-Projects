import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTotalItems, selectTotalPrice } from '../../store/food.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-stat.component.html',
  styleUrl: './food-stat.component.css',
})
export class FoodStatComponent {
  totalItems$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.totalItems$ = this.store.select(selectTotalItems);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }
}
