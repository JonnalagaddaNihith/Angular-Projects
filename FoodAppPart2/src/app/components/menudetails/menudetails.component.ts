import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataFromFile from '../../../../public/foodMenu.json';

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
  constructor(private objMenuRoute: ActivatedRoute) {
    this.foodData = dataFromFile; //loading all the food data from the file
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
