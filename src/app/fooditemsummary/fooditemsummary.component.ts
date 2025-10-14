import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RatingPipe } from '../rating.pipe';
import { FoodcategorylistComponent } from '../foodcategorylist/foodcategorylist.component';

@Component({
  selector: 'app-fooditemsummary',
  standalone: true,
  imports: [CommonModule, RatingPipe],
  templateUrl: './fooditemsummary.component.html',
  styleUrl: './fooditemsummary.component.css'
})
export class FooditemsummaryComponent {
  foodName:string;
  originalPrice:number;
  foodRating:number
  discount:number
  constructor(){
    this.foodName ="Veg Burger"
    this.originalPrice=120.80
    this.discount=0.15
    this.foodRating=4.2
  }
}
