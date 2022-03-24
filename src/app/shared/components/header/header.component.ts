import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hasScrolledBanner: boolean = false;
  isOnMidScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
  }
  // Listen for window size changes
  @HostListener("window:resize", ["$event"])
  getScreenSize(): void {
    // If browser window is resized below mid screen size width
    window.innerWidth <= 858
      ? (this.isOnMidScreen = true)
      : (this.isOnMidScreen = false);
  }

  // Window scroll events
  @HostListener("window:scroll", ["$event"])
  onScroll() {
    if (window.pageYOffset > 100)
      this.hasScrolledBanner = true;
    else this.hasScrolledBanner = false;
  }
}
