import { Component } from '@angular/core';

@Component({
  selector: 'app-basicfooddata',
  standalone: true,
  imports: [],
  templateUrl: './basicfooddata.component.html',
  styleUrl: './basicfooddata.component.css'
})
export class BasicfooddataComponent {
  foodName: string = 'Margherita Pizza';
  foodImage: string = '../images/Pizza.jpeg';
  foodPrice: number = 299;


  orderNow() {
    alert(`${this.foodName} has been added to your cart`);
  }
}
