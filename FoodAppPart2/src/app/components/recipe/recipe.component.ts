import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FoodMenuService } from '../../SharedServices/food-menu.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  recipeData$: any;
  constructor(private objFoodMenuService: FoodMenuService) {
    this.recipeData$ = this.objFoodMenuService.getFoodRecipeDataFromWebsite();
    // .getFoodRecipeDataFromWebsite()
    // .subscribe((data: any) => {
    //   this.recipeData$ = data;
    // });
  }
}
