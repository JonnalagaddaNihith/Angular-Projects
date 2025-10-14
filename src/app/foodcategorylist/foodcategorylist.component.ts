import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foodcategorylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodcategorylist.component.html',
  styleUrl: './foodcategorylist.component.css'
})
export class FoodcategorylistComponent {
  categories: any = [
    {
      name: 'Dosa',
      varities: ['Ghee roast', 'Paper Roast', 'Masala Dosa'],
      showItems: true,
    },
    {
      name: 'Idly',
      varities: ['Chilli Idli', 'Podi Idly', 'Sambar Idly'],
      showItems: false,
    },
    {
      name: 'Pongal',
      varities: ['Ven Pongal', 'Chakkarai Pongal', 'Millets Pongal'],
      showItems: false,
    },
  ];
}
