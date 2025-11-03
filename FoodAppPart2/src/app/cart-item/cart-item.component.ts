import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  template: `
    <br /><br /><br /><br />
    <div>
      <h3>Item Name</h3>
      <p>Quantity: {{ quantity() }}</p>

      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  quantity = signal(1);
  //private renderCount = 0;
  increment() {
    this.quantity.set(this.quantity() + 1);
  }
  decrement() {
    this.quantity.set(this.quantity() - 1);
  }
  //below lifecycle will not be called during signals coz entire page is not re-rendered
  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('ng on init called');
  }
  ngOnChanges() {
    console.log('ng on change called');
  }
  ngOnDestroy() {
    console.log('Destroy is Called');
  }
}
