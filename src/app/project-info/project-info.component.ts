import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css'],
  animations: [
    trigger('count', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectInfoComponent implements OnInit {
  completedProjects: number = 0;
  workingHours: number = 0;
  happyCustomers: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Simulate counting animation
    this.countTo(this.completedProjects, 10, 2000);
    this.countTo(this.workingHours, 548, 3000);
    this.countTo(this.happyCustomers, 10, 2500);
  }

  countTo(start: number, end: number, duration: number) {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    let timer: ReturnType<typeof setInterval>;

    const run = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - (remaining * range));
      if (value === end) {
        clearInterval(timer);
      }
      return value;
    };

    timer = setInterval(() => {
      start = run();
      if (start === end) {
        clearInterval(timer);
      }
      this.completedProjects = start;
      this.workingHours = start;
      this.happyCustomers = start;
    }, stepTime);
  }

}
