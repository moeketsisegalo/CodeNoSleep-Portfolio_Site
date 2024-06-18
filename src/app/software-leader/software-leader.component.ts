import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-software-leader',
  templateUrl: './software-leader.component.html',
  styleUrls: ['./software-leader.component.css']
})
export class SoftwareLeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>(); // Used to unsubscribe from the interval when the component is destroyed

  currentImageIndex: number = 0;
  images: string[] = [
    'assets/LAPTOP1.jpg',
    'assets/LAPTOP2.jpg',
    'assets/LAPTOP3.jpg',
    'assets/LAPTOP4.jpg',
    // Add more image paths as needed
  ];

  ngOnInit(): void {
    // Set up an interval to change the image every 5 seconds (adjust as needed)
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.navigateImage('right'));
  }

  ngOnDestroy(): void {
    // Unsubscribe from the interval when the component is destroyed
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateImage(direction: string) {
    if (direction === 'left') {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    } else if (direction === 'right') {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  }
}
