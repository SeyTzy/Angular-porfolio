import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Let's work together</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-form-container">
            @if (submitted()) {
              <div class="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    placeholder="Your Name"
                    [class.error]="isInvalid('name')">
                  @if (isInvalid('name')) {
                    <span class="error-text">
                      @if (contactForm.get('name')?.errors?.['required']) {
                        Name is required
                      } @else if (contactForm.get('name')?.errors?.['minlength']) {
                        Name must be at least 2 characters
                      }
                    </span>
                  }
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    placeholder="email@example.com"
                    [class.error]="isInvalid('email')">
                  @if (isInvalid('email')) {
                    <span class="error-text">
                      @if (contactForm.get('email')?.errors?.['required']) {
                        Email is required
                      } @else if (contactForm.get('email')?.errors?.['email']) {
                        Please enter a valid email
                      }
                    </span>
                  }
                </div>
                
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea 
                    id="message" 
                    formControlName="message"
                    placeholder="Your message..."
                    rows="5"
                    [class.error]="isInvalid('message')"></textarea>
                  @if (isInvalid('message')) {
                    <span class="error-text">
                      @if (contactForm.get('message')?.errors?.['required']) {
                        Message is required
                      } @else if (contactForm.get('message')?.errors?.['minlength']) {
                        Message must be at least 10 characters
                      }
                    </span>
                  }
                </div>
                
                <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || submitting()">
                  @if (submitting()) {
                    <span class="spinner"></span>
                    Sending...
                  } @else {
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  }
                </button>
              </form>
            }
          </div>
          
          <div class="contact-info">
            <div class="info-card">
              <h3>Let's Connect</h3>
              <p>Feel free to reach out for collaborations, questions, or just to say hello. I'm always open to discussing new projects and opportunities.</p>
              
              <div class="social-links">
                <a [href]="portfolioService.github()" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a [href]="portfolioService.linkedin()" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
                  <img src="/linkin.png" alt="LinkedIn" width="24" height="24">
                </a>
                <a [href]="portfolioService.telegram()" target="_blank" rel="noopener" class="social-link" aria-label="Telegram">
                  <img src="/telegram.png" alt="Telegram" width="24" height="24">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  portfolioService = inject(PortfolioService);
  
  submitted = signal(false);
  submitting = signal(false);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.invalid && control?.touched);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitting.set(true);
      console.log('Form submitted:', this.contactForm.value);
      
      setTimeout(() => {
        this.submitting.set(false);
        this.submitted.set(true);
        this.contactForm.reset();
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}