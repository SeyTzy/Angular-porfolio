import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-particles"></div>
      </div>
      
      <div class="hero-content">
        <span class="hero-greeting">{{ greeting() }}</span>
        <h1 class="hero-name">{{ portfolioService.name() }}</h1>
        <div class="hero-title-container">
          <span class="hero-title">{{ portfolioService.title() }}</span>
          <span class="hero-cursor">|</span>
        </div>
        <p class="hero-tagline">{{ portfolioService.tagline() }}</p>
        
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">
            <span>Hire Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button class="btn btn-secondary" (click)="downloadCV()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <a href="#about" class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </a>
    </section>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  portfolioService = inject(PortfolioService);
  
  greeting = signal('Hello, I\'m');
  private intervalId: any;

  ngOnInit() {
    const hours = new Date().getHours();
    if (hours < 12) this.greeting.set('Good Morning, I\'m');
    else if (hours < 18) this.greeting.set('Good Afternoon, I\'m');
    else this.greeting.set('Good Evening, I\'m');
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Mr_Seyhat_CV.pdf';
    link.click();
  }
}