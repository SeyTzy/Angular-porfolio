import { Component, inject, signal, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillBarComponent } from './skill-bar.component';

@Component({
  selector: 'app-skills',
  imports: [SkillBarComponent],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">Tools I use to bring ideas to life</p>
        </div>
        
        <div class="skills-grid" #skillsGrid>
          <div class="skill-category">
            <h3 class="category-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Frontend
            </h3>
            <div class="skill-list">
              @for (skill of frontendSkills(); track skill.name) {
                <app-skill-bar [skill]="skill" [visible]="visible()"></app-skill-bar>
              }
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Backend
            </h3>
            <div class="skill-list">
              @for (skill of backendSkills(); track skill.name) {
                <app-skill-bar [skill]="skill" [visible]="visible()"></app-skill-bar>
              }
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              Tools
            </h3>
            <div class="skill-list">
              @for (skill of toolsSkills(); track skill.name) {
                <app-skill-bar [skill]="skill" [visible]="visible()"></app-skill-bar>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  portfolioService = inject(PortfolioService);
  
  visible = signal(false);
  @ViewChild('skillsGrid') skillsGrid!: ElementRef;

  frontendSkills = signal(this.portfolioService.skills().filter(s => s.category === 'frontend'));
  backendSkills = signal(this.portfolioService.skills().filter(s => s.category === 'backend'));
  toolsSkills = signal(this.portfolioService.skills().filter(s => s.category === 'tools'));

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      setTimeout(() => {
        if (this.skillsGrid?.nativeElement) {
          observer.observe(this.skillsGrid.nativeElement);
        }
      }, 100);
    }
  }
}