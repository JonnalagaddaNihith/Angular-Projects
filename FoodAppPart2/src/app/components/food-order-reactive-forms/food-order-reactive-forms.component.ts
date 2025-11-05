import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-food-order-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './food-order-reactive-forms.component.html',
  styleUrl: './food-order-reactive-forms.component.css',
})
export class FoodOrderReactiveFormsComponent {
  orderForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.orderForm = fb.group({
      customerName: new FormControl('', [
        Validators.required, //built-in validator
        this.noNumbersValidator, //custom validator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      address: new FormControl('', [Validators.required]),
      noOfItems: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      specialInstructions: new FormControl(''),
    });
    this.printValues();
  }
  printValues() {
    console.log('printvalues method is called');
    console.log(this.orderForm.get('customerName'));
    console.log(this.email);
    console.log(this.phone);
  }
  get customerName() {
    return this.orderForm.get('customerName');
  }
  get email() {
    return this.orderForm.get('email');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get address() {
    return this.orderForm.get('address');
  }
  get noOfItems() {
    return this.orderForm.get('noOfItems');
  }
  get specialInstructions() {
    return this.orderForm.get('specialInstructions');
  }
  // Custom validator: No numbers allowed in customerName
  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value); //boolean
    return hasNumber ? { hasNumber: true } : null;
  }
}
