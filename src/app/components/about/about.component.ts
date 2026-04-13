import { Component, inject } from '@angular/core';
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
        
        <div class="about-content">
          <div class="about-image">
            <div class="image-wrapper">
              <img src="My_Profile.jpg" 
                   alt="Profile" 
                   class="profile-img">
              <div class="image-border"></div>
            </div>
          </div>
          
          <div class="about-text">
            <h3>Passionate Angular Developer with 4+ Years of Experience</h3>
            <p>
              I'm a dedicated Angular developer with a passion for building modern, scalable web applications. 
              Over the years, I've worked with various startups and companies to deliver high-quality 
              solutions that exceed expectations. My expertise spans from Angular fundamentals to advanced 
              patterns like RxJS, NgRx, and server-side rendering.
            </p>
            <p>
              I love turning complex problems into simple, beautiful, and intuitive interfaces. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source, 
              or sharing knowledge with the developer community.
            </p>
            
            <div class="stats">
              <div class="stat">
                <span class="stat-number">4+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat">
                <span class="stat-number">50+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat">
                <span class="stat-number">30+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
            
            <div class="about-cta">
              <a href="#contact" class="btn btn-primary">Let's Talk</a>
              <a href="#projects" class="btn btn-outline">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  portfolioService = inject(PortfolioService);
}