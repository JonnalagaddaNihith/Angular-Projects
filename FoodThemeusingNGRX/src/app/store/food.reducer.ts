import { createReducer, on } from '@ngrx/store';
import { addFoodItem, removeFoodItem } from '../store/food.action';
import { FoodItem } from '../models/food-item.model';
export interface FoodState {
  items: FoodItem[];
}

export const initialState: FoodState = {
  items: [],
};

export const foodReducer = createReducer(
  initialState,
  on(addFoodItem, (state, { foodItem }) => ({
    ...state,
    items: [...state.items, foodItem],
  })),
  on(removeFoodItem, (state, { id }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  }))
);

/*
Initally:
const state: FoodState = {
  items: [
 
   
  ]
  cart:[]
};
Example:
const state: FoodState = {
  items: [
    { id: 1, name: 'Pizza', price: 12.5 },
   
  ]
    cart[{
    cardtid: 1,cartvalue:20000}]
};
*/
/*
 { id: 2, name: 'Burger', price: 9.0 },
    { id: 3, name: 'Pasta', price: 10.0 }
*/
