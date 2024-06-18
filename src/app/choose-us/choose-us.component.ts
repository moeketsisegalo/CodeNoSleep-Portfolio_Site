import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css']
})
export class ChooseUsComponent {
  fills: number[] = [0, 0, 0, 0, 0, 0]; // Initial fill levels

  fillUp(index: number): void {
    // Fill up when container is hovered
    this.fills[index] = 100;
  }

  resetFill(index: number): void {
    // Reset fill when mouse leaves
    this.fills[index] = 0;
  }
}

