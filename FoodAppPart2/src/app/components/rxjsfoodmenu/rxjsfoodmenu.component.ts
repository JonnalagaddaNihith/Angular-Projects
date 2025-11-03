import { Component } from '@angular/core';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
import { IFoodMenu, IRecipeResponse } from '../../Interfaces/ifood-menu';
import { catchError, finalize, of, startWith, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjsfoodmenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjsfoodmenu.component.html',
  styleUrl: './rxjsfoodmenu.component.css',
})
export class RxjsfoodmenuComponent {
  menuItems$: IFoodMenu[] = [];
  loading = false;
  errorMessage = '';

  private destroy$ = new Subject<void>();

  constructor(private foodMenuService: FoodMenuService) {
    this.fetchMenu();
  }

  fetchMenu() {
    this.loading = true;

    this.foodMenuService
      .getFoodRecipeDataFromWebsite()
      .pipe(
        // Emit a valid default object of type IRecipeResponse
        startWith({
          recipes: [],
          total: 0,
          skip: 0,
          limit: 0,
        } as IRecipeResponse),

        takeUntil(this.destroy$),

        catchError((err) => {
          this.errorMessage =
            'Failed to load menu items. Server error. We will fix it up soon';
          return of({
            recipes: [],
            total: 0,
            skip: 0,
            limit: 0,
          } as IRecipeResponse);
        }),

        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: IRecipeResponse) => {
        this.menuItems$ = data.recipes;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // emits a signal to stop all active streams
    this.destroy$.complete(); //  closes the Subject permanently
  }
}
