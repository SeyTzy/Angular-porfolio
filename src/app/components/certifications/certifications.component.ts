import { Component } from '@angular/core';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  category: string;
  featured: boolean;
}

@Component({
  selector: 'app-certifications',
  template: `
    <section id="certifications" class="certifications">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Certifications</h2>
          <p class="section-subtitle">Professional credentials and continuous learning</p>
        </div>

        <div class="cert-grid">
          @for (cert of certifications; track cert.id) {
            <div class="cert-card" [class.featured]="cert.featured">
              <div class="cert-shine"></div>
              <div class="cert-icon">
                @if (cert.category === 'angular') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.964 0L.692 3.934l1.543 14.108L11.964 24l9.801-5.958 1.543-14.108L11.964 0zm.036 4.907l5.834 13.184H14.79l-1.426-3.576H9.619l-1.511 3.576H5.843L11.964 4.91h.036zm-.036 2.176l-2.274 5.733h4.548l-2.274-5.733z"/></svg>
                } @else if (cert.category === 'aws') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                } @else if (cert.category === 'cloud') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
                } @else if (cert.category === 'database') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 17v-2.42c1.39.86 3.6 1.42 6 1.42s4.61-.56 6-1.42V17c0 .5-2.13 2-6 2s-6-1.5-6-2zm-2-5.49V9.42C5.36 10.28 7.62 10.84 10 10.91V13c-1.89-.03-3.72-.46-5-1.49h-.01-.01zm8 1.49v-2.09c2.38-.07 4.64-.63 6-1.49v2.09c-1.36.86-3.62 1.42-6 1.49z"/></svg>
                } @else {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
                }
              </div>
              <div class="cert-body">
                <span class="cert-badge" [class.featured]="cert.featured">
                  @if (cert.featured) {
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  }
                  {{ cert.category }}
                </span>
                <h3 class="cert-title">{{ cert.title }}</h3>
                <p class="cert-issuer">{{ cert.issuer }}</p>
                <div class="cert-footer">
                  <span class="cert-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {{ cert.date }}
                  </span>
                  <span class="cert-id">{{ cert.credentialId }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      id: 1,
      title: 'Angular Certified Developer',
      issuer: 'Angular University',
      date: 'Jan 2026',
      credentialId: 'CR-ANG-2026-001',
      image: '',
      category: 'angular',
      featured: true
    },
    {
      id: 2,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Nov 2025',
      credentialId: 'AWS-SAA-2025-8842',
      image: '',
      category: 'aws',
      featured: false
    },
    {
      id: 3,
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: 'Aug 2025',
      credentialId: 'GCP-PDE-2025-3321',
      image: '',
      category: 'cloud',
      featured: false
    },
    {
      id: 4,
      title: 'MongoDB Database Admin',
      issuer: 'MongoDB University',
      date: 'Jun 2025',
      credentialId: 'MDB-DBA-2025-776',
      image: '',
      category: 'database',
      featured: false
    },
    {
      id: 5,
      title: 'RxJS Mastery Certification',
      issuer: 'ReactiveX',
      date: 'Mar 2025',
      credentialId: 'RX-MSTR-2025-442',
      image: '',
      category: 'angular',
      featured: false
    },
    {
      id: 6,
      title: 'TypeScript Advanced Patterns',
      issuer: 'Microsoft Learn',
      date: 'Jan 2025',
      credentialId: 'TS-ADV-2025-901',
      image: '',
      category: 'tools',
      featured: false
    }
  ];
}
