import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-promobanner',
  standalone: true,
  imports: [],
  templateUrl: './promobanner.component.html',
  styleUrl: './promobanner.component.css',
})
export class PromobannerComponent {
  promomsg: string = 'We have a special post diwali offer!!!!';
  constructor() {
    console.log('Iam in Constructor');
  }
  ngOnInit() {
    console.log('Ng On init Trigger');
  }
  ngOnChanges(changes: SimpleChange): void {
    console.log('ngOnChanges:', changes);
    console.log('ng on changes triggered');
  }
  checkOffer() {
    this.promomsg = 'We have a special post diwali offer ending in 2 days';
  }
  ngOnDestroy() {
    console.log('Ng on Destroy Trigger');
  }
}
