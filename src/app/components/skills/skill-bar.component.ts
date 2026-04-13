import { Component, Input, signal, effect } from '@angular/core';
import { Skill } from '../../services/portfolio.service';

@Component({
  selector: 'app-skill-bar',
  template: `
    <div class="skill-item">
      <div class="skill-info">
        <span class="skill-name">{{ skill.name }}</span>
        <span class="skill-percentage">{{ skill.level }}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" [style.width.%]="animatedLevel()"></div>
      </div>
    </div>
  `,
  styles: [`
    .skill-item {
      margin-bottom: 1rem;
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .skill-name {
      font-weight: 500;
      color: var(--text-primary);
    }
    
    .skill-percentage {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
    
    .skill-bar {
      height: 8px;
      background: var(--bg-primary);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
      border-radius: 4px;
      transition: width 1s ease-out;
    }
  `]
})
export class SkillBarComponent {
  @Input({ required: true }) skill!: Skill;
  @Input() visible = false;

  animatedLevel = signal(0);

  constructor() {
    effect(() => {
      if (this.visible) {
        setTimeout(() => {
          this.animatedLevel.set(this.skill.level);
        }, 200);
      }
    });
  }
}