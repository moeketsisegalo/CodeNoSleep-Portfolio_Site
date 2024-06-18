// footer.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) { }

  scrollToTop() {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
    this.scrollToTop(); // Scroll to the top after navigating
  }
}
