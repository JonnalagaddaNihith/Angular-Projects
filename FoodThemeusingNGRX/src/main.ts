import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { foodReducer } from './app/store/food.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ food: foodReducer })],
});
