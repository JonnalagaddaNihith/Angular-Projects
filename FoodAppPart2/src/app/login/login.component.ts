import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}
  login() {
    // Simulated login
    if (this.username === 'user' && this.password === 'pass') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/contact']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
