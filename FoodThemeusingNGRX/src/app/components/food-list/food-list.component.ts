import { Component } from '@angular/core';
import { FoodItem } from '../../models/food-item.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllFoodItems } from '../../store/food.selector';
import { addFoodItem, removeFoodItem } from '../../store/food.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent {
  foodItems$: Observable<FoodItem[]>;

  constructor(private store: Store) {
    this.foodItems$ = this.store.select(selectAllFoodItems);
    console.log(this.foodItems$);
  }

  addRandom() {
    const randomFood: FoodItem = {
      id: Math.floor(Math.random() * 1000),
      name: 'Random Food ' + Math.floor(Math.random() * 100),
      price: +(Math.random() * 20).toFixed(2),
    };
    this.store.dispatch(addFoodItem({ foodItem: randomFood }));
  }

  remove(id: number) {
    this.store.dispatch(removeFoodItem({ id }));
  }
}
