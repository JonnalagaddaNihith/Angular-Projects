import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-promobanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promobanner.component.html',
  styleUrl: './promobanner.component.css',
})
export class PromobannerComponent {
  @Input() promoText: string = '';
  @Input() visibleDuration: number = 5;
  countdown: number; // 5 minutes = 300 seconds
  intervalId!: any;

  isVisible: boolean = false;
  private timer: any;

  constructor() {
    console.log('Constructor: PromoBannerComponent created');
    this.countdown = this.visibleDuration;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component Initialized');
    if (this.visibleDuration > 0) {
      this.isVisible = true;
      this.startVisibilityTimer();
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection run');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized');
  }

  startVisibilityTimer(): void {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.isVisible = false;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component destroyed');
    clearTimeout(this.timer);
  }
}
