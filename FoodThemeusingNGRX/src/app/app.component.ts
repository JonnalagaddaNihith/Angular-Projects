import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodStatComponent } from './components/food-stat/food-stat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodListComponent, FoodStatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FoodThemeusingNGRX';
}
