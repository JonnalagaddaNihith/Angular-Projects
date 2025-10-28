import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataFromFile from '../../../../public/foodMenu.json';
import { FoodMenuService } from '../../SharedServices/food-menu.service';

@Component({
  selector: 'app-menudetails',
  standalone: true,
  imports: [],
  templateUrl: './menudetails.component.html',
  styleUrl: './menudetails.component.css',
})
export class MenudetailsComponent {
  selectedID: any;
  foodData: any;
  selectedFoodData: any;
  constructor(
    private objMenuRoute: ActivatedRoute,
    private objFoodMenuService: FoodMenuService
  ) {
    //dependency injection
    this.foodData = this.objFoodMenuService.getFoodMenuDataFromFile();
    this.objMenuRoute.params.subscribe((param: any) => {
      this.selectedID = param['menuid']; //retriving the id from the address bar thru ActivatedRoute
      this.loadSpecificFoodData();
    });
  }
  loadSpecificFoodData() {
    //select food data based on the id
    for (let item of this.foodData) {
      if (item.id == this.selectedID) {
        this.selectedFoodData = item;
        break;
      }
    }
  }
}
