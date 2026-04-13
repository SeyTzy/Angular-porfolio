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
                    placeholder="your.email@example.com"
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a [href]="portfolioService.telegram()" target="_blank" rel="noopener" class="social-link" aria-label="Telegram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.043.192.062.283.048.24.097.567.124.861.015.163.015.292.014.453l-.013 2.227c.017.417.064.792.136 1.115.073.33.164.573.273.729.104.146.238.257.386.336.156.082.323.123.484.145.17.022.352.041.552.041H16.3c.19 0 .352-.018.485-.053.14-.037.262-.111.359-.229.103-.123.18-.285.229-.479.052-.205.084-.45.093-.725.012-.284.014-.56.015-.815l-.003-2.234c-.003-.228-.004-.404-.007-.539a1.46 1.46 0 0 1-.05-.223c-.021-.066-.052-.14-.09-.226-.042-.094-.095-.193-.154-.296-.065-.104-.127-.179-.19-.227-.063-.054-.137-.115-.216-.188a.87.87 0 0 1-.164-.232c-.06-.083-.098-.155-.127-.213-.029-.058-.053-.114-.078-.173a.477.477 0 0 1-.046-.165.285.285 0 0 1-.026-.155.188.188 0 0 1-.027-.15.108.108 0 0 1-.004-.045c.003-.001.032-.023.083-.068.05-.045.111-.1.17-.166.057-.066.107-.13.148-.193.041-.063.066-.124.074-.183.008-.06.027-.114.056-.163.03-.05.064-.09.102-.127.038-.036.083-.068.132-.09.05-.023.104-.04.165-.052a.583.583 0 0 1 .217-.018h.125c.072 0 .142.003.21.009.068.006.134.016.197.028.063.013.122.029.178.053.055.024.108.054.156.085.049.032.09.068.126.108.035.04.059.083.078.125.019.043.033.09.04.139.008.05.015.104.023.163l.008 2.252c.01.247.015.44.015.58 0 .14-.003.263-.01.369a.62.62 0 0 1-.033.236c-.015.05-.038.095-.063.133-.025.037-.054.068-.086.092-.031.024-.067.04-.104.053-.037.013-.075.02-.112.028-.038.007-.076.01-.114.013-.038.003-.075.005-.112.005h-.129c-.072 0-.15-.002-.237-.007-.088-.005-.177-.013-.267-.026-.09-.012-.175-.028-.256-.045-.081-.017-.153-.04-.219-.067a.597.597 0 0 1-.163-.086.424.424 0 0 1-.106-.116.292.292 0 0 1-.04-.145c-.006-.05-.01-.103-.013-.16-.002-.057-.004-.115-.004-.174l-.002-2.27c.002-.15.008-.293.018-.426.01-.134.025-.254.044-.361.02-.107.045-.198.077-.274.031-.076.07-.139.113-.191.043-.052.096-.091.155-.12a.49.49 0 0 1 .214-.067c.075-.012.154-.02.238-.026.083-.005.17-.01.259-.011a.546.546 0 0 1 .208.005zm-2.863 3.325c-.06.004-.124.016-.192.038a.47.47 0 0 0-.163.093c-.052.046-.092.106-.121.18-.028.073-.046.161-.052.263-.007.102-.012.21-.012.324v.752c0 .113.004.22.012.32.007.1.023.19.051.27.028.08.065.145.112.197.047.052.104.09.17.116a.53.53 0 0 0 .216.044c.078.004.156.008.238.008h.108c.086 0 .167-.003.242-.009.075-.005.143-.016.205-.032a.49.49 0 0 0 .166-.074.394.394 0 0 0 .11-.121.32.32 0 0 0 .04-.159c.004-.063.008-.13.008-.203v-.752c0-.115-.004-.222-.011-.32-.008-.098-.024-.182-.051-.252-.028-.07-.064-.127-.11-.17-.047-.044-.103-.078-.168-.103a.525.525 0 0 0-.21-.04zm.53 5.94c-.063.007-.132.014-.21.025-.078.01-.155.025-.233.044-.078.019-.149.044-.216.075a.49.49 0 0 0-.156.113.38.38 0 0 0-.09.148c-.019.056-.031.119-.031.189v.752c0 .085.008.16.024.229.017.069.04.126.072.176.031.05.07.088.114.116a.47.47 0 0 0 .153.063c.06.016.124.024.19.024h.129c.085 0 .162-.007.23-.02.069-.013.131-.037.188-.069.057-.033.106-.075.147-.127.041-.052.074-.111.097-.178.024-.067.038-.14.044-.22.006-.08.01-.167.01-.26v-.752c0-.113-.003-.216-.01-.31-.006-.093-.02-.175-.039-.247a.46.46 0 0 0-.082-.19c-.034-.058-.076-.104-.122-.14a.52.52 0 0 0-.166-.09zm.525 6.098c-.042.004-.087.01-.137.013-.05.004-.102.009-.156.018a.47.47 0 0 0-.142.04c-.044.018-.08.043-.113.075a.36.36 0 0 0-.075.104c-.018.04-.029.085-.029.134v.752c0 .07.006.133.019.188.012.056.032.104.06.145.028.04.064.07.107.091.043.022.094.036.153.046.059.01.121.016.188.016h.108c.074 0 .14-.005.197-.015.058-.01.11-.027.158-.051.047-.024.086-.055.117-.092.03-.037.054-.08.07-.129.016-.049.026-.104.029-.166.004-.061.007-.126.007-.195v-.752c0-.076-.005-.145-.015-.208a.45.45 0 0 0-.05-.175c-.022-.06-.05-.11-.084-.152-.034-.04-.074-.074-.12-.097a.47.47 0 0 0-.153-.057z"/></svg>
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