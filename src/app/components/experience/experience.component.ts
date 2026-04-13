import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Experience & Education</h2>
          <p class="section-subtitle">My professional journey</p>
        </div>
        
        <div class="timeline">
          @for (exp of portfolioService.experiences(); track exp.id; let i = $index) {
            <div class="timeline-item" [class.left]="i % 2 === 0" [class.right]="i % 2 !== 0">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-period">{{ exp.period }}</span>
                <h3 class="timeline-title">{{ exp.title }}</h3>
                <span class="timeline-company">{{ exp.company }}</span>
                <p class="timeline-description">{{ exp.description }}</p>
                <span class="timeline-type" [class.education]="exp.type === 'education'">
                  {{ exp.type === 'education' ? 'Education' : 'Work' }}
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  portfolioService = inject(PortfolioService);
}