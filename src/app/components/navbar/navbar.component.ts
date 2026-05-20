import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="navbar-container">
        <a href="#home" class="logo">
          <span class="logo-text">Dev</span><span class="logo-accent">Portfolio</span>
        </a>
        
        <div class="nav-overlay" [class.visible]="mobileOpen()" (click)="closeMobileMenu()"></div>

        <ul class="nav-links" [class.mobile-open]="mobileOpen()">
          <li><a href="#home" (click)="closeMobileMenu()">Home</a></li>
          <li><a href="#about" (click)="closeMobileMenu()">About</a></li>
          <li><a href="#skills" (click)="closeMobileMenu()">Skills</a></li>
          <li><a href="#projects" (click)="closeMobileMenu()">Projects</a></li>
          <li><a href="#experience" (click)="closeMobileMenu()">Experience</a></li>
          <li><a href="#contact" (click)="closeMobileMenu()">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <button class="theme-toggle" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
            @if (themeService.isDarkMode()) {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>
          <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
            <span class="bar" [class.open]="mobileOpen()"></span>
            <span class="bar" [class.open]="mobileOpen()"></span>
            <span class="bar" [class.open]="mobileOpen()"></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  
  isScrolled = signal(false);
  mobileOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMobileMenu(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileOpen.set(false);
  }
}