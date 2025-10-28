import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import foodDataFromFile from '../../../public/foodMenu.json';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  private foodMenuData: any;
  
  constructor(private http: HttpClient) {
    this.foodMenuData = foodDataFromFile;
  }
  
  getFoodMenuDataFromFile() {
    return this.foodMenuData;
  }

  getFoodRecipeDataFromWebsite(): Observable<any> {
    return this.http.get('https://dummyjson.com/recipes');
    //https://dummyjson.com/recipes
  }
}
