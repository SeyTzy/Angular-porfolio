import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Get to know me better</p>
        </div>

        <div class="book-container">
          <div
            class="book"
            [class.open]="isOpen()"
            (click)="toggleBook()"
          >
            <div class="book-cover">
              <div class="cover-content">
                <div class="cover-image-wrapper">
                  <img src="My_Profile.jpg" alt="Profile" class="cover-img">
                </div>
                <div class="cover-text">
                  <h3>Thoeurn Seyhat</h3>
                  <p>Angular Web Developer</p>
                </div>
                <div class="cover-hint">Click to open</div>
              </div>
            </div>

            <div class="book-inside">
              <div class="inside-content">
                <div class="inside-header">
                  <h3>About Thoeurn Seyhat</h3>
                  <div class="ribbon">Full Stack Developer</div>
                </div>
                <div class="inside-body">
                  <p>
                    I'm an Angular developer with a passion for building modern, scalable web applications.
                    Over the years, I've worked with various startups and companies to deliver high-quality
                    solutions that exceed expectations. My expertise spans from Angular fundamentals to advanced
                    patterns like RxJS, NgRx, and server-side rendering.
                  </p>
                  <p>
                    I love turning complex problems into simple, beautiful, and intuitive interfaces.
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source,
                    or sharing knowledge with the developer community.
                  </p>
                </div>
                <div class="inside-stats">
                  <div class="stat">
                    <span class="stat-number">4+</span>
                    <span class="stat-label">Years Exp</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Projects</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">30+</span>
                    <span class="stat-label">Clients</span>
                  </div>
                </div>
                <div class="inside-footer">
                  <a href="#contact" class="btn btn-primary">Let's Talk</a>
                  <a href="#projects" class="btn btn-outline">View My Work</a>
                </div>
              </div>
            </div>

            <div class="book-spine"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  portfolioService = inject(PortfolioService);
  isOpen = signal(false);

  toggleBook() {
    this.isOpen.update(v => !v);
  }
}
