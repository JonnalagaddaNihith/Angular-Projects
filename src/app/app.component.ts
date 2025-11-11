import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackRatingComponent } from './components/feedback-rating/feedback-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodAngularMaterial';
}
